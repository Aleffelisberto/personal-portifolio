import '../styles/global.css';

export const metadata = {
  title: {
    default: 'Alefsandler Felisberto',
    template: '%s | Alefsandler Felisberto',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Software Engineer. Passionate about creating and writing clean and mantanable softwares',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
