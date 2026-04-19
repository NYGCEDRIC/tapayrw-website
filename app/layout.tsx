import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Tapay — Seamless. Smart. Secure.",
  description: "Tapay provides a modern payment experience with NFC-enabled payments, automated billing, and real-time tracking to manage finances efficiently and securely.",
  keywords: ["Tapay", "NFC payments", "mobile payments", "Rwanda fintech", "digital payments"],
  openGraph: {
    title: "Tapay — Seamless. Smart. Secure.",
    description: "Modern NFC-enabled payments, automated billing, and real-time financial tracking.",
    url: "https://tapayrw.com",
    siteName: "Tapay",
    images: [{ url: "/Tapay1.png", width: 1200, height: 630, alt: "Tapay" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapay — Seamless. Smart. Secure.",
    description: "Modern NFC-enabled payments, automated billing, and real-time financial tracking.",
    images: ["/Tapay1.png"],
  },
  icons: {
    icon: '/tapayicon.png',
    shortcut: '/tapayicon.png',
    apple: '/tapayicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
