export const metadata = {
    title: 'portfolio',
    description: 'self intro',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }