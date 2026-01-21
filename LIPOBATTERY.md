# 🔋 LiPo Battery Variant Guide - BloodHound VENOM

<div align="center">

**Complete guide for building the battery-powered version**

[← Back to README](README.md)

</div>

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Components](#components)
3. [Assembly Guide](#assembly-guide)
4. [Charging System](#charging-system)
5. [Power Management](#power-management)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

The LiPo battery variant allows your BloodHound VENOM to be completely wireless and portable. This guide covers everything needed to build the battery-powered version.

### Key Differences from USB Version

| Feature | USB Version | LiPo Version |
|---------|------------|---|
| **Power Input** | Micro USB 5V | LiPo 3.7V |
| **Charging** | Via USB directly | TP4056 charger module |
| **Portability** | Requires cable | Fully wireless |
| **Battery Life** | N/A | 4-8 hours |
| **Form Factor** | Slimmer | Slightly thicker |
| **Cost** | Lower | $10-15 more |
| **Weight** | ~20g | ~35-40g |

---

## 🛒 Components for LiPo Variant

### Additional Components (Beyond Standard PCB)

| Part | Qty | Model | Purpose | Est. Price |
|------|-----|-------|---------|-----------|
| **LiPo Battery** | 1 | 1000-2000mAh 3.7V | Power source | $8-12 |
| **TP4056 Charger** | 1 | 1A charger module | Battery charging | $2-4 |
| **USB-C Cable** | 1 | USB-C to USB-A | Charging input | $2-3 |
| **JST-PH Connectors** | 2 | 2-pin JST-PH | Battery connection | $0.50-1 |
| **Power Switch (optional)** | 1 | SPDT mini switch | Power control | $1-2 |
| **Heat Shrink Tubing** | 1m | 3mm diameter | Cable insulation | $1-2 |
| **Deans/XT60 (optional)** | 1 | Micro Deans | Alternative connector | $1-2 |

### LiPo Battery Selection

```
Recommended Battery Specifications:

Capacity:     1000mAh - 2000mAh
Voltage:      3.7V nominal
Chemistry:    Li-ion Polymer
Connector:    JST-PH (2-pin)
Form Factor:  Flat rectangular
Discharge:    At least 1C (1000mA for 1000mAh)

Popular Sources:
- AliExpress
- Amazon (search "1000mAh LiPo battery JST-PH")
- Electronics hobby shops
- RC hobby stores
```

---

## 🔧 Assembly Guide

### Step 1: Prepare the Standard PCB

1. **Follow main assembly guide** for standard version
2. **Do NOT install power from Micro USB** yet
3. **Install all other components** (buttons, OLED, LED, resistors)
4. **Test all functions** before adding battery

### Step 2: Prepare Battery Connections

#### Option A: JST-PH Connector (Recommended)

```
Battery Positive (+) ─── JST-PH Red Wire
Battery Negative (−) ─── JST-PH Black Wire

JST-PH to PCB:
GND ──── Black wire ──── GND pad
3.3V ─── Red wire ─── Battery + pad (new)

Voltage from TP4056:
4.2V out (charge) ──── BATT+ on PCB
GND ─────────────────── GND
```

#### Option B: Direct Solder (Advanced)

If you prefer direct solder connections:
1. Solder battery + wire directly to USB 5V pad
2. Solder battery − wire to GND pad
3. ⚠️ Risk: Difficulty replacing battery later

#### Option C: Deans Connector (High Current)

For higher current applications:
1. Install Deans connectors on battery
2. Solder Deans to PCB + GND pads
3. Allows quick battery swap

### Step 3: Install TP4056 Charger Module

```
TP4056 Charge Controller:
┌────────────────────┐
│  USB-C │ Micro USB │  (Input)
│  or    │  (select) │
└────────┬───────────┘
         │
    ┌────┴────┐
    │ TP4056  │
    ├─────────┤
    │ B+ B−  │  ← To battery
    │ + −    │  ← From D1 Mini
    └─────────┘
```

**Connections:**
```
TP4056 Pin    →   BloodHound Connection
B+ (Battery+) →   Battery + terminal
B− (Battery−) →   Battery − terminal  
+ (Out +)     →   D1 Mini 3.3V rail (via diode)*
− (Out −)     →   GND
USB 5V        →   USB power in
GND           →   GND

*Optional: Add 1N4148 diode on + output
  to prevent back-feeding during USB charging
```

### Step 4: Circuit Design (with TP4056)

```
┌──────────────┐
│  USB 5V      │
│ (Charger)    │
└───────┬──────┘
        │
    ┌───▼──────────┐
    │  TP4056      │  Charging Module
    │  Module      │  (Manages charging)
    └───┬──────────┘
        │ (4.2V output during charge)
        │
    ┌───▼─────────┐
    │  LiPo Batt  │  (1000-2000mAh)
    │  (3.7V)     │
    └───┬─────────┘
        │
    ┌───▼─────────────┐
    │  D1 Mini 3.3V   │  (via onboard LDO)
    │  LDO Regulator  │
    └───┬─────────────┘
        │ (3.3V output)
    ┌───┴────────┬──────────┬─────────┐
    │            │          │         │
    ▼            ▼          ▼         ▼
  OLED       Buttons    RGB LED    Pull-ups
```

### Step 5: Packaging in Case

1. **Position battery** in case (usually bottom)
2. **Route wires** along PCB edges
3. **Secure battery** with double-sided tape or velcro
4. **Keep TP4056** accessible (outside or easily removable)
5. **Drill hole** for USB-C charging port

### Step 6: Power Switch (Optional)

Add a power switch for better power management:

```
LiPo Battery + ──┬──── Switch ──── D1 Mini 3.3V
                 │
              [SWITCH]
                 │
                 └─ LED (Status indicator)
```

---

## ⚡ Charging System

### TP4056 Charge Controller

#### Features

- ✅ Constant current/constant voltage charging
- ✅ Micro USB or USB-C input
- ✅ 1A maximum charging current
- ✅ Temperature protection
- ✅ Over-charge protection
- ✅ LED indicators (charging/done)

#### Charging Specifications

| Parameter | Value |
|-----------|-------|
| **Input Voltage** | 5V USB |
| **Max Charge Current** | 1A |
| **Float Voltage** | 4.2V ± 1% |
| **Charge Time (1000mAh)** | ~1 hour |
| **Charge Time (2000mAh)** | ~2 hours |

#### LED Indicators

| LED | Status | Meaning |
|-----|--------|---------|
| 🔴 Red | ON | Battery charging |
| 🔵 Blue | ON | Charge complete |
| OFF | - | No power/error |

### Charging Process

```
1. Connect USB 5V to TP4056
   ↓
2. Red LED illuminates (charging started)
   ↓
3. Charging current decreases as battery fills
   ↓
4. When full (4.2V), Blue LED turns on
   ↓
5. Disconnect USB (can leave connected safely)
```

### Charging Safety

⚠️ **Important Safety Practices:**

- ✅ Always use genuine TP4056 modules
- ✅ Don't charge in extreme temperatures
- ✅ Don't leave unattended for extended periods
- ✅ Stop charging if battery gets hot
- ✅ Use quality LiPo batteries (Turnigy, Tattu, etc.)
- ✅ Never short the battery terminals
- ✅ Never leave battery fully charged for months
- ✅ Store at 50% charge if not using

---

## 🔌 Power Management

### Battery Life Estimates

Based on 1000mAh battery with different usage patterns:

| Usage Pattern | Estimated Runtime |
|---|---|
| **Idle (display off)** | 10+ hours |
| **Display on, low WiFi** | 6-8 hours |
| **Display on, WiFi active** | 4-6 hours |
| **Heavy WiFi + LED** | 2-3 hours |
| **WiFi TX every second** | 1-2 hours |

### Power Saving Tips

```cpp
// Enable deep sleep for longer battery life
ESP.deepSleep(microseconds);

// Reduce display brightness
display.dim(true);
display.setContrast(50);  // 0-255

// WiFi power modes
WiFi.mode(WIFI_OFF);        // Max save
WiFi.mode(WIFI_STA);        // Less saving
WiFi.mode(WIFI_MODEM_SLEEP); // Minimal save
WiFi.setOutputPower(10);    // Reduce TX power

// LED brightness control
void setColor(uint8_t r, uint8_t g, uint8_t b) {
  // Reduce to 50% brightness
  pixels.setPixelColor(0, pixels.Color(r/2, g/2, b/2));
  pixels.show();
}
```

### Monitoring Battery Voltage

```cpp
// Read battery voltage via ADC
#define BATTERY_PIN A0

void checkBattery() {
  int rawValue = analogRead(BATTERY_PIN);
  // Convert to voltage (ESP8266 0-1V input)
  float voltage = rawValue * (1.0 / 1024.0);
  
  // For 3.7V system with voltage divider
  float batteryVoltage = voltage * 2.0;  // Adjust divider ratio
  
  Serial.print("Battery: ");
  Serial.print(batteryVoltage);
  Serial.println("V");
}
```

---

## 🔧 Troubleshooting

### Charging Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| **No charging (no LED)** | No USB power | Check USB cable, try different port |
| **Red LED only (no blue)** | Battery not charging | Check battery connections, swap battery |
| **No power after charge** | TP4056 not connected | Verify wiring to D1 Mini |
| **Charges but won't stay charged** | Faulty battery | Replace LiPo battery |

### Device Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| **Won't power on** | Battery dead | Charge for 30+ minutes |
| **Powers on briefly then off** | Loose connections | Recheck all solder joints |
| **Brown-out reset messages** | Low voltage | Let battery charge fully |
| **Slow operation** | Low battery warning | Charge the device |

### Battery Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| **Battery too hot** | Over-charging | Remove power immediately |
| **Swollen battery** | Over-charge damage | Replace battery safely |
| **No power output** | Dead battery | Fully charge or replace |
| **Voltage drops quickly** | Battery aging | Replace with new battery |

---

## ⚠️ Safety & Warnings

### LiPo Battery Safety

🔴 **CRITICAL SAFETY NOTES:**

- **Never short** the battery terminals (risk of fire)
- **Never over-charge** beyond 4.2V (use TP4056)
- **Never fully discharge** below 3.0V (battery damage)
- **Keep away** from moisture and water
- **Don't puncture** or damage the battery
- **Store safely** in fireproof container if not used
- **Check for swelling** - battery is damaged if puffed
- **Proper disposal** - recycle at electronics depot

### Component Safety

- ⚠️ TP4056 may get warm during fast charging (normal)
- ⚠️ USB power supply should be genuine 5V/1A minimum
- ⚠️ Overcharging shuts off automatically but monitor
- ⚠️ Charging in extreme heat increases failure risk

---

## 📊 Specifications Summary

| Spec | Typical Value | Range |
|------|---|---|
| **Battery Voltage** | 3.7V (nominal) | 2.8V - 4.2V |
| **Output from TP4056** | 4.2V max | 0 - 4.2V |
| **D1 Mini Input** | 3.3V (regulated) | 2.5V - 5.0V (via LDO) |
| **Charge Time** | 1-2 hours | Depends on capacity |
| **Self-discharge** | ~3% per month | LiPo normal |
| **Cycle Life** | 500+ cycles | With proper care |
| **Operating Temp** | 0°C - 40°C | Safe range |

---

## 🔄 Maintenance

### Regular Maintenance

- **Monthly:** Check battery condition, no swelling
- **Quarterly:** Do a full charge/discharge cycle
- **Yearly:** Inspect connectors for corrosion
- **As needed:** Replace battery after 2-3 years

### Storage

If not using for extended periods:
1. Charge battery to 50% (3.8-3.9V)
2. Store in cool, dry place
3. Check monthly for swelling
4. Recharge every 3 months
5. Never store fully charged or fully discharged

---

## 📈 Performance Comparison

### USB vs Battery-Powered

```
Feature          USB Version    Battery Version
─────────────────────────────────────────────
Power Source     USB 5V         LiPo 3.7V
Max Current      500mA (USB)    1A (battery)
Always-On Time   Unlimited      4-6 hours
WiFi TX Power    Full (20dBm)   Full (20dBm)
Portability      Limited        Excellent
Cost             Lower          Higher
Setup Complexity Simpler        More complex
Field Use        Poor           Excellent
```

---

<div align="center">

### Questions About Battery Variant?

Check the troubleshooting section above or review the assembly steps.

---

[← Back to README](README.md) | [Assembly Guide →](ASSEMBLY.md) | [Specifications →](SPECIFICATIONS.md)

</div>
