'use client'

import { useState } from 'react'
import { sendLoginCode } from './actions'
import { FaLock, FaMobileAlt, FaKey } from 'react-icons/fa'

export default function AdminLogin() {
  // State to track the flow: 'PHONE' -> 'CODE' -> 'DASHBOARD'
  const [step, setStep] = useState<'PHONE' | 'CODE' | 'DASHBOARD'>('PHONE')
  
  // Input value
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  // Store the generated code (received from server) to verify against
  const [serverCode, setServerCode] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (step === 'PHONE') {
      const formData = new FormData()
      formData.append('input', inputValue)

      const result = await sendLoginCode(formData)

      if (result.success) {
        setServerCode(result.code!) // Store the code (for MVP verification)
        setStep('CODE')
        setInputValue('') // Clear input for the code
      } else {
        setError(result.message)
      }
    } 
    else if (step === 'CODE') {
      // Simple string comparison
      if (inputValue.toUpperCase() === serverCode) {
        setStep('DASHBOARD')
      } else {
        setError('Invalid code. Please check your "SMS" (Terminal).')
      }
    }
    
    setLoading(false)
  }

  // --- VIEW: DASHBOARD ---
  if (step === 'DASHBOARD') {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl p-8 bg-zinc-900/50">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back, Idong. System is ready.</p>
          {/* Add your dashboard widgets here later */}
        </div>
      </div>
    )
  }

  // --- VIEW: LOGIN SCREEN ---
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900/50 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-black rounded-full border border-sky-blue/30 flex items-center justify-center text-sky-blue text-2xl">
            {step === 'PHONE' ? <FaLock /> : <FaKey />}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          {step === 'PHONE' ? 'Admin Access' : 'Verify Identity'}
        </h2>
        
        <p className="text-gray-400 text-center mb-8 text-sm">
          {step === 'PHONE' 
            ? 'Enter your registered mobile number to continue.' 
            : `Enter the 6-character code sent to your device.`
          }
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {step === 'PHONE' ? <FaMobileAlt /> : <FaKey />}
            </div>
            
            <input
              type={step === 'PHONE' ? 'tel' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={step === 'PHONE' ? "(555) 000-0000" : "X X X X X X"}
              className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all text-lg tracking-wide"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center font-bold animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !inputValue}
            className="w-full bg-sky-blue text-black font-bold py-4 rounded-xl hover:bg-sky-400 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? 'Processing...' : (step === 'PHONE' ? 'Send Code' : 'Verify Access')}
          </button>
        </form>

        {step === 'CODE' && (
          <button 
            onClick={() => { setStep('PHONE'); setInputValue(''); setError(''); }}
            className="w-full mt-6 text-gray-500 text-xs hover:text-white transition-colors"
          >
            Wrong number? Go back
          </button>
        )}

      </div>
    </div>
  )
}