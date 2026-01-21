import { motion } from "framer-motion";
import devicePhoto from "@/assets/hero-device.png";

export function DeviceModel() {
  return (
    <motion.div 
      className="w-full h-[400px] lg:h-[500px] flex items-center justify-center relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl" />
      
      <motion.div
        className="relative z-10"
        animate={{ 
          y: [0, -15, 0],
          rotateY: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ perspective: 1000 }}
      >
        <img 
          src={devicePhoto} 
          alt="BloodHound VENOM Device - ESP8266 powered handheld IoT device with OLED display" 
          className="max-h-[290px] w-auto object-contain rounded-xl shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255, 23, 68, 0.4)) drop-shadow(0 0 60px rgba(0, 212, 255, 0.2))"
          }}
        />
        {/* Animated glow ring */}
        <motion.div 
          className="absolute -inset-4 rounded-2xl -z-10"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 23, 68, 0.3), 0 0 40px rgba(0, 212, 255, 0.2)",
              "0 0 40px rgba(255, 23, 68, 0.5), 0 0 80px rgba(0, 212, 255, 0.3)",
              "0 0 20px rgba(255, 23, 68, 0.3), 0 0 40px rgba(0, 212, 255, 0.2)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
