import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/amenities");

export default function AmenitiesLayout({ children }) {
  return children;
}
