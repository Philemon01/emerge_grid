"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-5 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="auth-card bg-white border-zinc-200"
      >
        <div className="mb-8">
          <Link href="/" className="inline-block mb-6 px-3 py-1 rounded-full border border-zinc-200 text-xs font-bold tracking-tight hover:border-zinc-800 transition-colors">
            EMERGE.GRID
          </Link>
          <h1 className="text-2xl font-bold text-zinc-900">Create Account</h1>
          <p className="text-zinc-500 text-sm mt-2">Join the network to start tracking real-time capacity.</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 auth-input-focus" placeholder="Jane" required />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 auth-input-focus" placeholder="Doe" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Work Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 auth-input-focus"
              placeholder="jane@hospital.org"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 auth-input-focus"
              placeholder="Minimum 8 characters"
              required
            />
          </div>
          <button type="submit" className="auth-button w-full">
            Get Started
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
          <p className="text-sm text-zinc-500">
            Already have an account? <Link href="/auth/signin" className="text-[#0A74DA] font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
