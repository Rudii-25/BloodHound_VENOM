import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Ruler, Cpu, Zap, Radio, FileText, Thermometer } from "lucide-react";

const specs = {
  dimensions: {
    pcb: "67.1mm × 50.5mm × 1.6mm",
    case: "70mm × 55mm × 12mm",
    weightPcb: "20-25g (PCB + components)",
    weightCase: "30-35g (with case)",
  },
  electrical: [
    { label: "Input Voltage", value: "5V USB or 3.7V LiPo" },
    { label: "Operating Voltage", value: "3.3V" },
    { label: "Max Current", value: "500mA (USB), 1A (Battery)" },
    { label: "Power Consumption", value: "~150-200mA active" },
    { label: "Idle Current", value: "~20mA" },
  ],
  esp8266: [
    { label: "Processor", value: "Tensilica L106 32-bit" },
    { label: "Clock Speed", value: "80/160 MHz" },
    { label: "Flash Memory", value: "4MB" },
    { label: "RAM", value: "80KB user available" },
    { label: "WiFi", value: "802.11 b/g/n 2.4GHz" },
    { label: "GPIO Pins", value: "11 available" },
    { label: "ADC", value: "1 channel, 10-bit" },
  ],
  display: [
    { label: "Type", value: "SH1106 OLED" },
    { label: "Resolution", value: "128 × 64 pixels" },
    { label: "Interface", value: "I2C" },
    { label: "I2C Address", value: "0x3C" },
    { label: "Viewing Angle", value: "160°" },
  ],
  led: [
    { label: "Type", value: "WS2812B" },
    { label: "Colors", value: "16.7M (24-bit RGB)" },
    { label: "Data Pin", value: "GPIO2 (D4)" },
    { label: "Protocol", value: "NeoPixel (800kHz)" },
  ],
};

const pinout = [
  { label: "D0", gpio: 16, func: "Button B / Wake from sleep", notes: "No PWM, no interrupt" },
  { label: "D1", gpio: 5, func: "I2C SCL (OLED)", notes: "Hardware I2C clock" },
  { label: "D2", gpio: 4, func: "I2C SDA (OLED)", notes: "Hardware I2C data" },
  { label: "D3", gpio: 0, func: "Button A / Flash mode", notes: "Internal pull-up, boot mode" },
  { label: "D4", gpio: 2, func: "RGB LED (WS2812B)", notes: "Built-in LED, boot mode" },
  { label: "D5", gpio: 14, func: "Button LEFT", notes: "SPI CLK available" },
  { label: "D6", gpio: 12, func: "Button RIGHT", notes: "SPI MISO available" },
  { label: "D7", gpio: 13, func: "Button UP", notes: "SPI MOSI available" },
  { label: "D8", gpio: 15, func: "Button DOWN", notes: "Boot mode, pull-down" },
  { label: "RX", gpio: 3, func: "Serial RX", notes: "Hardware serial" },
  { label: "TX", gpio: 1, func: "Serial TX", notes: "Hardware serial" },
  { label: "A0", gpio: null, func: "Battery voltage monitoring", notes: "0-1V input range" },
];

export default function SpecificationsPage() {
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
              <Cpu className="w-4 h-4" />
              Technical Reference
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              ⚙️ Technical <span className="text-primary text-glow-red">Specifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete technical reference for the BloodHound VENOM device.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {/* Dimensions */}
              <AccordionItem value="dimensions" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Device Dimensions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="text-sm text-muted-foreground mb-1">PCB Size</h4>
                      <p className="font-mono text-foreground">{specs.dimensions.pcb}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="text-sm text-muted-foreground mb-1">Case Size</h4>
                      <p className="font-mono text-foreground">{specs.dimensions.case}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="text-sm text-muted-foreground mb-1">Weight (PCB)</h4>
                      <p className="font-mono text-foreground">{specs.dimensions.weightPcb}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="text-sm text-muted-foreground mb-1">Weight (Complete)</h4>
                      <p className="font-mono text-foreground">{specs.dimensions.weightCase}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pinout */}
              <AccordionItem value="pinout" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-lg font-semibold">Pin Configuration</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-3 text-muted-foreground text-sm">Label</th>
                          <th className="text-left py-2 px-3 text-muted-foreground text-sm">GPIO</th>
                          <th className="text-left py-2 px-3 text-muted-foreground text-sm">Function</th>
                          <th className="text-left py-2 px-3 text-muted-foreground text-sm">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pinout.map((pin) => (
                          <tr key={pin.label} className="border-b border-border/50">
                            <td className="py-2 px-3 font-mono text-primary">{pin.label}</td>
                            <td className="py-2 px-3 font-mono text-secondary">{pin.gpio ?? "ADC"}</td>
                            <td className="py-2 px-3 text-foreground">{pin.func}</td>
                            <td className="py-2 px-3 text-sm text-muted-foreground">{pin.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Electrical */}
              <AccordionItem value="electrical" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Electrical Specifications</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3">
                    {specs.electrical.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* ESP8266 */}
              <AccordionItem value="esp8266" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Radio className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-lg font-semibold">ESP8266 Specifications</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3">
                    {specs.esp8266.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Display */}
              <AccordionItem value="display" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">OLED Display</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3">
                    {specs.display.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Operating Conditions */}
              <AccordionItem value="conditions" className="card-elevated border-0 px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-lg font-semibold">Operating Conditions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-3">
                    {[
                      { label: "Temperature Range", value: "0°C to +50°C" },
                      { label: "Humidity", value: "0-95% non-condensing" },
                      { label: "Altitude", value: "0 to 3000m" },
                      { label: "ESD Protection", value: "HBM 2kV" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
