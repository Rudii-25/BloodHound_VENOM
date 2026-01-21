import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { DollarSign, Clock, Battery, Cpu } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: 25,
    prefix: "$",
    suffix: "",
    label: "Total Cost",
    sublabel: "Components only",
  },
  {
    icon: Clock,
    value: 3,
    prefix: "",
    suffix: " hrs",
    label: "Build Time",
    sublabel: "First-time build",
  },
  {
    icon: Battery,
    value: 6,
    prefix: "",
    suffix: " hrs",
    label: "Battery Life",
    sublabel: "With LiPo mod",
  },
  {
    icon: Cpu,
    value: 160,
    prefix: "",
    suffix: " MHz",
    label: "CPU Speed",
    sublabel: "ESP8266 chip",
  },
];

function AnimatedCounter({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="text-secondary text-glow-cyan">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Affordable, accessible, and designed with the maker community in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="card-elevated p-8 text-center hover-lift">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <stat.icon className="w-7 h-7 text-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-foreground font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
