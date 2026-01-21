import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Battery, Zap, Package, Wrench, AlertTriangle, HelpCircle, 
  Download, ExternalLink, Clock, DollarSign
} from "lucide-react";

const batteryBom = [
  { name: "LiPo Battery", model: "3.7V 1000-2000mAh", price: "$5-10" },
  { name: "TP4056 Charger", model: "USB-C with protection", price: "$1-2" },
  { name: "JST Connector", model: "2-pin PH 2.0mm", price: "$0.50" },
  { name: "Power Switch", model: "SPDT slide switch", price: "$0.50" },
  { name: "Wire", model: "24 AWG silicone", price: "$1" },
];

const assemblySteps = [
  { step: 1, title: "Prepare TP4056 Module", desc: "Solder output wires to B+ and B- pads" },
  { step: 2, title: "Connect Battery", desc: "Solder battery leads to charging module with correct polarity" },
  { step: 3, title: "Add Power Switch", desc: "Install slide switch between TP4056 output and device power input" },
  { step: 4, title: "Route Wires", desc: "Carefully route wires to fit in case without pinching" },
  { step: 5, title: "Test Charging", desc: "Verify charging LED indicators work correctly" },
  { step: 6, title: "Final Assembly", desc: "Secure components and close case" },
];

const faqs = [
  {
    q: "How long does the battery last?",
    a: "With a 1000mAh battery, expect 4-6 hours of active use with display on. Idle mode can last much longer."
  },
  {
    q: "Can I charge while using?",
    a: "Yes, the TP4056 allows passthrough charging. However, this may generate extra heat."
  },
  {
    q: "What size battery fits in the case?",
    a: "The standard case fits batteries up to 50mm × 30mm × 8mm. Larger batteries require case modifications."
  },
  {
    q: "Is it safe?",
    a: "When properly assembled with protection circuits, yes. Always use batteries with built-in protection."
  },
  {
    q: "Can I use 18650 cells?",
    a: "Yes, but you'll need to design a custom case. Use protected 18650 cells only."
  },
];

export default function BatteryPage() {
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
              <Battery className="w-4 h-4" />
              Battery Edition
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              🔋 Battery-Powered <span className="text-secondary text-glow-cyan">VENOM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Go portable with a LiPo battery modification for untethered operation.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-foreground">4-6 hours</span> runtime
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">+$8-15</span> additional cost
              </div>
            </div>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="card-elevated p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">USB vs Battery Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-muted-foreground">Feature</th>
                      <th className="text-center py-3 px-4 text-primary">USB Version</th>
                      <th className="text-center py-3 px-4 text-secondary">Battery Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Portability", usb: "Limited", battery: "Excellent" },
                      { feature: "Runtime", usb: "Unlimited*", battery: "4-6 hours" },
                      { feature: "Additional Cost", usb: "$0", battery: "+$8-15" },
                      { feature: "Build Difficulty", usb: "Easy", battery: "Intermediate" },
                      { feature: "Size/Weight", usb: "Lighter", battery: "Slightly larger" },
                      { feature: "Field Use", usb: "Needs power source", battery: "Standalone" },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">{row.feature}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{row.usb}</td>
                        <td className="py-3 px-4 text-center text-secondary font-medium">{row.battery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">*Requires connected USB power source</p>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="components" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto p-0 mb-8">
                <TabsTrigger value="components" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Package className="w-4 h-4 mr-2" />
                  Parts
                </TabsTrigger>
                <TabsTrigger value="assembly" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Wrench className="w-4 h-4 mr-2" />
                  Assembly
                </TabsTrigger>
                <TabsTrigger value="power" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Zap className="w-4 h-4 mr-2" />
                  Power
                </TabsTrigger>
                <TabsTrigger value="safety" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Safety
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ
                </TabsTrigger>
              </TabsList>

              {/* Components Tab */}
              <TabsContent value="components">
                <div className="card-elevated p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Additional Components</h3>
                    <Button variant="neonCyan" size="sm" asChild>
                      <a href="https://github.com/Rudii-25/BloodHound_VENOM" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                        Download List
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {batteryBom.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.model}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-secondary">{item.price}</span>
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://aliexpress.com" target="_blank" rel="noopener noreferrer">
                              Buy <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Assembly Tab */}
              <TabsContent value="assembly">
                <div className="space-y-4">
                  {assemblySteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="card-glow p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold text-xl shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Power Tab */}
              <TabsContent value="power">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Power Management</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-secondary">Battery Life Estimates</h4>
                      <div className="space-y-3">
                        {[
                          { mode: "Idle (screen off)", time: "10+ hours" },
                          { mode: "Display on", time: "6-8 hours" },
                          { mode: "WiFi scanning", time: "4-6 hours" },
                          { mode: "Heavy WiFi use", time: "2-3 hours" },
                        ].map((item) => (
                          <div key={item.mode} className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">{item.mode}</span>
                            <span className="font-mono text-foreground">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-secondary">Charging Info</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Charge time", value: "2-3 hours" },
                          { label: "Input voltage", value: "5V USB" },
                          { label: "Charge current", value: "1A max" },
                          { label: "Full voltage", value: "4.2V" },
                          { label: "Cut-off voltage", value: "2.5V" },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-mono text-foreground">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Safety Tab */}
              <TabsContent value="safety">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    Safety Guidelines
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Use Protected Batteries", desc: "Always use LiPo batteries with built-in protection circuits to prevent overcharge/discharge." },
                      { title: "Never Short Circuit", desc: "Keep positive and negative terminals apart. Use insulating tape and proper wire management." },
                      { title: "Charge Supervision", desc: "Never leave batteries charging unattended. Use a fireproof charging bag if possible." },
                      { title: "Check for Damage", desc: "Inspect batteries regularly for swelling, punctures, or damage. Dispose of damaged batteries safely." },
                      { title: "Temperature Awareness", desc: "Don't charge below 0°C or above 45°C. Stop use if battery becomes hot during operation." },
                      { title: "Proper Disposal", desc: "Recycle LiPo batteries at designated electronics recycling centers. Never throw in regular trash." },
                    ].map((item) => (
                      <div key={item.title} className="p-4 border border-primary/30 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
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
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
