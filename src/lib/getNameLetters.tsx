export const getNameLetters = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .slice(0, 2);
};
