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
    <html lang="en" className="dark">
      <body className="bg-[#07090C] text-[#F5F7FA] antialiased selection:bg-[#00E5FF] selection:text-black">
        {children}
      </body>
    </html>
  );
}
