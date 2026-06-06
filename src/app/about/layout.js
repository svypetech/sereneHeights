import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/about");

export default function AboutLayout({ children }) {
  return children;
}
