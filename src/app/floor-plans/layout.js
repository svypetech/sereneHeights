import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/floor-plans");

export default function FloorPlansLayout({ children }) {
  return children;
}
