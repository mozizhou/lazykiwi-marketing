import { getToolPage } from "@/demo/data/toolPages";
import { tools } from "@/demo/data/toolsList";
import { getModelData } from "@/demo/data/modelPages";
import { getTemplatePage } from "@/demo/data/templatePages";
import { templates } from "@/demo/data/templatesList";
import { getBlogData } from "@/demo/data/blogPosts";
import { getCmsPageContent, getTemplatePageContent, type CmsPageType } from "./templatePage";

export function toolExistsInRegistry(slug: string): boolean {
  return Boolean(getToolPage(slug) || tools.some((item) => item.slug === slug));
}

export function modelExistsInRegistry(slug: string): boolean {
  return Boolean(getModelData(slug));
}

export function templateExistsInRegistry(slug: string): boolean {
  return Boolean(getTemplatePage(slug) || templates.some((item) => item.slug === slug));
}

export function blogExistsInRegistry(slug: string): boolean {
  return Boolean(getBlogData(slug));
}

export async function pageExists(pageType: CmsPageType, slug: string): Promise<boolean> {
  const value = slug?.trim();
  if (!value) return false;

  switch (pageType) {
    case "tool":
      if (toolExistsInRegistry(value)) return true;
      return Boolean((await getCmsPageContent("tool", value))?.doc);
    case "model":
      if (modelExistsInRegistry(value)) return true;
      return Boolean((await getCmsPageContent("model", value))?.doc);
    case "template":
      if (templateExistsInRegistry(value)) return true;
      return Boolean((await getTemplatePageContent(value))?.blocks?.length);
    case "blog":
      if (blogExistsInRegistry(value)) return true;
      return Boolean((await getCmsPageContent("blog", value))?.doc);
    default:
      return false;
  }
}
