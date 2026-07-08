import { redirect } from "next/navigation";
import { appUrl } from "@/lib/routes";

type AliasPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function toQueryString(params: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((item) => query.append(key, item));
    else if (value) query.set(key, value);
  });
  const value = query.toString();
  return value ? `?${value}` : "";
}

export default async function VideoGeneratorAliasPage({ searchParams }: AliasPageProps) {
  const qs = toQueryString((await searchParams) || {});
  redirect(`${appUrl("/app/video-generator")}${qs}`);
}
