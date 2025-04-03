'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-8 text-center"
      >
        <motion.h1 
          className="text-4xl font-bold text-green-600"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Payment Successful! 🎉
        </motion.h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase. Your payment has been successfully processed.</p>
        <button 
          onClick={() => router.push('/')} 
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >
          Go to Homepage
        </button>
      </motion.div>
    </div>
  );
}
