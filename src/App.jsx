import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const user = {
    name: "Chollathan Sonjoy - Not",
    age: 25,
    job: "นักพัฒนาเว็บไซต์",
    hobby: "อ่านหนังสือและเขียนโค้ด",
  };
  return (
    <>
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">แนะนำตัว</h1>
      <img src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-1/363321482_6728443830548644_2427185434758311329_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=invTNu1QQewQ7kNvgEBj5U5&_nc_oc=AdgfY2w9uNg6irizKtKvofquehrHNhx5jAMHFFcuAptVxPcv0CjU_gBvV7TxdUUELB0&_nc_zt=24&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=kUA1VahR2e65K9rVquzEaA&oh=00_AYGoo3eOKRAcZXV2YWtIKMK6P617rQV1_rT_snbAuFwDQw&oe=67DB7973" alt="" />
      <p className="text-gray-700">ชื่อ: {user.name}</p>
      <p className="text-gray-700">อายุ: {user.age} ปี</p>
      <p className="text-gray-700">อาชีพ: {user.job}</p>
      <p className="text-gray-700">งานอดิเรก: {user.hobby}</p>
    </div>
    </>
  )
}

export default App
