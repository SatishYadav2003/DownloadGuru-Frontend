import BlurryBallsBackground from "./BlurryBallsBackground"
import { motion } from "framer-motion"
import { Shield, Download, Zap, Music, Monitor, Infinity, UserCheck, Clock } from "lucide-react"



const WebsiteFeature = () => {
  const features = [
    {
      icon: <Monitor className="text-blue-600" size={24} />,
      title: "All in One Downloader",
      description: "We provide to download videos in multiple formats and supported more than 10+ platforms.",
    },
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: "Secure & Fast",
      description: "Download videos and other assets from safe CDNs Scanned by Norton™ Safe Web.",
    },
    {
      icon: <Download className="text-blue-600" size={24} />,
      title: "100% Free of Costs",
      description: "Download all type of files such as videos, photos and audios in high quality for FREE.",
    },
    {
      icon: <Music className="text-blue-600" size={24} />,
      title: "Extract Audio",
      description: "DownloadGuru allows you to extract audio and music from videos in the best quality.",
    },
    {
      icon: <Zap className="text-blue-600" size={24} />,
      title: "High Download Speed",
      description: "Download videos at the highest speed possible without any network limitation.",
    },
    {
      icon: <Monitor className="text-blue-600" size={24} />,
      title: "Compatibility",
      description: "Works with all type of OS like Window, Android, iOS and all major web browsers.",
    },
    {
      icon: <Infinity className="text-blue-600" size={24} />,
      title: "Unlimited Download",
      description: "Unlimited download and save your desired contents as much as you want.",
    },
    {
      icon: <UserCheck className="text-blue-600" size={24} />,
      title: "No Registration Required",
      description: "No need to login or installation software required to download videos from websites.",
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: "24/7 Customer Support",
      description: "We work hard to fix problems and are available 24/7 to provide the best support to users.",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="bg-blue-50 py-16 px-4 relative overflow-hidden">
      {/* Add the blurry balls background */}
      <BlurryBallsBackground />

      <motion.div
        className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col hover:shadow-xl border border-blue-200 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {feature.icon}
              <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default WebsiteFeature
