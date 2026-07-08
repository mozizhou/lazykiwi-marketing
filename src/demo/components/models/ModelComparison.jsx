import { Check } from "lucide-react";

export default function ModelComparison({ data }) {
  if (!data || !data.rows) return null;

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {data.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">{data.description}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-gray-50">
                {data.columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-500"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, index) => (
                <tr
                  key={row.model}
                  className={`${index !== data.rows.length - 1 ? "border-b border-gray-100" : ""} ${
                    row.highlight ? "bg-kiwi-light-green/30" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-sm font-black text-gray-950">
                      {row.highlight && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-kiwi-green text-gray-950">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      )}
                      {row.model}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.strength}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.bestFor}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-bold text-gray-600">
                      {row.speed}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
