
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'; // 1. Importe o componente

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  title: 'Tersio IDBAS Advogados Associados',
  description: 'Excelência e Confiança em Direito Empresarial e Civil.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body>
        {children}
        <WhatsAppButton /> {/* 2. Adicione o componente aqui, fora do 'children' */}
      </body>
    </html>
  );
}