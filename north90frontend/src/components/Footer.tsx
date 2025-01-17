export default function Footer() {
    return (
      <footer className="bg-indigo-600 text-white p-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-200 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-200 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-indigo-200 transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    )
  }
  
  