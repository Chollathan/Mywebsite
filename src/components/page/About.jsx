import React from 'react'

function About() {
  const user = {
    name: "Chollathan Sonjoy",
    age: 24,
    job: "Web Developer",
    hobby: "อ่านหนังสือและเขียนโค้ด",
    
  };
  return (
    <>
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
      <img
          className="block mx-auto rounded-full"
          src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-1/363321482_6728443830548644_2427185434758311329_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=invTNu1QQewQ7kNvgEBj5U5&_nc_oc=AdgfY2w9uNg6irizKtKvofquehrHNhx5jAMHFFcuAptVxPcv0CjU_gBvV7TxdUUELB0&_nc_zt=24&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=iAkUCv9RqNiw8niWd8DTZQ&oh=00_AYE07DwdLAg5pZN1f8V2TPWtzJnGCuZptq9GbWw8lpDGgA&oe=67DC2233"
          alt="Profile"
        />
      <p className="text-gray-700">ชื่อ: {user.name}</p>
      <p className="text-gray-700">อายุ: {user.age} ปี</p>
      <p className="text-gray-700">อาชีพ: {user.job}</p>
      <p className="text-gray-700">งานอดิเรก: {user.hobby}</p>
      <a className='text-gray-700 mr-10  hover:text-red-600' href="https://www.facebook.com/profile.php?id=100001492827161">Facebook</a>
      <a className='text-gray-700 hover:text-red-600' href="https://github.com/Chollathan/Chollathan/blob/main/Aboutme.md">Github</a>
    </div>
    </>
  )
}

export default About