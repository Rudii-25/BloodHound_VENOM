import { motion } from "framer-motion";
import { Wifi, Monitor, Lightbulb, Gamepad2, Code2, Zap } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "WiFi Connectivity",
    description: "Built-in ESP8266 with 802.11 b/g/n WiFi for IoT projects and network tools.",
    color: "secondary",
  },
  {
    icon: Monitor,
    title: "OLED Display",
    description: "128×64 pixel SH1106 display for crisp graphics and text output.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "RGB LED",
    description: "Addressable WS2812B LED for status indicators and visual feedback.",
    color: "secondary",
  },
  {
    icon: Gamepad2,
    title: "6-Button Input",
    description: "Directional pad and action buttons for navigation and control.",
    color: "primary",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "Full hardware schematics, firmware, and documentation freely available.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Battery Option",
    description: "Optional LiPo battery mod for 4-6 hours of portable operation.",
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Packed with <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build IoT projects, security tools, or just learn about embedded systems.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group card-glow p-6 hover-lift"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-red"
                    : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:glow-cyan"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
