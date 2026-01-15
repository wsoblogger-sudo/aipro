import type { Metadata } from "next";

const KEYWORDS = [
  "crypto money making",
  "automated income",
  "AI trading software",
  "make money online",
];

export function createSeoMetadata(params: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = params;

  return {
    metadataBase: new URL("https://aiprofitgen.com"),
    title,
    description,
    keywords: KEYWORDS,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: "AIPROFITGEN",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.svg"],
    },
  };
}
