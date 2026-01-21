import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubStats } from "./GitHubStats";

const GITHUB_REPO_URL = "https://github.com/Rudii-25/BloodHound_VENOM";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to build your own{" "}
            <span className="text-primary text-glow-red">VENOM</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of makers who have built their own BloodHound VENOM. 
            Full documentation, community support, and open-source code await.
          </p>

          {/* GitHub stats */}
          <div className="flex justify-center mb-10">
            <GitHubStats />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/assembly">
                Start Building
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
