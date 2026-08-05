import type { Metadata } from "next";
import { Sora, Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sporty — Join the Waitlist",
  description:
    "#1 Ticket Marketplace with Zero fees. Get a $20 gift toward your next ticket — first 1,000 on the waitlist.",
  metadataBase: new URL("https://sporty.us"),
  openGraph: {
    title: "Sporty — Join the Waitlist",
    description:
      "#1 Ticket Marketplace with Zero fees. First 1,000 on the waitlist get a $20 gift toward your next ticket.",
    url: "https://sporty.us",
    siteName: "Sporty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${sora.variable} h-full`}>
      <body className="min-h-full font-body antialiased">{children}</body>
    </html>
  );
}
