export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === "production" || typeof window !== "undefined" && window.location.hostname.includes("github.io");
  const repoName = "chicken22";
  if (!isProd) return path;
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${repoName}${cleanPath}`;
};