export function extractYear(title: string): number | null {
  const match = title.match(/\((\d{4})\)/);
  return match ? parseInt(match[1], 10) : null;
}

export function extractName(title: string): string {
  return title.replace(/\s*\(\d{4}\)\s*$/, "").trim();
}
