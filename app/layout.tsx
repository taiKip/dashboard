import '@/app/ui/global.css'
import {nunito_sans} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en" className={`${nunito_sans.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
