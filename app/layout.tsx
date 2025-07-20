import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HerSpace",
  description:
    "a safe space for women to share, ask questions, and grow—together—through tech, career, finance, mental health, and life.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${poppins.variable} ${grotesk.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
