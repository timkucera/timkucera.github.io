import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../fonts/GeistSans-latin.woff2",
      style: "normal",
    },
    {
      path: "../fonts/GeistSans-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../fonts/GeistMono-latin.woff2",
      style: "normal",
    },
    {
      path: "../fonts/GeistMono-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: siteConfig.seo.url ? new URL(siteConfig.seo.url) : undefined,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.personal.name,
    type: "website",
    ...(siteConfig.seo.ogImage
      ? { images: [{ url: siteConfig.seo.ogImage }] }
      : {}),
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function themeScript(defaultMode: string) {
  return `(function(){try{var m='${defaultMode}';var d=document.documentElement;d.classList.remove('dark');if(m==='dark')d.classList.add('dark');else if(m==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches)d.classList.add('dark');}catch(e){}})();`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript(siteConfig.theme.defaultMode),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-x-hidden`}
      >
        <ThemeProvider config={siteConfig.theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
