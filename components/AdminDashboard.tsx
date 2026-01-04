'use client'

import { useState } from 'react'
import { FaChevronDown, FaPen, FaSignOutAlt, FaCogs } from 'react-icons/fa'

interface AdminDashboardProps {
  logoutAction: () => Promise<void>
}

export default function AdminDashboard({ logoutAction }: AdminDashboardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl bg-zinc-900/50 overflow-hidden">
        
        {/* --- HEADER --- */}
        <div className="p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">System Status: <span className="text-green-400 font-mono">ONLINE</span></p>
          </div>

          <div className="flex items-center gap-4">
            
            {/* ACTIONS DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-sky-blue text-black px-5 py-2.5 rounded-lg font-bold hover:bg-sky-400 transition-colors text-sm"
              >
                <FaCogs /> Actions <FaChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <button 
                    className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors text-sm text-gray-200 flex items-center gap-3"
                    onClick={() => {
                      setIsDropdownOpen(false)
                      // Logic to trigger "Update Name" will go here later
                    }}
                  >
                    <FaPen className="text-sky-blue" /> Update Name
                  </button>
                </div>
              )}
            </div>

            {/* LOGOUT BUTTON */}
            <form action={logoutAction}>
              <button 
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors text-sm font-bold"
              >
                <FaSignOutAlt /> Logout
              </button>
            </form>

          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="p-8 min-h-[400px]">
          <div className="p-8 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-500 gap-4 h-full bg-black/20">
            <div className="text-4xl opacity-50">📊</div>
            <p>Select an action from the menu to begin.</p>
          </div>
        </div>

      </div>
    </div>
  )
}