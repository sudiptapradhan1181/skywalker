import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  openGraph: {
    title: 'Sudipta Pradhan',
    description:
      'Sudipta Pradhan is a software engineer specializing in frontend development with 4 years of experience building user-centric digital experiences.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 627,
        alt: 'Sudipta Pradhan',
      },
    ],
  },
  title: 'Sudipta Pradhan',
  description:
    'Sudipta Pradhan is a software engineer specializing in frontend development with 4 years of experience building user-centric digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${firaCode.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
