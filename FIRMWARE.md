# 💻 Firmware Guide - BloodHound VENOM

<div align="center">

**Setup, programming, and customization guide for BloodHound VENOM**

[← Back to README](README.md)

</div>

---

## 📖 Table of Contents

1. [Development Environment Setup](#development-environment-setup)
2. [Board Configuration](#board-configuration)
3. [Library Installation](#library-installation)
4. [Example Sketches](#example-sketches)
5. [Pin Configuration](#pin-configuration)
6. [Advanced Programming](#advanced-programming)
7. [Troubleshooting](#troubleshooting)

---

## 🔧 Development Environment Setup

### Step 1: Install Arduino IDE

1. **Download** from [arduino.cc](https://www.arduino.cc/en/software)
2. **Install** following official instructions for your OS
3. **Launch** Arduino IDE

### Step 2: Add ESP8266 Board Support

1. **Open Preferences:**
   - File → Preferences (or Ctrl+,)

2. **Add Board Manager URL:**
   - Find "Additional Boards Manager URLs"
   - Add: `https://arduino.esp8266.com/stable/package_esp8266com_index.json`
   - Click OK

3. **Install ESP8266 Package:**
   - Tools → Board → Boards Manager
   - Search: `esp8266`
   - Install **esp8266 by ESP8266 Community** (latest version)
   - Wait for installation to complete

### Step 3: Select D1 Mini Board

```
Tools Menu:
├── Board: "LOLIN(WEMOS) D1 Mini (ESP8266)"
├── Upload Speed: 921600
├── CPU Frequency: 80 MHz
├── Flash Size: 4M (FS:2MB OTA:~1019KB)
├── Debug Port: Disabled
└── Debug Level: None
```

---

## 🔌 Board Configuration

### COM Port Selection

**Windows:**
1. Device Manager → Ports (COM & LPT)
2. Note the COM port number
3. Tools → Port → Select your COM port

**macOS/Linux:**
```bash
# List available ports
ls /dev/tty.*
# Usually /dev/ttyUSB0 or /dev/ttyACM0
```

### USB Driver Installation

If device not recognized:

**Windows:**
- Download CH340 driver from [WCH](http://www.wch-ic.com/downloads/CH341SER_ZIP.html)
- Install and restart

**macOS:**
- Download [CH340 macOS driver](https://github.com/juanbrujo/homebrew-casks/issues/4621)
- Install and restart

**Linux:**
- Usually auto-detected, no driver needed
- If issues: `sudo usermod -a -G dialout $USER`

---

## 📚 Library Installation

### Required Libraries

Install via Arduino Library Manager (Sketch → Include Library → Manage Libraries):

| Library | Author | Purpose | Version |
|---------|--------|---------|---------|
| **Adafruit SSD1306** | Adafruit | OLED Display | 2.5.0+ |
| **Adafruit GFX Library** | Adafruit | Graphics functions | 1.11.0+ |
| **Adafruit NeoPixel** | Adafruit | RGB LED control | 1.10.0+ |
| **ESPAsyncWebServer** | me-no-dev | Async web server | 1.2.3+ |
| **Async TCP** | me-no-dev | Async TCP support | 1.1.1+ |
| **ArduinoJson** | Benoit Blanchon | JSON parsing | 6.20.0+ |

### Installation Steps

```
1. Tools → Manage Libraries
2. Search for library name
3. Click Install
4. Wait for download completion
5. Restart Arduino IDE
6. Repeat for each library
```

---

## 💡 Example Sketches

### Example 1: Hello World - OLED Display

```cpp
#include <Wire.h>
#include <Adafruit_SSD1306.h>

// OLED Display
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_ADDR 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  delay(1000);
  
  // Initialize OLED
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    Serial.println("OLED initialization failed!");
    while (1);
  }
  
  // Display test pattern
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(10, 25);
  display.println("BloodHound");
  display.println("  VENOM");
  display.display();
  
  Serial.println("OLED Ready!");
}

void loop() {
  delay(100);
}
```

**Upload Instructions:**
1. Copy code above into new Arduino sketch
2. Select Board: LOLIN(WEMOS) D1 Mini
3. Select COM Port
4. Click Upload (→ button)
5. Open Serial Monitor (115200 baud)
6. Verify "OLED Ready!" message

---

### Example 2: Button Input

```cpp
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_ADDR 0x3C

// Button Pins
#define BTN_UP    D7
#define BTN_DOWN  D8
#define BTN_LEFT  D5
#define BTN_RIGHT D6
#define BTN_OK    D1
#define BTN_MENU  D2

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

uint32_t x = 64, y = 32;  // Cursor position

void setup() {
  Serial.begin(115200);
  
  // Initialize OLED
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    while (1);
  }
  
  // Configure button pins
  pinMode(BTN_UP, INPUT);
  pinMode(BTN_DOWN, INPUT);
  pinMode(BTN_LEFT, INPUT);
  pinMode(BTN_RIGHT, INPUT);
  pinMode(BTN_OK, INPUT);
  pinMode(BTN_MENU, INPUT);
  
  updateDisplay();
}

void loop() {
  // Read buttons
  if (digitalRead(BTN_UP) == LOW) {
    if (y > 10) y -= 5;
    delay(100);
    updateDisplay();
  }
  
  if (digitalRead(BTN_DOWN) == LOW) {
    if (y < 54) y += 5;
    delay(100);
    updateDisplay();
  }
  
  if (digitalRead(BTN_LEFT) == LOW) {
    if (x > 10) x -= 5;
    delay(100);
    updateDisplay();
  }
  
  if (digitalRead(BTN_RIGHT) == LOW) {
    if (x < 118) x += 5;
    delay(100);
    updateDisplay();
  }
  
  if (digitalRead(BTN_OK) == LOW) {
    Serial.println("OK Button Pressed!");
    delay(100);
  }
  
  if (digitalRead(BTN_MENU) == LOW) {
    x = 64;
    y = 32;
    updateDisplay();
    delay(100);
  }
}

void updateDisplay() {
  display.clearDisplay();
  
  // Draw frame
  display.drawRect(0, 0, 128, 64, SSD1306_WHITE);
  
  // Draw cursor (crosshair)
  display.drawLine(x - 5, y, x + 5, y, SSD1306_WHITE);
  display.drawLine(x, y - 5, x, y + 5, SSD1306_WHITE);
  
  // Show coordinates
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(2, 50);
  display.print("X:");
  display.print(x);
  display.print(" Y:");
  display.println(y);
  
  display.display();
}
```

**Features:**
- ✅ Move cursor with arrow buttons
- ✅ Reset position with MENU button
- ✅ Display X/Y coordinates
- ✅ Serial feedback on button press

---

### Example 3: RGB LED Control

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN    D4
#define LED_COUNT  1

Adafruit_NeoPixel pixels(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(115200);
  pixels.begin();
  pixels.show();
  
  Serial.println("RGB LED Test");
}

void loop() {
  // Red
  setColor(255, 0, 0);
  delay(500);
  
  // Green
  setColor(0, 255, 0);
  delay(500);
  
  // Blue
  setColor(0, 0, 255);
  delay(500);
  
  // Yellow
  setColor(255, 255, 0);
  delay(500);
  
  // Cyan
  setColor(0, 255, 255);
  delay(500);
  
  // Magenta
  setColor(255, 0, 255);
  delay(500);
  
  // White
  setColor(255, 255, 255);
  delay(500);
  
  // Off
  setColor(0, 0, 0);
  delay(500);
}

void setColor(uint8_t r, uint8_t g, uint8_t b) {
  pixels.setPixelColor(0, pixels.Color(r, g, b));
  pixels.show();
  Serial.printf("RGB: (%d, %d, %d)\n", r, g, b);
}
```

---

### Example 4: WiFi Scan

```cpp
#include <ESP8266WiFi.h>

void setup() {
  Serial.begin(115200);
  delay(100);
  
  Serial.println("\n\nWiFi Network Scan");
  Serial.println("==================\n");
  
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
}

void loop() {
  Serial.println("Scanning WiFi networks...\n");
  
  int n = WiFi.scanNetworks();
  
  if (n == 0) {
    Serial.println("No networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found:\n");
    
    for (int i = 0; i < n; ++i) {
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(" dBm) ");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? "OPEN" : "SECURE");
    }
  }
  
  Serial.println("\n");
  delay(10000);  // Scan every 10 seconds
}
```

---

## 🔌 Pin Configuration

### D1 Mini Pin Mapping

| ESP8266 Pin | D1 Mini Label | Function | Available |
|-------------|---------------|----------|-----------|
| GPIO16 | D0 | - | ✅ Yes |
| GPIO5 | D1 | SCL (OLED) | ❌ Used |
| GPIO4 | D2 | SDA (OLED) | ❌ Used |
| GPIO0 | D3 | - | ✅ Yes |
| GPIO2 | D4 | RGB LED (WS2812B) | ❌ Used |
| GPIO14 | D5 | Button LEFT | ❌ Used |
| GPIO12 | D6 | Button RIGHT | ❌ Used |
| GPIO13 | D7 | Button UP | ❌ Used |
| GPIO15 | D8 | Button DOWN | ❌ Used |
| GPIO1 | TX | Serial TX | ⚠️ Reserved |
| GPIO3 | RX | Serial RX | ⚠️ Reserved |
| A0 | A0 | Analog Input | ✅ Yes |

### Custom Button Pin Assignment

To modify button pins, edit these #defines:

```cpp
#define BTN_UP    D7    // GPIO13
#define BTN_DOWN  D8    // GPIO15
#define BTN_LEFT  D5    // GPIO14
#define BTN_RIGHT D6    // GPIO12
#define BTN_OK    D1    // GPIO5
#define BTN_MENU  D2    // GPIO4
```

---

## 🚀 Advanced Programming

### WiFi Connection

```cpp
#include <ESP8266WiFi.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

void connectToWiFi() {
  Serial.print("Connecting to WiFi: ");
  Serial.println(ssid);
  
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  
  int timeout = 0;
  while (WiFi.status() != WL_CONNECTED && timeout < 20) {
    delay(500);
    Serial.print(".");
    timeout++;
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nWiFi Connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\nFailed to connect");
  }
}
```

### JSON Parsing

```cpp
#include <ArduinoJson.h>

void parseJSON() {
  String jsonString = "{\"device\":\"BloodHound\",\"version\":\"1.0\"}";
  
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, jsonString);
  
  if (error) {
    Serial.print("JSON Parse Error: ");
    Serial.println(error.c_str());
    return;
  }
  
  const char* device = doc["device"];
  const char* version = doc["version"];
  
  Serial.print("Device: ");
  Serial.println(device);
  Serial.print("Version: ");
  Serial.println(version);
}
```

---

## 🆘 Troubleshooting

### Upload Fails

| Error | Solution |
|-------|----------|
| **Port not found** | Check USB cable, reinstall CH340 driver |
| **Failed to connect** | Hold BOOT button during upload, try slower baud rate |
| **Timeout** | Board may be in endless loop, press RESET button |

### Device doesn't appear

```
Steps:
1. Check USB cable (power + data required)
2. Try different USB port
3. Install CH340 driver
4. Use Arduino IDE board manager to verify installation
5. Try a different computer
```

### Serial monitor shows garbage

- ✅ Verify baud rate is 115200
- ✅ Check TX/RX pins are working
- ✅ Try different USB port or cable

### Sketch won't compile

- ✅ Verify all libraries installed
- ✅ Check board selected is "LOLIN(WEMOS) D1 Mini"
- ✅ Look for missing #include statements
- ✅ Check for typos in variable names

---

## 📚 Resources

### Documentation Links

- [ESP8266 Arduino Reference](https://arduino-esp8266.readthedocs.io/)
- [Adafruit SSD1306 Library](https://github.com/adafruit/Adafruit_SSD1306)
- [Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel)
- [D1 Mini Pinout](https://www.wemos.cc/en/latest/d1/d1_mini.html)

### Useful Communities

- 🌐 [ESP8266 Forum](https://www.esp8266.com)
- 🐙 [GitHub Issues](https://github.com/esp8266/Arduino)
- 💬 [Arduino Forum](https://forum.arduino.cc/)

---

## ✨ Next Steps

1. **Upload example sketches** to test hardware
2. **Modify examples** for your use case
3. **Learn pin configuration** for custom projects
4. **Check out community projects** for inspiration

---

<div align="center">

**Happy Coding! 💻**

[← Back to README](README.md) | [Next: Specifications →](SPECIFICATIONS.md)

</div>
