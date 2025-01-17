import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">My Website</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
        </div>
        <button className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors duration-300">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}

