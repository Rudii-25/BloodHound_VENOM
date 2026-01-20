import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Wrench, Package, Cpu, Box, CheckCircle, AlertTriangle,
  ExternalLink, Download, Clock, DollarSign
} from "lucide-react";

const tools = [
  { name: "Soldering Iron", price: "$15-50", description: "Temperature controlled, 40W minimum" },
  { name: "Solder Wire", price: "$5-10", description: "0.8mm lead-free recommended" },
  { name: "Flux", price: "$2-5", description: "No-clean flux for SMD work" },
  { name: "Wire Cutter", price: "$5-10", description: "Precision flush cutters" },
  { name: "Tweezers", price: "$3-5", description: "ESD-safe, fine tip" },
  { name: "Multimeter", price: "$10-20", description: "For testing connections" },
];

const bom = [
  { name: "D1 Mini", qty: 1, model: "ESP8266 NodeMCU", price: "$4-6", link: "https://aliexpress.com" },
  { name: "OLED Display", qty: 1, model: "SH1106 128×64 I2C", price: "$3-5", link: "https://aliexpress.com" },
  { name: "Tactile Buttons", qty: 6, model: "6×6mm Momentary", price: "$1-2", link: "https://aliexpress.com" },
  { name: "RGB LED", qty: 1, model: "WS2812B 5050", price: "$0.50-1", link: "https://aliexpress.com" },
  { name: "Resistors", qty: 2, model: "10K Ω 0805", price: "$0.10", link: "https://aliexpress.com" },
  { name: "PCB", qty: 1, model: "Custom VENOM PCB", price: "$5-15", link: "https://jlcpcb.com" },
  { name: "M2.5 Screws", qty: 4, model: "M2.5×6mm", price: "$0.50", link: "https://aliexpress.com" },
  { name: "3D Printed Case", qty: 1, model: "PLA/PETG", price: "$2-5", link: "#" },
  { name: "USB Cable", qty: 1, model: "Micro USB", price: "$1-2", link: "https://aliexpress.com" },
];

const assemblySteps = [
  { 
    step: 1, 
    title: "Inspect PCB", 
    description: "Check the PCB for any manufacturing defects. Look for shorts, bridges, or missing pads.",
    tips: ["Use magnifying glass", "Check all traces", "Clean if needed"]
  },
  { 
    step: 2, 
    title: "Install Resistors", 
    description: "Solder the two 10K pull-up resistors for I2C communication.",
    tips: ["Apply flux first", "Use tweezers", "Check orientation"]
  },
  { 
    step: 3, 
    title: "Install Buttons", 
    description: "Solder all 6 tactile buttons. Ensure they sit flush against the PCB.",
    tips: ["Press down while soldering", "Check alignment", "Test each button"]
  },
  { 
    step: 4, 
    title: "Install RGB LED", 
    description: "Solder the WS2812B LED. Pay attention to the orientation - the notched corner indicates the data direction.",
    tips: ["Check datasheet for pinout", "Use low temperature", "Don't overheat"]
  },
  { 
    step: 5, 
    title: "Install OLED Header", 
    description: "Solder the 4-pin header for the OLED display. The display connects via I2C.",
    tips: ["Keep header straight", "Solder one pin first", "Adjust if needed"]
  },
  { 
    step: 6, 
    title: "Install D1 Mini", 
    description: "Solder the D1 Mini using female headers so it can be removed if needed.",
    tips: ["Use female headers", "Check orientation", "ESP8266 faces up"]
  },
];

