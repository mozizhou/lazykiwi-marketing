import { useEffect } from "react";

/** Force a media element to stay silent (required for autoplay + UX on marketing homepage). */
export function muteMediaElement(el) {
  if (!el || (el.tagName !== "VIDEO" && el.tagName !== "AUDIO")) return;
  el.muted = true;
  el.defaultMuted = true;
  el.volume = 0;
  el.setAttribute("muted", "");
}

/**
 * Keeps every <video> and <audio> under `containerRef` muted, including dynamically mounted nodes.
 */
export function useLandingMutedMedia(containerRef) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const muteAll = () => {
      root.querySelectorAll("video, audio").forEach(muteMediaElement);
    };

    muteAll();

    const observer = new MutationObserver(muteAll);
    observer.observe(root, { childList: true, subtree: true });

    const enforceOnEvent = (event) => {
      if (root.contains(event.target)) muteMediaElement(event.target);
    };

    root.addEventListener("play", enforceOnEvent, true);
    root.addEventListener("volumechange", enforceOnEvent, true);
    root.addEventListener("loadeddata", enforceOnEvent, true);

    return () => {
      observer.disconnect();
      root.removeEventListener("play", enforceOnEvent, true);
      root.removeEventListener("volumechange", enforceOnEvent, true);
      root.removeEventListener("loadeddata", enforceOnEvent, true);
    };
  }, [containerRef]);
}
