import React, { useState, useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import { ThemeContext } from '../context/ThemeContextCore'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [showProfile, setShowProfile] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[90px] border-b-[1px] border-gray-800 bg-[#0A0A0A]">
        <div className="logo">
         <h3 className='text-[25px] font-[700] sp-text'>GenUI</h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <button 
            onClick={toggleDarkMode}
            className="icon p-2 rounded-lg hover:bg-[#222] transition-all cursor-pointer text-[20px]"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <HiMoon /> : <HiSun />}
          </button>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="icon p-2 rounded-lg hover:bg-[#222] transition-all cursor-pointer text-[20px]"
            title="Profile"
          >
            <FaUser />
          </button>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="icon p-2 rounded-lg hover:bg-[#222] transition-all cursor-pointer text-[20px]"
            title="Settings"
          >
            <RiSettings3Fill />
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowProfile(false)}>
          <div className="bg-[#141319] p-6 rounded-xl w-[90%] max-w-[400px] shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-bold">Profile</h2>
              <button onClick={() => setShowProfile(false)} className="text-[24px] hover:bg-[#222] p-2 rounded-lg transition-all">
                <IoCloseSharp />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-[28px]">
                  <FaUser />
                </div>
                <div>
                  <p className="font-bold text-[16px]">GenUI User</p>
                  <p className="text-gray-400 text-sm">Developer Account</p>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all font-semibold text-white">
                Edit Profile
              </button>
              <button className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all font-semibold text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowSettings(false)}>
          <div className="bg-[#141319] p-6 rounded-xl w-[90%] max-w-[400px] shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-bold">Settings</h2>
              <button onClick={() => setShowSettings(false)} className="text-[24px] hover:bg-[#222] p-2 rounded-lg transition-all">
                <IoCloseSharp />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-[#222] rounded-lg transition-all">
                <span className="font-semibold">Dark Mode</span>
                <button 
                  onClick={toggleDarkMode}
                  className={`w-12 h-6 rounded-full transition-all flex items-center ${darkMode ? 'bg-purple-600' : 'bg-gray-600'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all ${darkMode ? 'ml-6' : 'ml-0'}`}></div>
                </button>
              </div>
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <p className="text-sm text-gray-400 px-3">Preferences</p>
                <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#222] transition-all">
                  ⚙️ Theme
                </button>
                <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#222] transition-all">
                  🔔 Notifications
                </button>
                <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#222] transition-all">
                  ❓ Help & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar