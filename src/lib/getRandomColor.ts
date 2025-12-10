import { colors } from "@/constant/tailwindColors";

export const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] || "green";
};

export const getInterestColor = (): string => {
  const color = getRandomColor();
  return ` bg-${color}-50 text-${color}-700 hover:bg-${color}-100`;
};