import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Bug, Lightbulb, FileText, Code, Palette, GitPullRequest,
  Github, MessageCircle, Star, Users, ArrowRight
} from "lucide-react";

const contributionTypes = [
  {
    icon: Bug,
    title: "Bug Reports",
    desc: "Found an issue? Help us fix it by reporting bugs with detailed information.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    desc: "Have an idea for improvement? Share your suggestions with the community.",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Help improve documentation, fix typos, or add new tutorials.",
    color: "primary",
  },
  {
    icon: Code,
    title: "Code Contributions",
    desc: "Submit firmware improvements, new features, or code optimizations.",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Design Variations",
    desc: "Create new case designs, PCB layouts, or visual modifications.",
    color: "primary",
  },
  {
    icon: GitPullRequest,
    title: "Review PRs",
    desc: "Help review and test pull requests from other contributors.",
    color: "secondary",
  },
];

const prSteps = [
  { step: 1, title: "Fork Repository", desc: "Create your own copy of the project on GitHub" },
  { step: 2, title: "Create Branch", desc: "Make a new branch for your feature or fix" },
  { step: 3, title: "Make Changes", desc: "Implement your improvements with clear commits" },
  { step: 4, title: "Test Thoroughly", desc: "Verify your changes work as expected" },
  { step: 5, title: "Submit PR", desc: "Open a pull request with a clear description" },
  { step: 6, title: "Address Feedback", desc: "Respond to review comments and update as needed" },
];

export default function ContributePage() {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-gradient-hero min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Community
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              🤝 Join the <span className="text-primary text-glow-red">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              BloodHound VENOM is built by the community, for the community. 
              Your contributions make it better for everyone.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-foreground">1.2k</span> Stars
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GitPullRequest className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-foreground">156</span> PRs Merged
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">89</span> Contributors
              </div>
            </div>
          </motion.div>

          {/* Contribution Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-center mb-8">Ways to Contribute</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributionTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="card-glow p-6 hover-lift"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      type.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PR Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-center mb-8">Pull Request Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {prSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card-elevated p-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold mb-3">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Code of Conduct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="card-elevated p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Code of Conduct</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We are committed to providing a welcoming and inclusive environment for all contributors.</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Be respectful and inclusive of all community members
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Welcome newcomers and help them get started
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Provide constructive feedback and accept it gracefully
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Focus on what's best for the community and project
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Show empathy towards other community members
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="card-glow p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Contribute?</h3>
              <p className="text-muted-foreground mb-8">
                Join our community and help make BloodHound VENOM even better.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://github.com/Rudii-25/BloodHound_VENOM" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
