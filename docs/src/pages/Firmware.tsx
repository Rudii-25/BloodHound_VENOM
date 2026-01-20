import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Code, Settings, Cpu, BookOpen, Copy, Check, ExternalLink, Download
} from "lucide-react";

const codeExamples = [
  {
    id: "oled",
    title: "OLED Hello World",
    description: "Display text on the OLED screen",
    code: `#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_ADDR 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    Serial.println("OLED initialization failed!");
    while (1);
  }
  
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(10, 20);
  display.println("BloodHound");
  display.setCursor(30, 40);
  display.println("VENOM");
  display.display();
}

void loop() {
  delay(100);
}`,
  },
  {
    id: "buttons",
    title: "Button Input",
    description: "Read button presses and display on Serial",
    code: `// Button Pin Definitions
#define BTN_UP    13  // D7
#define BTN_DOWN  15  // D8
#define BTN_LEFT  14  // D5
#define BTN_RIGHT 12  // D6
#define BTN_A     0   // D3
#define BTN_B     16  // D0

void setup() {
  Serial.begin(115200);
  
  pinMode(BTN_UP, INPUT_PULLUP);
  pinMode(BTN_DOWN, INPUT_PULLUP);
  pinMode(BTN_LEFT, INPUT_PULLUP);
  pinMode(BTN_RIGHT, INPUT_PULLUP);
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  
  Serial.println("Button Test Ready!");
}

void loop() {
  if (digitalRead(BTN_UP) == LOW) Serial.println("UP pressed");
  if (digitalRead(BTN_DOWN) == LOW) Serial.println("DOWN pressed");
  if (digitalRead(BTN_LEFT) == LOW) Serial.println("LEFT pressed");
  if (digitalRead(BTN_RIGHT) == LOW) Serial.println("RIGHT pressed");
  if (digitalRead(BTN_A) == LOW) Serial.println("A pressed");
  if (digitalRead(BTN_B) == LOW) Serial.println("B pressed");
  
  delay(100);
}`,
  },
  {
    id: "led",
    title: "RGB LED Control",
    description: "Control the WS2812B RGB LED",
    code: `#include <Adafruit_NeoPixel.h>

#define LED_PIN 2  // D4 on D1 Mini
#define NUM_LEDS 1

Adafruit_NeoPixel led(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  led.begin();
  led.setBrightness(50);  // 0-255
  led.show();
}

void loop() {
  // Red
  led.setPixelColor(0, led.Color(255, 0, 0));
  led.show();
  delay(1000);
  
  // Green
  led.setPixelColor(0, led.Color(0, 255, 0));
  led.show();
  delay(1000);
  
  // Blue
  led.setPixelColor(0, led.Color(0, 0, 255));
  led.show();
  delay(1000);
  
  // Cyan (BloodHound accent!)
  led.setPixelColor(0, led.Color(0, 212, 255));
  led.show();
  delay(1000);
  
  // Blood Red (Primary!)
  led.setPixelColor(0, led.Color(255, 23, 68));
  led.show();
  delay(1000);
}`,
  },
  {
    id: "wifi",
    title: "WiFi Scanner",
    description: "Scan for nearby WiFi networks",
    code: `#include <ESP8266WiFi.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
  
  display.setCursor(0, 0);
  display.println("WiFi Scanner");
  display.println("Scanning...");
  display.display();
}

void loop() {
  int networks = WiFi.scanNetworks();
  
  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Found: ");
  display.print(networks);
  display.println(" networks");
  display.println("----------------");
  
  for (int i = 0; i < min(networks, 5); i++) {
    display.print(WiFi.RSSI(i));
    display.print(" ");
    display.println(WiFi.SSID(i).substring(0, 12));
  }
  
  display.display();
  delay(5000);
}`,
  },
];

const libraries = [
  { name: "Adafruit SSD1306", desc: "OLED display driver", url: "https://github.com/adafruit/Adafruit_SSD1306" },
  { name: "Adafruit GFX Library", desc: "Graphics primitives", url: "https://github.com/adafruit/Adafruit-GFX-Library" },
  { name: "Adafruit NeoPixel", desc: "WS2812B LED control", url: "https://github.com/adafruit/Adafruit_NeoPixel" },
  { name: "ESP8266WiFi", desc: "Built-in WiFi library", url: "https://arduino-esp8266.readthedocs.io/" },
  { name: "ArduinoJson", desc: "JSON parsing/serialization", url: "https://arduinojson.org/" },
];

