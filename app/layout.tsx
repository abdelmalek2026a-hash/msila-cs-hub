import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M'Sila CS Hub",
  description:
    "منصة أكاديمية مستقلة تساعد طلبة وباحثي الإعلام الآلي في المسيلة على الوصول إلى الموارد والجدول والامتحانات والمشاريع.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}