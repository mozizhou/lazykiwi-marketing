import { getBlogData } from "@/demo/data/blogPosts";
import { getModelCatalogItem } from "@/demo/data/modelCatalog";
import { getModelData } from "@/demo/data/modelPages";
import { getTemplatePage } from "@/demo/data/templatePages";
import { getTemplateData } from "@/demo/data/templatesList";
import { getToolPage } from "@/demo/data/toolPages";
import { tools } from "@/demo/data/toolsList";
import {
  buildBlogJsonLd,
  buildModelCatalogJsonLd,
  buildModelJsonLd,
  buildTemplateJsonLd,
  buildToolJsonLd,
} from "./buildJsonLd";

type Block = { type?: string; data?: Record<string, unknown> };
type CmsDoc = Record<string, unknown> | null | undefined;

function asBlocks(doc: CmsDoc): Block[] {
  return Array.isArray(doc?.blocks) ? (doc.blocks as Block[]) : [];
}

function blockData(blocks: Block[], type: string): unknown {
  return blocks.find((block) => block?.type === type)?.data;
}

export function resolveModelPageJsonLd(slug: string, dbDoc?: CmsDoc) {
  if (dbDoc && asBlocks(dbDoc).length > 0) {
    const blocks = asBlocks(dbDoc);
    const hero = blockData(blocks, "hero") as { name?: string; breadcrumb?: string[] } | undefined;
    const faqRaw = blockData(blocks, "faq");
    const seo = (dbDoc.seo || {}) as { title?: string; description?: string };
    return buildModelJsonLd({
      slug,
      seo,
      hero: { name: hero?.name, breadcrumb: hero?.breadcrumb },
      faq: Array.isArray(faqRaw) ? (faqRaw as Array<{ question: string; answer: string }>) : undefined,
    });
  }

  const data = (dbDoc || getModelData(slug)) as {
    slug?: string;
    seo?: { title?: string; description?: string };
    hero?: { name?: string; breadcrumb?: string[] };
    faq?: Array<{ question: string; answer: string }>;
  } | null;

  if (data?.hero?.name || data?.seo) {
    return buildModelJsonLd({
      slug: data.slug || slug,
      seo: data.seo,
      hero: data.hero,
      faq: data.faq,
    });
  }

  const catalogItem = getModelCatalogItem(slug);
  if (catalogItem) {
    return buildModelCatalogJsonLd(catalogItem.slug, catalogItem.name, catalogItem.blurb);
  }

  return null;
}

export function resolveToolPageJsonLd(slug: string, dbDoc?: CmsDoc) {
  if (dbDoc && asBlocks(dbDoc).length > 0) {
    const blocks = asBlocks(dbDoc);
    const hero = blockData(blocks, "hero") as { title?: string; description?: string } | undefined;
    const meta = dbDoc as { seo_title?: string; seo_description?: string; name?: string };
    const tool = tools.find((item) => item.slug === slug);
    return buildToolJsonLd({
      slug,
      title: meta.seo_title || `${meta.name || tool?.name || hero?.title || slug} | LazyKiwi`,
      description: meta.seo_description || hero?.description || tool?.blurb,
    });
  }

  const rich = (dbDoc || getToolPage(slug)) as {
    seo_title?: string;
    seo_description?: string;
    hero?: { title?: string; description?: string };
  } | null;
  const tool = tools.find((item) => item.slug === slug);

  if (!rich && !tool) return null;

  return buildToolJsonLd({
    slug,
    title: rich?.seo_title || `${tool?.name || rich?.hero?.title || slug} | LazyKiwi`,
    description: rich?.seo_description || rich?.hero?.description || tool?.blurb,
  });
}

export function resolveBlogPageJsonLd(slug: string, dbDoc?: CmsDoc) {
  if (dbDoc && asBlocks(dbDoc).length > 0) {
    const blocks = asBlocks(dbDoc);
    const header = blockData(blocks, "header") as {
      title?: string;
      excerpt?: string;
      date?: string;
      author?: { name?: string };
      breadcrumb?: string[];
      cover?: string;
    } | undefined;
    const faqRaw = blockData(blocks, "faq");
    const seo = (dbDoc.seo || {}) as { title?: string; description?: string };
    return buildBlogJsonLd({
      slug,
      seo,
      header: {
        title: header?.title,
        excerpt: header?.excerpt,
        date: header?.date,
        author: header?.author,
        breadcrumb: header?.breadcrumb,
        cover: header?.cover,
      },
      faq: Array.isArray(faqRaw) ? (faqRaw as Array<{ question: string; answer: string }>) : undefined,
    });
  }

  const data = (dbDoc || getBlogData(slug)) as {
    slug?: string;
    seo?: { title?: string; description?: string };
    header?: {
      title?: string;
      excerpt?: string;
      date?: string;
      author?: { name?: string };
      breadcrumb?: string[];
      cover?: string;
    };
    faq?: Array<{ question: string; answer: string }>;
  } | null;

  if (!data) return null;

  return buildBlogJsonLd({
    slug: data.slug || slug,
    seo: data.seo,
    header: data.header,
    faq: data.faq,
  });
}

export function resolveTemplatePageJsonLd(
  slug: string,
  dbBlocks?: Block[] | null,
  dbName?: string,
) {
  if (Array.isArray(dbBlocks) && dbBlocks.length > 0) {
    const hero = blockData(dbBlocks, "hero") as { title?: string; description?: string } | undefined;
    return buildTemplateJsonLd({
      slug,
      name: hero?.title || dbName || slug,
      description: hero?.description,
    });
  }

  const rich = getTemplatePage(slug) as {
    hero?: { title?: string; description?: string };
    template_name?: string;
  } | null;
  if (rich) {
    return buildTemplateJsonLd({
      slug,
      name: rich.hero?.title || rich.template_name || slug,
      description: rich.hero?.description,
    });
  }

  const template = getTemplateData(slug);
  if (template && !template.legacyEffectSlug) {
    return buildTemplateJsonLd({
      slug: template.slug,
      name: template.name,
      description: template.blurb,
    });
  }

  return null;
}
