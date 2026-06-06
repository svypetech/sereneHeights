import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/thank-you");

export default function ThankYouLayout({ children }) {
  return children;
}
