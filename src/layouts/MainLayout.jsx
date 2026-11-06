import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b2419] font-sans antialiased selection:bg-[#346b2b]/20 selection:text-[#1b2419]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

