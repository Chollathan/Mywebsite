import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-8">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">บริการของเรา</h2>
          <p className="text-lg text-gray-600">เรามีความเชี่ยวชาญในการออกแบบและพัฒนาเว็บไซต์ด้วยเทคโนโลยีต่าง ๆ เช่น React.js, HTML/CSS, WordPress</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-500">React.js</h3>
            <p className="text-gray-600">เรามีความเชี่ยวชาญในการสร้างเว็บไซต์ที่ทันสมัยและเร็วที่สุดด้วย React.js</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-500">HTML/CSS</h3>
            <p className="text-gray-600">พัฒนาเว็บไซต์ที่มีความสวยงามและรองรับการใช้งานทุกอุปกรณ์ด้วย HTML และ CSS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-500">WordPress</h3>
            <p className="text-gray-600">สร้างเว็บไซต์ที่ใช้งานง่ายและสามารถจัดการเนื้อหาด้วย WordPress</p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>ติดต่อเรา: info@3maw.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
