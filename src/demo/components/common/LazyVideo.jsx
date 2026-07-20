"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

const LazyVideo = forwardRef(function LazyVideo({ src, poster, className = "", ...props }, ref) {
  const innerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useImperativeHandle(ref, () => innerRef.current);

  useEffect(() => {
    const node = innerRef.current;
    if (!node || shouldLoad) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <video
      ref={innerRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      preload="none"
      className={className}
      {...props}
    />
  );
});

export default LazyVideo;
