import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Code, FileText, Image } from "lucide-react";

const quickLinks = [
  {
    title: "Build Guide",
    description: "Step-by-step assembly instructions with detailed photos",
    icon: Wrench,
    href: "/assembly",
    color: "primary",
  },
  {
    title: "Firmware",
    description: "Code examples, pinout diagrams, and Arduino setup",
    icon: Code,
    href: "/firmware",
    color: "secondary",
  },
  {
    title: "Specifications",
    description: "Technical details, dimensions, and electrical specs",
    icon: FileText,
    href: "/specifications",
    color: "primary",
  },
  {
    title: "Gallery",
    description: "Photos of builds, modifications, and community projects",
    icon: Image,
    href: "/gallery",
    color: "secondary",
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get <span className="text-primary">Started</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your path to building your own BloodHound VENOM device.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="group block card-glow p-8 hover-lift h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      link.color === "primary"
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                    }`}
                  >
                    <link.icon className="w-7 h-7" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
