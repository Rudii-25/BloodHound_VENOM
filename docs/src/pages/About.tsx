import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  FileText, Scale, AlertTriangle, Heart, Mail, Github, 
  Twitter, MessageCircle, ExternalLink
} from "lucide-react";

const faqs = [
  {
    q: "Can I sell devices I build?",
    a: "Yes! The MIT license allows commercial use. You can sell assembled devices, kits, or modified versions. Attribution is appreciated but not legally required."
  },
  {
    q: "Can I modify the design?",
    a: "Absolutely. The hardware and software are fully open source. You can modify, improve, and redistribute your modifications under the same license."
  },
  {
    q: "Is there a warranty?",
    a: "No warranty is provided. This is a DIY project and you build it at your own risk. However, the community is always happy to help troubleshoot issues."
  },
  {
    q: "Can I use this for security testing?",
    a: "The device can be used for WiFi network analysis and security testing on networks you own or have explicit permission to test. Always follow local laws."
  },
  {
    q: "How do I get support?",
    a: "Join our Discord community or open a GitHub issue. The community is active and helpful for troubleshooting and answering questions."
  },
  {
    q: "Can I contribute without coding?",
    a: "Yes! You can contribute by improving documentation, testing builds, sharing your projects, helping others in the community, or providing translations."
  },
];

export default function AboutPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              About
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              📄 About <span className="text-secondary text-glow-cyan">BloodHound VENOM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An open-source project built for makers, by makers.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Project Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-elevated p-8"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Project Background
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  BloodHound VENOM was created to provide makers, students, and developers with an 
                  affordable, fully customizable handheld device for learning about embedded systems, 
                  IoT development, and wireless networking.
                </p>
                <p>
                  The project emphasizes accessibility - using inexpensive, widely available components 
                  that can be sourced globally. Whether you're a beginner learning to solder or an 
                  experienced developer prototyping new ideas, VENOM provides a solid foundation.
                </p>
                <p>
                  Our goal is to empower creators to build, modify, and share their own versions 
                  of this device, fostering a community of innovation and learning.
                </p>
              </div>
            </motion.div>

            {/* License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-secondary" />
                MIT License
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This project is released under the MIT License, one of the most permissive 
                  open-source licenses available.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">You CAN:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Use for personal projects</li>
                      <li>✓ Use commercially</li>
                      <li>✓ Modify the design</li>
                      <li>✓ Distribute copies</li>
                      <li>✓ Sell built devices</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">You MUST:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Include license text</li>
                      <li>• Include copyright notice</li>
                    </ul>
                    <h4 className="font-semibold text-primary mt-4 mb-2">No warranty:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Provided "as is"</li>
                      <li>• Use at your own risk</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild className="mt-4">
                  <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                    Read Full License <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Safety Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8 border-primary/30"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Safety Disclaimers
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-sm">
                  <strong className="text-foreground">Soldering Safety:</strong> Always work in well-ventilated areas. 
                  Use proper eye protection and be aware of hot surfaces.
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">Electrical Safety:</strong> Disconnect power before making modifications. 
                  Use appropriate test equipment and follow standard electronics safety practices.
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">Battery Safety:</strong> LiPo batteries can be dangerous if mishandled. 
                  Follow all safety guidelines when working with batteries.
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">Legal Compliance:</strong> Only use this device on networks you own 
                  or have explicit permission to test. Follow all local laws and regulations.
                </p>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-left font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glow p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have questions, suggestions, or just want to say hello? 
                We'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="neon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="neonCyan" asChild>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Discord
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@bloodhound.dev">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
