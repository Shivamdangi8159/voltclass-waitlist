import './globals.css';

export const metadata = {
  title: 'VoltClass | Charge Your Rank',
  description: 'High-Performance NEET & JEE Practice Engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0B0F14] antialiased">
        {children}
      </body>
    </html>
  );
}
