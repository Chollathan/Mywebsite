import React from 'react'

function Home() {
  return (
    <>
    <section className="bg-gray-900 text-white h-[80vh] flex items-center justify-center text-center px-6"> 
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to <span className="text-blue-400">Mywebsite</span>
      </h1>
      <p className="text-lg md:text-xl mb-6">
        บริการทำเว็บไซต์เพื่อเป็นโปรไฟล์สำหรับธุระกิจของคุณ
      </p>
      <div>
        <a href="/service" className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold mr-4">
          ดูบริการของเรา
        </a>
        <a href="/contact" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          ติดต่อเรา
        </a>
        <h2>
        </h2>
      </div>
    </div>
  </section>

    
    
    
    
    </>
    

  )
}

export default Home