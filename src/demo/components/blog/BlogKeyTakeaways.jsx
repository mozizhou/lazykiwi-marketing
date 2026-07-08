import { Check } from "lucide-react";

export default function BlogKeyTakeaways({ data }) {
  if (!data || !data.points) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-4 sm:px-10">
      <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
        <h2 className="text-xl font-black tracking-tight text-gray-950 sm:text-2xl">
          {data.title}
        </h2>
        <ul className="mt-5 space-y-3.5">
          {data.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-[1rem] leading-7 text-gray-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kiwi-green text-gray-950">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
