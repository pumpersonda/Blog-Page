export function getDateFormat(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US");
}
