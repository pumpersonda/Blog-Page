export function setItem(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string): any {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
}
