import '../styles/global.css';
import { JetBrains_Mono } from '@next/font/google';
import { Menu } from '@/components/Menu';
import Image from 'next/image';
import matrixBg from '../assets/matrix-bg.gif';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

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
    <html lang="en" className={jetBrainsMono.className}>
      <body className="h-screen bg-[#0e0e0f] overflow-hidden">
        <div className="flex flex-row">
          <div className="max-w-min h-screen p-5 bg-[#030303]">
            <div className="grid place-items-center h-screen">
              <Menu />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full relative">
            <Image className="opacity-10 w-full absolute" src={matrixBg} fill alt="falling green characters as background" />
            <div className="text-center">
              <h1 className="lg:text-7xl md:text-6xl text-4xl text-[#66dd5e]">IN PROGRESS... :)</h1>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
