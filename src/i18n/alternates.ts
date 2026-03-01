import { getCollection } from "astro:content";
import { localePath, swapLocaleInPath, type Locale } from "./site";

function fallbackUrls(pathname: string) {
  return {
    es: swapLocaleInPath(pathname, "es"),
    en: swapLocaleInPath(pathname, "en"),
  };
}

export async function resolveLanguageSwitchUrls(url: URL): Promise<{ es: string; en: string }> {
  const normalizedPath = url.pathname.replace(/\/+$/, "") || "/";
  const fallback = fallbackUrls(normalizedPath);

  const blogMatch = normalizedPath.match(/^\/(es|en)\/blog\/([^/]+)$/);
  if (!blogMatch) return fallback;

  const currentLang = blogMatch[1] as Locale;
  const currentSlug = blogMatch[2];
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const currentPost = posts.find(
    (post) => post.data.lang === currentLang && post.slug === currentSlug,
  );

  if (!currentPost) return fallback;

  const esPost = posts.find(
    (post) =>
      post.data.lang === "es" &&
      post.data.translationKey === currentPost.data.translationKey,
  );
  const enPost = posts.find(
    (post) =>
      post.data.lang === "en" &&
      post.data.translationKey === currentPost.data.translationKey,
  );

  return {
    es: esPost ? localePath("es", `/blog/${esPost.slug}`) : fallback.es,
    en: enPost ? localePath("en", `/blog/${enPost.slug}`) : fallback.en,
  };
}
