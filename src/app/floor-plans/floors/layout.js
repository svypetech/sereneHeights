import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/floor-plans/floors");

export default function FloorPlansFloorsLayout({ children }) {
  return children;
}
