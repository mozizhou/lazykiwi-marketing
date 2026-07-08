import { useEffect, useRef, useState } from "react";
import { Lightbulb, Check, Quote, Terminal } from "lucide-react";

function getScrollParents(node) {
  const parents = [];
  let current = node?.parentElement;

  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    if (/(auto|scroll|overlay)/.test(style.overflowY) && current.scrollHeight > current.clientHeight) {
      parents.push(current);
    }
    current = current.parentElement;
  }

  parents.push(window);
  return parents;
}

function getViewportFrame(scroller) {
  if (scroller === window) {
    return { top: 0, height: window.innerHeight };
  }

  const rect = scroller.getBoundingClientRect();
  return { top: rect.top, height: rect.height };
}

function Block({ block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[1.05rem] leading-8 text-gray-700">{block.text}</p>;

    case "heading":
      return <h3 className="pt-2 text-xl font-black tracking-tight text-gray-950">{block.text}</h3>;

    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[1.02rem] leading-7 text-gray-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kiwi-green-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ordered":
      return (
        <ol className="space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-kiwi-yellow text-sm font-black text-gray-950">{i + 1}</span>
              <div>
                <h4 className="text-base font-black text-gray-950">{item.title}</h4>
                <p className="mt-1 text-[1rem] leading-7 text-gray-700">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <figure>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
            <div className="aspect-[16/9]"><img src={block.src} alt={block.caption || ""} loading="lazy" decoding="async" className="h-full w-full object-cover" /></div>
          </div>
          {block.caption && <figcaption className="mt-3 text-center text-sm italic text-gray-400">{block.caption}</figcaption>}
        </figure>
      );

    case "tip":
      return (
        <div className="flex gap-4 rounded-2xl border border-kiwi-green/40 bg-kiwi-light-green/40 p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kiwi-green text-gray-950"><Lightbulb size={20} /></span>
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-kiwi-green-dark">{block.title}</h4>
            <p className="mt-1 text-[1rem] leading-7 text-gray-700">{block.text}</p>
          </div>
        </div>
      );

    case "stat":
      return (
        <div className="rounded-2xl border border-gray-200 bg-gray-950 p-7 text-white">
          <div className="text-4xl font-black tracking-tight text-kiwi-green sm:text-5xl">{block.value}</div>
          <p className="mt-2 text-sm leading-6 text-white/70">{block.label}</p>
        </div>
      );

    case "statband":
      return (
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
          {block.items.map((s, i) => (
            <div key={i} className="bg-white p-5 text-center">
              <div className="text-3xl font-black tracking-tight text-gray-950">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      );

    case "pullquote":
      return (
        <blockquote className="relative rounded-2xl bg-[#FBFCF8] p-7 pl-14">
          <Quote size={28} className="absolute left-5 top-6 text-kiwi-green" fill="currentColor" />
          <p className="text-xl font-bold leading-8 text-gray-900">{block.text}</p>
          {block.cite && <cite className="mt-3 block text-sm font-medium not-italic text-gray-400">— {block.cite}</cite>}
        </blockquote>
      );

    case "promptbox":
      return (
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <Terminal size={14} className="text-kiwi-green" />
            <span className="text-xs font-bold uppercase tracking-wide text-white/60">{block.label || "Prompt"}</span>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 text-[0.85rem] leading-6 text-kiwi-light-green">{block.text}</pre>
        </div>
      );

    case "compare": {
      const rows = block.rows || [];
      return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-gray-50">
                {block.columns.map((c) => (
                  <th key={c} className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i !== rows.length - 1 ? "border-b border-gray-100" : ""}>
                  {r.map((cell, j) => (
                    <td key={j} className={`px-5 py-3 ${j === 0 ? "font-black text-gray-950" : "text-gray-700"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    default:
      return null;
  }
}

export default function BlogArticle({ intro, toc, sections }) {
  const gridRef = useRef(null);
  const asideRef = useRef(null);
  const tocRef = useRef(null);
  const [tocStyle, setTocStyle] = useState({ position: "absolute", top: 0, left: 0, right: 0 });

  useEffect(() => {
    if (!toc || toc.length === 0) return undefined;

    let frame = 0;
    const scrollParents = getScrollParents(gridRef.current);

    const updateTocPosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const grid = gridRef.current;
        const aside = asideRef.current;
        const panel = tocRef.current;
        if (!grid || !aside || !panel || window.innerWidth < 1024) {
          setTocStyle({ position: "absolute", top: 0, left: 0, right: 0 });
          return;
        }

        const gridRect = grid.getBoundingClientRect();
        const asideRect = aside.getBoundingClientRect();
        const panelHeight = panel.offsetHeight;
        const primaryScroller = scrollParents[0] || window;
        const viewport = getViewportFrame(primaryScroller);
        const safeTop = Math.max(viewport.top + 24, 88);
        const centeredTop = viewport.top + Math.round((viewport.height - panelHeight) / 2);
        const floatingTop = Math.max(safeTop, centeredTop);
        const stopPoint = gridRect.bottom - panelHeight;

        if (gridRect.top > floatingTop) {
          setTocStyle({ position: "absolute", top: 0, left: 0, right: 0 });
        } else if (stopPoint <= floatingTop) {
          setTocStyle({ position: "absolute", bottom: 0, left: 0, right: 0 });
        } else {
          setTocStyle({
            position: "fixed",
            top: floatingTop,
            left: asideRect.left,
            width: asideRect.width,
          });
        }
      });
    };

    updateTocPosition();
    scrollParents.forEach((parent) => parent.addEventListener("scroll", updateTocPosition, { passive: true }));
    document.addEventListener("scroll", updateTocPosition, { passive: true, capture: true });
    window.addEventListener("resize", updateTocPosition);

    return () => {
      cancelAnimationFrame(frame);
      scrollParents.forEach((parent) => parent.removeEventListener("scroll", updateTocPosition));
      document.removeEventListener("scroll", updateTocPosition, { capture: true });
      window.removeEventListener("resize", updateTocPosition);
    };
  }, [toc]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
      <div ref={gridRef} className="grid gap-12 lg:grid-cols-[1fr_220px] lg:gap-14">
        <article className="max-w-2xl">
          {intro && (
            <p className="border-l-2 border-kiwi-green pl-5 text-xl font-medium leading-9 text-gray-800">{intro}</p>
          )}
          <div className="mt-12 space-y-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-6">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        {toc && toc.length > 0 && (
          <aside ref={asideRef} className="relative hidden lg:block">
            <div ref={tocRef} style={tocStyle}>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                <Check size={14} className="text-kiwi-green-dark" /> On this page
              </p>
              <nav className="space-y-2.5 border-l border-gray-200">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm leading-snug text-gray-500 transition hover:border-kiwi-green hover:text-gray-900">
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-2xl border border-gray-200 bg-[#FBFCF8] p-5">
                <p className="text-sm font-black text-gray-950">Try it in LazyKiwi</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Turn this into a real short in minutes.</p>
                <a href="/video-generator" className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-kiwi-green px-4 py-2.5 text-xs font-black text-gray-950 transition hover:bg-kiwi-green-dark hover:text-white">
                  Start creating
                </a>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
