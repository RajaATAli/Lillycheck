import { Inter } from "next/font/google";
import "@/styles/globals.css"; // Adjust this path if necessary.

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // This creates a CSS custom property for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={fontSans.className + " min-h-screen bg-background antialiased"}>
        {children}
      </body>
    </html>
  );
}
