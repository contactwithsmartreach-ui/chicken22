export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const repoName = "chicken22";

  // Check if we are running in browser on GitHub Pages or production
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (window.location.hostname.includes("github.io") || pathname.startsWith(`/${repoName}`)) {
      if (!cleanPath.startsWith(`/${repoName}`)) {
        return `/${repoName}${cleanPath}`;
      }
    }
  } else if (process.env.NODE_ENV === "production") {
    return `/${repoName}${cleanPath}`;
  }
  
  return cleanPath;
}