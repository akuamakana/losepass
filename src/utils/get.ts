export const get = (obj: object, path: string[]) => {
  let current: any = obj;
  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]]) return null;
    current = current[path[i]];
  }

  return current;
};
