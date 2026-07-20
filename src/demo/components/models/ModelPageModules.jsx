import ModelRelated from "../models/ModelRelated";
import ModelRelatedPosts from "../models/ModelRelatedPosts";
import LandingFAQ from "../landing/LandingFAQ";

export function ExploreMoreModels({ data }) {
  return <ModelRelated data={data} />;
}

export function FromTheBlog({ data }) {
  return <ModelRelatedPosts data={data} />;
}

export function ModelFaqSection({ data }) {
  if (!data?.length) return null;
  return <LandingFAQ data={data} />;
}
