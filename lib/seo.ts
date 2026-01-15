import type { Metadata } from "next";

const BASE_KEYWORDS: string[] = [
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
    title,
    description,
    keywords: BASE_KEYWORDS,
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
          alt: "Automated Income Dashboard",
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
