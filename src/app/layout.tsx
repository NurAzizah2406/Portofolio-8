import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edwin Anderson | Frontend Developer Portfolio",
  description:
    "Building fast & interactive web experiences. Bridging creativity and functionality to deliver stunning, user-friendly web applications.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Edwin Anderson" }],
  openGraph: {
    title: "Edwin Anderson | Frontend Developer Portfolio",
    description:
      "Building fast & interactive web experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
