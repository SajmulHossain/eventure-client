import { colors } from "@/constant/tailwindColors";

export const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * 22);
  return colors[randomIndex];
};