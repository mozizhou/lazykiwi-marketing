type JsonLdScriptProps = {
  data: Record<string, unknown> | null | undefined;
};

/** Server-safe JSON-LD injection for SSR metadata pages. */
export default function JsonLdScript({ data }: JsonLdScriptProps) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
