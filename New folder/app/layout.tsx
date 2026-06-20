import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "שגיא דהן | ליווי אונליין לעלייה במסה, כוח ופאוורליפטינג",
  description:
    "ליווי אונליין לגברים רזים ומתאמני חדר כושר שרוצים לעלות במשקל, לבנות שריר, להתחזק ולשפר טכניקה עם מסגרת ברורה.",
  applicationName: "Sagi Dahan Online Coaching",
  authors: [{ name: "שגיא דהן" }],
  creator: "שגיא דהן",
  keywords: [
    "שגיא דהן",
    "ליווי אונליין",
    "עלייה במסה",
    "פאוורליפטינג",
    "מאמן אונליין",
    "בניית שריר",
    "אימון כוח",
    "לעלות במשקל",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "שגיא דהן | ליווי אונליין לעלייה במסה וכוח",
    description:
      "ליווי אונליין לגברים שרוצים לעלות במשקל, לבנות שריר, להתחזק ולשפר טכניקה בצורה מסודרת.",
    locale: "he_IL",
    type: "website",
    siteName: "שגיא דהן Online Strength Coaching",
  },
  twitter: {
    card: "summary_large_image",
    title: "שגיא דהן | ליווי אונליין לעלייה במסה וכוח",
    description:
      "אימון, תזונה, מעקב ופידבק טכני לגברים שרוצים לעלות במשקל ולהתחזק.",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
