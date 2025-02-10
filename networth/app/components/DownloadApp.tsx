import { motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-between bg-gradient-to-br from-cyan-600 via-black to-cyan-900 text-white font-sans px-6 py-16">
      {/* Main Download Section */}
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="text-5xl font-bold tracking-wide mb-6 text-cyan-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get the App 🚀
        </motion.h2>

        <p className="text-lg text-gray-300 max-w-lg mb-8">
          Experience the best of <span className="text-cyan-400 font-semibold">Referrly</span> on your phone.  
          Download now and stay ahead!
        </p>

        {/* Google Play Store Button */}
        <motion.a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg shadow-md border border-cyan-400 transition-all hover:bg-cyan-500 hover:border-cyan-600"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play Store"
            className="w-40 h-auto"
          />
        </motion.a>
      </div>

      {/* Footer Section */}
      <div className="mt-16 border-t border-gray-600 pt-12 flex flex-col md:flex-row justify-between items-center px-10">
        {/* Branding & Info */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-cyan-300">Referrly</h3>
          <p className="text-gray-400 mt-2 max-w-sm">
            Revolutionizing referrals. Join the waitlist and be the first to experience Referrly.
          </p>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="text-center text-cyan-300 text-sm mt-12">
        &copy; 2025 Referrly. All rights reserved.
      </div>
    </div>
  );
};

export default DownloadApp;
