import type { ClassValue } from "clsx";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const COMMON_UNITS = ["small", "medium", "large"];

/**
 * Extend tailwind-merge to include NextUI's custom classes.
 */
const twMerge = extendTailwindMerge({
  classGroups: {
    opacity: ["opacity-disabled"], // Sử dụng danh sách lớp CSS đơn giản
    spacing: ["spacing-divider"], // Tương tự
    borderWidth: COMMON_UNITS,
    borderRadius: COMMON_UNITS,
    shadow: [{ shadow: COMMON_UNITS }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "bg-image": ["bg-stripe-gradient"],
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
