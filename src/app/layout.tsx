import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UserHydrator } from "@/components/user-hydrator";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Reuni Akbar",
  description: "Website Reuni Akbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <UserHydrator />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
