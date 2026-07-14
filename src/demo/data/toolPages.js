// Rich tool landing data keyed by slug. Empty until per-tool JSON is added.
export const toolPages = {};

export const getToolPage = (slug) => toolPages[slug] || null;