export default function AssemblyPage() {
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
              <Wrench className="w-4 h-4" />
              Assembly Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              🛠️ Build Your <span className="text-primary text-glow-red">VENOM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete step-by-step guide to building your BloodHound VENOM device.
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-foreground">2-3 hours</span> build time
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">$20-30</span> total cost
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="bom" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
                <TabsTrigger value="tools" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <Wrench className="w-4 h-4 mr-2" />
                  Tools
                </TabsTrigger>
                <TabsTrigger value="bom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <Package className="w-4 h-4 mr-2" />
                  BOM
                </TabsTrigger>
                <TabsTrigger value="assembly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <Cpu className="w-4 h-4 mr-2" />
                  Assembly
                </TabsTrigger>
                <TabsTrigger value="case" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <Box className="w-4 h-4 mr-2" />
                  3D Case
                </TabsTrigger>
                <TabsTrigger value="testing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Testing
                </TabsTrigger>
                <TabsTrigger value="troubleshooting" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Help
                </TabsTrigger>
              </TabsList>

              {/* Tools Tab */}
              <TabsContent value="tools">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Required Tools</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.map((tool) => (
                      <div key={tool.name} className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{tool.name}</h4>
                          <span className="text-secondary font-mono text-sm">{tool.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* BOM Tab */}
              <TabsContent value="bom">
                <div className="card-elevated p-8 overflow-x-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Bill of Materials</h3>
                    <Button variant="neonCyan" size="sm">
                      <Download className="w-4 h-4" />
                      Download CSV
                    </Button>
                  </div>
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium">Component</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Qty</th>
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium">Model/Spec</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium">Price</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bom.map((item) => (
                        <tr key={item.name} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                          <td className="py-3 px-4 text-center text-secondary font-mono">{item.qty}</td>
                          <td className="py-3 px-4 text-muted-foreground">{item.model}</td>
                          <td className="py-3 px-4 text-right text-primary font-mono">{item.price}</td>
                          <td className="py-3 px-4 text-right">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-secondary hover:underline"
                            >
                              Buy <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-muted/30">
                        <td colSpan={3} className="py-3 px-4 font-bold text-foreground">Total Estimated Cost</td>
                        <td className="py-3 px-4 text-right font-bold text-primary">$20-30</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </TabsContent>

              {/* Assembly Tab */}
              <TabsContent value="assembly">
                <div className="space-y-6">
                  {assemblySteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="card-glow p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.tips.map((tip) => (
                              <span key={tip} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                                {tip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* 3D Case Tab */}
              <TabsContent value="case">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">3D Printed Case</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Print Settings</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Layer Height</span>
                          <span className="text-secondary font-mono">0.2mm</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Infill</span>
                          <span className="text-secondary font-mono">20-30%</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Support</span>
                          <span className="text-secondary font-mono">Required</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Material</span>
                          <span className="text-secondary font-mono">PLA/PETG</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Print Time</span>
                          <span className="text-secondary font-mono">3-4 hours</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Downloads</h4>
                      <div className="space-y-3">
                        <Button variant="neon" className="w-full justify-start">
                          <Download className="w-4 h-4" />
                          Download STL Files
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Download className="w-4 h-4" />
                          OpenSCAD Source
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Testing Tab */}
              <TabsContent value="testing">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Testing Your Build</h3>
                  <div className="space-y-4">
                    {[
                      { test: "Visual Inspection", desc: "Check for solder bridges, cold joints, and component alignment" },
                      { test: "Continuity Test", desc: "Use multimeter to verify connections between components" },
                      { test: "Power Test", desc: "Connect USB and verify 3.3V on ESP8266 VCC pin" },
                      { test: "Upload Test", desc: "Flash a simple blink sketch to verify USB communication" },
                      { test: "Button Test", desc: "Run button test code to verify all 6 buttons work" },
                      { test: "Display Test", desc: "Run OLED test to verify I2C communication" },
                      { test: "LED Test", desc: "Run RGB LED test to verify all colors work" },
                    ].map((item, i) => (
                      <div key={item.test} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.test}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Troubleshooting Tab */}
              <TabsContent value="troubleshooting">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Troubleshooting</h3>
                  <div className="space-y-4">
                    {[
                      { problem: "Device not powering on", solution: "Check USB cable, verify solder connections on power pins, test with multimeter" },
                      { problem: "Display not working", solution: "Check I2C address (0x3C), verify SDA/SCL connections, check pull-up resistors" },
                      { problem: "Buttons not responding", solution: "Check solder joints, verify GPIO connections, test with simple digital read code" },
                      { problem: "LED not lighting", solution: "Check orientation, verify data pin connection (D4/GPIO2), check 5V supply" },
                      { problem: "Can't upload code", solution: "Try different USB cable, install CH340 drivers, hold FLASH button while uploading" },
                    ].map((item) => (
                      <div key={item.problem} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">{item.problem}</h4>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
