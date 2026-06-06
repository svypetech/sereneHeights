import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/progress");

export default function ProgressLayout({ children }) {
  return children;
}
