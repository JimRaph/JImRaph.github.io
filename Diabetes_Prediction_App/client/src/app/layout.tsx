import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diabetes Prediction AI",
  description: "AI-powered medical prediction tool",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  keywords: ['Diabetes prediction', 'AI health app', 'Medical AI', 'Healthcare','ML deployment'],
  authors: [{ name: 'Jimmy', url: 'https://web-development-portfolio-seven.vercel.app/' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Diabe/AI - Predict Diabetes Risk Easily',
    description: 'Use Diabe/AI to quickly assess diabetes risk based on key health metrics.',
    url: 'https://frontend-long-dew-2391.fly.dev/',
    siteName: 'Diabe/AI',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diabe/AI - Predict Diabetes Risk Easily',
    description: 'AI-powered diabetes risk prediction.',
    images: ['/og.png'],
  }, 

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
