export function getAssetPath(path: string): string {
  // If path starts with http or https, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // If running on GitHub Pages under /chicken22/, prepend base path
  if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
    const repoPrefix = "/chicken22";
    if (!cleanPath.startsWith(repoPrefix)) {
      return `${repoPrefix}${cleanPath}`;
    }
  }
  
  return cleanPath;
}