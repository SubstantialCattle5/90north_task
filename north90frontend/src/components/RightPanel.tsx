export default function RightPanel() {
  return (
    <div className="bg-white p-4 w-full min-h-full shadow-lg hidden lg:block">
      <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b-2 border-indigo-200 pb-2">Right Panel</h2>
      <div className="space-y-4">
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-600 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Documentation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">API Reference</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Support</a></li>
          </ul>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-600 mb-2">Latest Updates</h3>
          <p className="text-sm text-gray-600">Check out our new features and improvements in the latest release!</p>
        </div>
      </div>
    </div>
  )
}

