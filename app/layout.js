
import "./globals.css";
import './fonts.css';
import { Poppins } from 'next/font/google';



export const metadata = {
  title: "Plagette",
  description: "Plagette Assessment",
};
const poppins = Poppins({
  weight: ['300','400', '600', '700'], 
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      style={{ fontFamily: 'Bahij Janna, sans-serif' }}
  className={`${poppins.className} `}>
      
        {children}
      </body>
    </html>
  );
}