const pinout = [
  { label: "D0", gpio: "GPIO16", function: "Button B / Wake" },
  { label: "D1", gpio: "GPIO5", function: "I2C SCL (OLED)" },
  { label: "D2", gpio: "GPIO4", function: "I2C SDA (OLED)" },
  { label: "D3", gpio: "GPIO0", function: "Button A / Flash" },
  { label: "D4", gpio: "GPIO2", function: "RGB LED Data" },
  { label: "D5", gpio: "GPIO14", function: "Button LEFT" },
  { label: "D6", gpio: "GPIO12", function: "Button RIGHT" },
  { label: "D7", gpio: "GPIO13", function: "Button UP" },
  { label: "D8", gpio: "GPIO15", function: "Button DOWN" },
  { label: "A0", gpio: "ADC0", function: "Analog Input (Battery)" },
];

function CodeBlock({ code, title }: { code: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 py-2 bg-muted rounded-t-lg border border-border border-b-0">
        <span className="text-sm font-mono text-muted-foreground">{title}.ino</span>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <pre className="code-block p-4 overflow-x-auto text-sm">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  );
}

export default function FirmwarePage() {
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
              <Code className="w-4 h-4" />
              Programming Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              💻 Program Your <span className="text-secondary text-glow-cyan">VENOM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Code examples, setup guides, and everything you need to bring your device to life.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
                <TabsTrigger value="setup" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Settings className="w-4 h-4 mr-2" />
                  Setup
                </TabsTrigger>
                <TabsTrigger value="examples" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Code className="w-4 h-4 mr-2" />
                  Examples
                </TabsTrigger>
                <TabsTrigger value="pinout" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <Cpu className="w-4 h-4 mr-2" />
                  Pinout
                </TabsTrigger>
                <TabsTrigger value="libraries" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground bg-card border border-border">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Libraries
                </TabsTrigger>
              </TabsList>

              {/* Setup Tab */}
              <TabsContent value="setup">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Arduino IDE Setup</h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Step 1: Download Arduino IDE</h4>
                      <p className="text-muted-foreground mb-3">Download and install the latest Arduino IDE from the official website.</p>
                      <Button variant="neonCyan" size="sm" asChild>
                        <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          Download Arduino IDE
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Step 2: Add ESP8266 Board Manager</h4>
                      <p className="text-muted-foreground mb-3">Go to File → Preferences and add this URL to "Additional Board Manager URLs":</p>
                      <code className="block p-2 bg-background rounded text-sm text-secondary break-all">
                        http://arduino.esp8266.com/stable/package_esp8266com_index.json
                      </code>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Step 3: Install ESP8266 Package</h4>
                      <p className="text-muted-foreground">Go to Tools → Board → Boards Manager, search for "ESP8266" and install.</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Step 4: Select Board</h4>
                      <p className="text-muted-foreground">Go to Tools → Board → ESP8266 Boards → "LOLIN(WEMOS) D1 R2 & mini"</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Examples Tab */}
              <TabsContent value="examples">
                <div className="space-y-8">
                  {codeExamples.map((example) => (
                    <div key={example.id} className="card-elevated p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{example.title}</h3>
                      <p className="text-muted-foreground mb-4">{example.description}</p>
                      <CodeBlock code={example.code} title={example.id} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Pinout Tab */}
              <TabsContent value="pinout">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Pin Configuration</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">D1 Mini Label</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">GPIO</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Function</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pinout.map((pin) => (
                          <tr key={pin.label} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 font-mono text-primary">{pin.label}</td>
                            <td className="py-3 px-4 font-mono text-secondary">{pin.gpio}</td>
                            <td className="py-3 px-4 text-foreground">{pin.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Libraries Tab */}
              <TabsContent value="libraries">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-bold mb-6">Required Libraries</h3>
                  <div className="space-y-4">
                    {libraries.map((lib) => (
                      <div key={lib.name} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <h4 className="font-semibold text-foreground">{lib.name}</h4>
                          <p className="text-sm text-muted-foreground">{lib.desc}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={lib.url} target="_blank" rel="noopener noreferrer">
                            GitHub <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
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
