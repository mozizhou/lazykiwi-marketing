import { modelCatalog } from "@/demo/data/modelCatalog";
import { templates } from "@/demo/data/templatesList";
import { tools } from "@/demo/data/toolsList";

/** Single source of truth for marketing-site counts shown in UI and metadata. */
export const siteStats = {
  modelCount: modelCatalog.length,
  templateCount: templates.length,
  toolCount: tools.length,
} as const;

export function formatCountLabel(count: number): string {
  return `${count}+`;
}

export const modelCountLabel = formatCountLabel(siteStats.modelCount);
export const templateCountLabel = formatCountLabel(siteStats.templateCount);
export const toolCountLabel = formatCountLabel(siteStats.toolCount);
