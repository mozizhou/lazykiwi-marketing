import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export function isAllowedLinkUrl(url) {
  const trimmed = String(url || "").trim();
  return /^\/[^\s]*$/.test(trimmed) || /^https?:\/\/[^\s]+$/i.test(trimmed);
}

const LINK_CLASS =
  "text-kiwi-green-dark underline underline-offset-2 transition hover:text-kiwi-green";

/**
 * Safely renders inline Markdown links [label](url) as anchor elements.
 * Invalid URLs are left as plain text.
 */
export function renderInlineLinks(text, { className, linkClassName = LINK_CLASS } = {}) {
  const str = String(text ?? "");
  if (!str) return null;

  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{str.slice(lastIndex, match.index)}</Fragment>,
      );
    }

    const label = match[1];
    const href = match[2].trim();
    if (isAllowedLinkUrl(href)) {
      const external = /^https?:\/\//i.test(href);
      parts.push(
        <a
          key={key++}
          href={href}
          className={linkClassName}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>,
      );
    } else {
      parts.push(<Fragment key={key++}>{match[0]}</Fragment>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < str.length) {
    parts.push(<Fragment key={key++}>{str.slice(lastIndex)}</Fragment>);
  }

  if (parts.length === 0) return str;
  if (parts.length === 1 && typeof parts[0] === "string") return parts[0];

  if (className) {
    return <span className={className}>{parts}</span>;
  }
  return parts;
}
