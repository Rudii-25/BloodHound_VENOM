# ⚙️ Technical Specifications - BloodHound VENOM

<div align="center">

**Detailed technical information, pinouts, and specifications**

[← Back to README](README.md)

</div>

---

## 📖 Table of Contents

1. [Device Specifications](#device-specifications)
2. [Pin Configuration](#pin-configuration)
3. [Electrical Specifications](#electrical-specifications)
4. [Communication Protocols](#communication-protocols)
5. [Component Datasheets](#component-datasheets)
6. [PCB Information](#pcb-information)

---

## 📋 Device Specifications

### Physical Dimensions

```
PCB Dimensions:
┌─────────────────────────────┐
│                             │
│     67.1 mm (length)        │
│                             │
│  50.5 mm  ▪ (8 mm height)   │
│         (width)             │
└─────────────────────────────┘

Case Dimensions (with buttons):
Length:  70mm
Width:   55mm
Height:  12mm (approximate)
```

### Weight & Form Factor

| Property | Value |
|----------|-------|
| **PCB Weight** | ~8-10g |
| **Total Weight (assembled)** | ~20-25g |
| **Total Weight (with case)** | ~30-35g |
| **Pocket Friendly** | ✅ Yes |
| **Hand Held Comfort** | ✅ Excellent |

---

## 🔌 Pin Configuration

### D1 Mini (ESP8266) Pinout

```
┌─────────────────────────────────────┐
│        D1 Mini - Top View           │
│                                     │
│  GND  D0   A0   D5   D6   D7   D8   3V3
│  ├─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┤
│  │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │
│  ├─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┤
│  │  USB Micro          WEMOS/LOLIN  │
│  │                                  │
│  ├─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┤
│  │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │
│  │  RST  RX  TX  D1   D2  D3  D4   GND
│  │ (GPIO)      (GPIO)              │
│                                     │
└─────────────────────────────────────┘
```

### ESP8266 GPIO Mapping

| D1 Label | GPIO | Pin # | Function | BloodHound Use |
|----------|------|-------|----------|---|
| **D0** | GPIO16 | 16 | General I/O | Available |
| **D1** | GPIO5 | 5 | SCL | OLED Clock |
| **D2** | GPIO4 | 4 | SDA | OLED Data |
| **D3** | GPIO0 | 0 | General I/O | Available |
| **D4** | GPIO2 | 2 | LED | RGB LED (WS2812B) |
| **D5** | GPIO14 | 14 | SPI CLK | Button LEFT |
| **D6** | GPIO12 | 12 | SPI MISO | Button RIGHT |
| **D7** | GPIO13 | 13 | SPI MOSI | Button UP |
| **D8** | GPIO15 | 15 | SPI CS | Button DOWN |
| **RX** | GPIO3 | 3 | Serial RX | Serial Input |
| **TX** | GPIO1 | 1 | Serial TX | Serial Output |
| **A0** | ADC | - | Analog Input | Available |

### Button Pin Assignment

```cpp
#define BTN_UP    D7    // GPIO13
#define BTN_DOWN  D8    // GPIO15
#define BTN_LEFT  D5    // GPIO14
#define BTN_RIGHT D6    // GPIO12
#define BTN_OK    D1    // GPIO5 *
#define BTN_MENU  D2    // GPIO4 *

* Note: D1 and D2 are shared with OLED I2C
  Requires pull-up resistors: R1 (D1), R2 (D2)
```

### OLED Display Connection

```
J1 Header (4-pin I2C):
Pin 1: VDD (Power +3.3V)
Pin 2: GND (Ground)
Pin 3: SCL (Clock - D1/GPIO5)
Pin 4: SDA (Data - D2/GPIO4)

OLED Default I2C Address: 0x3C
Alternative Address: 0x3D (if jumper modified)
```

### RGB LED Connection

```
D4 (GPIO2) → WS2812B 5050 LED
- Signal: GPIO2
- Power: 3.3V (from D1 Mini)
- Ground: GND
- Protocol: WS2812B serial (800kHz)
```

---

## ⚡ Electrical Specifications

### Power Distribution

```
┌─────────────────┐
│  Micro USB 5V   │
│    (PC/Power)   │
└────────┬────────┘
         │ (5V)
         ▼
  ┌──────────────┐
  │  D1 Mini    │ (LDO Regulator)
  │  (3.3V Out) │
  └──────┬───────┘
         │ (3.3V)
    ┌────┴─────┬──────────┬─────────┐
    │           │          │         │
    ▼           ▼          ▼         ▼
  OLED      Buttons     RGB LED   Pull-ups
 (80mA)    (10mA)      (60mA)    (5mA)
```

### Current Consumption

| Component | Operating | Idle | Peak |
|-----------|-----------|------|------|
| **ESP8266** | 70mA | 15mA | 200mA (WiFi TX) |
| **OLED Display** | 80mA | 5mA | 100mA (full white) |
| **RGB LED** | 60mA | 0mA | 180mA (full white) |
| **Buttons** | 2mA | 0mA | 10mA |
| **Total System** | ~150-200mA | 20mA | 500mA+ |

### USB Power Specifications

| Parameter | Value |
|-----------|-------|
| **Input Voltage** | 5V DC |
| **Max Current** | 500mA (USB standard) |
| **Connector** | Micro USB Type-B |
| **Voltage Drop** | < 0.2V (internal LDO) |

### LiPo Battery Specifications (Optional)

| Parameter | Value |
|-----------|-------|
| **Typical Size** | 1000-2000mAh |
| **Voltage** | 3.7V nominal |
| **Max Continuous** | 1-2A |
| **Charging Rate** | 0.5-1A |
| **Estimated Runtime** | 4-6 hours |
| **Charging Time** | 2-3 hours |

---

## 📡 Communication Protocols

### I2C (OLED Display)

```
D1 Mini           OLED Display
(Master)          (Slave @0x3C)

SCL (D1/GPIO5) ─── SCL
SDA (D2/GPIO4) ─── SDA
3.3V ──────────── VCC
GND ────────────── GND

I2C Configuration:
- Address: 0x3C (default) or 0x3D
- Speed: 100kHz (standard mode)
- Pull-ups: 10K Ohm (R1, R2)
```

### SPI Protocol (RGB LED)

```
WS2812B Protocol:
- Single wire communication
- Data Pin: GPIO2 (D4)
- Speed: 800kHz
- Format: GRB (Green, Red, Blue)
- Voltage: 3.3V logic (5V tolerant)

Timing:
- Bit 0: 0.4µs HIGH, 0.85µs LOW
- Bit 1: 0.8µs HIGH, 0.45µs LOW
- Reset: >50µs LOW
```

### Serial Communication

```
UART0 (D1 Mini):
- TX Pin: GPIO1 (TX)
- RX Pin: GPIO3 (RX)
- Baud Rate: 115200 (default)
- Data: 8 bits
- Stop Bits: 1
- Parity: None
```

### WiFi Specifications

```
IEEE 802.11 b/g/n:
- Frequency: 2.4GHz
- Max TX Power: 20dBm
- Antenna: On-board PCB antenna
- Range: ~30-50m (indoor)
- Data Rate: Up to 150Mbps
- Modes: STA, AP, STA+AP
```

---

## 📊 Component Datasheets

### ESP8266 (D1 Mini)

| Feature | Specification |
|---------|---|
| **Core** | 32-bit RISC (Tensilica L106) |
| **Clock Speed** | 80MHz / 160MHz |
| **RAM** | 160KB (80KB user available) |
| **Flash** | 4MB |
| **GPIO** | 11 (some multiplexed) |
| **ADC** | 1 × 10-bit SAR |
| **I2C** | 1 (software or hardware) |
| **SPI** | 2 (SPI, HSPI) |
| **UART** | 2 (UART0, UART1) |
| **Timer** | 1 (5-bit pre-scaler) |
| **Operating Voltage** | 3.0V - 3.6V |
| **Operating Temperature** | -40°C to +125°C |

**References:**
- [D1 Mini Pinout](https://www.wemos.cc/en/latest/d1/d1_mini.html)
- [ESP8266 Reference](https://esp8266.com/)

### SH1106 OLED Display

| Feature | Specification |
|---------|---|
| **Resolution** | 128 × 64 pixels |
| **Display Size** | 1.3" diagonal |
| **Pixel Pitch** | 0.0775mm |
| **Display Color** | White (or Blue, Yellow) |
| **Interface** | I2C (4-wire) |
| **I2C Address** | 0x3C or 0x3D (jumper selectable) |
| **Operating Voltage** | 3.3V to 5V |
| **Current Draw** | 5-100mA (depends on content) |
| **Response Time** | <1µs (pixel switching) |
| **Operating Temp** | -30°C to +70°C |

### WS2812B RGB LED

| Feature | Specification |
|---------|---|
| **Type** | 5050 SMD RGB LED |
| **Protocol** | 1-wire WS2812B |
| **Color Format** | GRB 24-bit |
| **Max Brightness** | 255 (per channel) |
| **Operating Voltage** | 4.7V to 5.3V (3.3V logic compatible) |
| **Current (White Full)** | ~60mA per LED |
| **Operating Temp** | -40°C to +85°C |
| **LED Count** | 1 (single LED on PCB) |
| **Refresh Rate** | >400Hz |

### 6×6 Tactile Buttons

| Feature | Specification |
|---------|---|
| **Type** | 4-pin tactile switch |
| **Contact Resistance** | <100 mΩ |
| **Operating Force** | 200gf typical |
| **Travel Distance** | 2.5mm |
| **Life Rating** | >1,000,000 cycles |
| **Voltage Rating** | 12VDC max |
| **Current Rating** | 50mA max |
| **Operating Temperature** | -20°C to +80°C |

---

## 🔵 PCB Information

### PCB Specifications

| Property | Value |
|----------|-------|
| **Board Size** | 67.1mm × 50.5mm |
| **Layers** | 2 (single-sided component, traces bottom) |
| **Thickness** | 1.6mm (standard FR4) |
| **Copper Weight** | 1oz (35µm) |
| **Solder Mask** | Green (both sides) |
| **Silkscreen** | White (top side) |
| **Finish** | HASL (Hot Air Solder Leveling) or ENIG |
| **Via Size** | 0.3mm (via dia) |
| **Min Trace Width** | 0.2mm |
| **Min Clearance** | 0.2mm |

### Manufacturing Files

```
Available in BloodHound_VENOM_Gerber/:
├── BloodHound_VENOM-F_Cu.gtl        # Front copper layer
├── BloodHound_VENOM-B_Cu.gbl        # Back copper layer
├── BloodHound_VENOM-F_Mask.gts      # Front solder mask
├── BloodHound_VENOM-B_Mask.gbs      # Back solder mask
├── BloodHound_VENOM-F_Silkscreen.gto # Front silkscreen
├── BloodHound_VENOM-B_Silkscreen.gbo # Back silkscreen
├── BloodHound_VENOM-Edge_Cuts.gm1   # Board outline
├── BloodHound_VENOM-PTH.drl         # Plated through holes
├── BloodHound_VENOM-NPTH.drl        # Non-plated holes
└── BloodHound_VENOM.kicad_pcb       # KiCAD PCB file
```

### Component Placement

| Reference | Component | Package | Location |
|-----------|-----------|---------|----------|
| **U1** | D1 Mini | 16-Pin Header | Center-left |
| **J1** | OLED Header | 4-Pin Header | Top-right |
| **D1** | WS2812B RGB LED | SMD 5050 | Center-top |
| **SW1-SW6** | Tactile Buttons | 6×6 Through Hole | Left side (3×2 grid) |
| **R1, R2** | 10K Resistors | Axial 0.25W | Near J1 |

---

## 🔍 Schematic Overview

```
┌──────────────────────────────────────┐
│     BloodHound VENOM Schematic       │
└──────────────────────────────────────┘

        ┌─── USB 5V ───┐
        │              │
        ▼              │
    ┌────────┐         │
    │ LDO    │─── 3.3V │
    └────────┘         │
        │              │
        ├─────┬────────┤
        │     │        │
        ▼     ▼        ▼
    D1Mini OLED/  RGB LED
    ESP8266 Buttons

    Connections:
    D1 (GPIO5)  ← I2C SCL (OLED)
    D2 (GPIO4)  ← I2C SDA (OLED)
    D4 (GPIO2)  ← WS2812B Data
    D5-D8 (GPIO14,12,13,15) ← Buttons
    R1, R2      ← Pull-up resistors
```

---

## 📐 Test Points & Debugging

### Serial Debug Port

```
TX (GPIO1) → USB-to-Serial TTL converter → Computer
RX (GPIO3) ← USB-to-Serial TTL converter ← Computer

Configuration:
- Baud: 115200
- Data: 8 bits
- Stop: 1 bit
- Parity: None
- Flow Control: None
```

### JTAG/SWD (Advanced Debugging)

Not populated on standard PCB. Optional for advanced debugging:
- GPIO12 (D6) - TDI
- GPIO13 (D7) - TDO
- GPIO14 (D5) - TCK
- GPIO15 (D8) - TMS

---

## 🌡️ Operating Conditions

### Environmental Specifications

| Condition | Range |
|-----------|-------|
| **Operating Temperature** | 0°C to +50°C |
| **Storage Temperature** | -20°C to +70°C |
| **Humidity** | 0% to 95% (non-condensing) |
| **Altitude** | 0 to 3000m |

### Mechanical Stress Limits

- **Drop Test**: 1m onto hard surface
- **Vibration**: < 2G (operational)
- **Shock**: < 10G (1ms)

---

<div align="center">

**Questions? Check the guides or datasheets linked above.**

[← Back to README](README.md) | [Next: Gallery →](GALLERY.md)

</div>
