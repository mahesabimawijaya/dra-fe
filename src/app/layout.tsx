import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UserHydrator } from "@/components/user-hydrator";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactLenis } from "@/lib/lenis";

export const metadata: Metadata = {
  title: "Memory Lane",
  description: "Website Reuni Akbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body className={`antialiased`}>
          <UserHydrator />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main>{children}</main>
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </ReactLenis>
    </html>
  );
}
