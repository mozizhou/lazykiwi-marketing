/** Read a spec row value by label — body copy should reference specs through this helper. */
export function getSpecValue(specs, label) {
  if (!specs?.rows?.length || !label) return null;
  const row = specs.rows.find((item) => item.label?.toLowerCase() === label.toLowerCase());
  return row?.value ?? null;
}

export function formatSpecsForDescription(specs) {
  if (!specs?.rows?.length) return "";
  return specs.rows.map((row) => `${row.label}: ${row.value}`).join(" · ");
}
