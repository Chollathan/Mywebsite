import React from 'react'

function Service() {
  return (
    <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        Our Web Development Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Service Package 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Landing Page</h3>
          <p className="text-gray-700 mb-4">
            A single-page website that focuses on promoting your business or product.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Responsive Design</li>
            <li>Call-to-Action Button</li>
            <li>Contact Form</li>
          </ul>
          <p className="font-bold text-gray-900">$300</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Service Package 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Website</h3>
          <p className="text-gray-700 mb-4">
            A portfolio website that showcases your work with multiple pages.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Up to 5 Pages</li>
            <li>Portfolio Gallery</li>
            <li>Contact Form</li>
            <li>Responsive Design</li>
          </ul>
          <p className="font-bold text-gray-900">$600</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Service Package 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Commerce Website</h3>
          <p className="text-gray-700 mb-4">
            Full-featured e-commerce site with product management and payment system.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Product Management</li>
            <li>Shopping Cart</li>
            <li>Payment Integration (e.g., PayPal)</li>
            <li>Responsive Design</li>
          </ul>
          <p className="font-bold text-gray-900">$1,200</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Service Package 4 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Website</h3>
          <p className="text-gray-700 mb-4">
            A custom website for small businesses with up to 10 pages.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Up to 10 Pages</li>
            <li>Custom Design</li>
            <li>SEO Optimization</li>
            <li>Contact Forms</li>
          </ul>
          <p className="font-bold text-gray-900">$800</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Service