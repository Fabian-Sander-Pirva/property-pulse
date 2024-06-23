import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property-Pulse | Find the perfect rental',
  description: 'Find your drema rental property.',
  keywords: 'rental, propertys, rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    
    <html lang="en">
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout