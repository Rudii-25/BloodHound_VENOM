# 🛠️ Assembly Guide - BloodHound VENOM

<div align="center">

**Complete step-by-step guide to building your BloodHound VENOM**

[← Back to README](README.md)

</div>

---

## 📋 Table of Contents

1. [Bill of Materials](#bill-of-materials)
2. [Tools Required](#tools-required)
3. [Pre-Assembly Checklist](#pre-assembly-checklist)
4. [PCB Assembly](#pcb-assembly)
5. [3D Printing the Case](#3d-printing-the-case)
6. [Final Assembly](#final-assembly)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## 🛒 Bill of Materials

### Core Components

| Part | Qty | Model/Spec | Supplier Link | Est. Price |
|------|-----|-----------|---|---|
| **Microcontroller** | 1 | Wemos/Lolin D1 Mini (ESP8266) | [AliExpress](https://s.click.aliexpress.com/e/_99hh4H) | $4-6 |
| **OLED Display** | 1 | 1.3" SH1106 I2C (128x64) | [AliExpress](https://s.click.aliexpress.com/e/_9gf1BF) | $3-5 |
| **Push Buttons** | 6 | 6x6mm 4-pin Tactile Switch | [AliExpress](https://s.click.aliexpress.com/e/_9IwWtj) | $1-2 |
| **RGB LED** | 1 | WS2812B 5050 SMD RGB LED | [AliExpress](https://s.click.aliexpress.com/e/_9fRrPj) | $0.50-1 |
| **Resistors** | 2 | 10K Ohm Resistors | [AliExpress](https://www.aliexpress.com) | $0.10 |
| **PCB** | 1 | BloodHound VENOM 2-layer | [Generate from KiCAD](BloodHound_VENOM.kicad_pcb) | $5-15 |

### Mechanical Parts

| Part | Qty | Specification | Notes |
|------|-----|---------------|-------|
| **M2.5 Screws** | 4 | 6mm length | Stainless steel recommended |
| **M2.5 Washers** | 4 | Flat washers | Optional but helpful |
| **3D Printed Case** | 1 | ABS/PLA/PETG | From BloodHound_VENOM_Case/ |
| **USB Cable** | 1 | Micro USB | For programming |

### Optional Upgrades

| Part | Purpose | Notes |
|------|---------|-------|
| **LiPo Battery** | Portable power | See [LIPOBATTERY.md](LIPOBATTERY.md) |
| **TP4056 Charger** | Battery charging | With LiPo variant |
| **Heat Shrink** | Cable insulation | 3mm, multiple colors |
| **Flux Pen** | Better soldering | Improves solder joints |

**Total Estimated Cost: $15-30 USD**

---

## 🔨 Tools Required

### Essential Tools

| Tool | Purpose | Budget Estimate |
|------|---------|-----------------|
| 🔥 **Soldering Iron** | Solder components to PCB | $15-50 |
| 🌡️ **Solder Wire** | 60/40 or Lead-free | $5-10 |
| 🫙 **Solder Flux** | Improve solder quality | $2-5 |
| 🔪 **Desoldering Braid/Pump** | Fix solder mistakes | $3-10 |
| ✂️ **Wire Cutter** | Trim component leads | $5-10 |
| 📌 **Tweezers** | Handle small parts | $3-5 |
| 🔬 **Magnifying Glass** | See small details | $5-15 |
| 🧪 **Multimeter** | Test connections | $10-20 |

### Optional Tools

- 🛡️ **Helping Hands** - Hold PCB while soldering
- 🌡️ **Temperature-controlled Iron** - Better quality soldering
- 🔍 **USB Microscope** - Better visibility
- 💾 **Hot Air Rework Station** - For SMD components

---

## ✅ Pre-Assembly Checklist

Before you start, verify:

- [ ] All components received and in working condition
- [ ] Soldering iron working and properly calibrated
- [ ] Workspace clean and organized
- [ ] PCB visually inspected for damage
- [ ] All tool available and ready
- [ ] Adequate lighting in workspace
- [ ] Have a project photo reference ready
- [ ] Downloaded firmware files

---

## 🔌 PCB Assembly

### Step 1: Inspect the PCB

```
✓ Check for manufacturing defects
✓ Verify all pads are clean and free of oxidation
✓ Inspect traces for breaks or shorts
✓ Confirm silkscreen is readable
```

### Step 2: Install Resistors (R1, R2)

<div align="center">

**10K Pull-up Resistors**

```
   |---[10K]---|
   D1 Mini    OLED
```

</div>

**Instructions:**
1. Identify R1 and R2 positions on PCB (refer silkscreen)
2. Bend resistor leads at 90° angles
3. Insert into holes
4. Solder on both sides
5. Trim excess lead with wire cutter
6. Clean excess flux with flux remover or alcohol

**Soldering Tips:**
- Use adequate heat (350-400°C iron tip)
- Let solder flow naturally around the pad
- Hold iron for 2-3 seconds
- Remove iron and let cool naturally

### Step 3: Install Push Buttons (SW1-SW6)

**Position Reference:**

| Button | Location | Function |
|--------|----------|----------|
| SW1 | Left side | UP |
| SW2 | Left side | DOWN |
| SW3 | Left side | LEFT |
| SW4 | Left side | RIGHT |
| SW5 | Top center | OK/SELECT |
| SW6 | Bottom | MENU |

**Assembly:**
1. Align button with PCB outline (pads should align perfectly)
2. Press button fully seated into PCB
3. Solder all 4 pins from top (pad side)
4. Ensure button clicks after soldering
5. Test all 6 buttons for tactile response

### Step 4: Install RGB LED (D1)

⚠️ **IMPORTANT:** LEDs are polarized! Check orientation:
- **Longer lead** = Positive (+)
- **Shorter lead** = Negative (-)
- **Flat edge** = Negative side

**Steps:**
1. Check PCB marking for polarity (usually a dot or line)
2. Bend LED leads 90° if needed
3. Insert with correct polarity
4. Solder both leads (short joint is OK)
5. Verify LED doesn't light up during soldering (current flow)

### Step 5: Install J1 (OLED Connector)

The OLED connects via 4-pin header:

| Pin | Signal | OLED Pin |
|-----|--------|----------|
| 1 | VDD (Power) | VCC |
| 2 | GND (Ground) | GND |
| 3 | SCK (Clock) | SCL |
| 4 | SDA (Data) | SDA |

**Critical:** Verify OLED pin order on your specific module:
- ✅ VDD, GND, SCK, SDA (correct)
- ❌ VDD, GND, SDA, SCK (wrong - swap SCK/SDA)

**Assembly:**
1. Install right-angle pin header into J1 pads
2. Solder all 4 pins
3. Trim excess header length
4. Connect OLED header to J1 (verify polarity)
5. Test OLED is recognized (see Testing section)

### Step 6: Install D1 Mini

The main microcontroller uses a 16-pin dual-row header:

```
D1 Mini Bottom View:
GND  D0  A0  D5  D6  D7  D8   3V3
RST  RX  TX  D1  D2  D3  D4   GND
```

**Steps:**
1. Install male pin headers into D1 Mini
2. Insert into J2 pads on main PCB
3. Ensure headers are fully seated
4. Solder all 16 pins carefully
5. Double-check USB port is aligned properly

**Soldering Notes:**
- Use helping hands to hold the board
- Let solder cool between pins
- Check for solder bridges under magnification
- Test connectivity with multimeter

### Step 7: Soldering Quality Check

```
✓ All solder joints are shiny (not dull gray)
✓ No cold solder joints (dull appearance)
✓ No solder bridges between adjacent pads
✓ No missing solder joints
✓ Component leads fully seated
✓ No bent component leads touching pads
```

---

## 🖨️ 3D Printing the Case

### Preparation

1. **Download STL file:**
   - Located in `BloodHound_VENOM_Case/`
   - File: `BloodHound_VENOM_Case.scad`

2. **Generate STL** (if needed):
   ```
   • Open BloodHound_VENOM_Case.scad in OpenSCAD
   • Adjust parameters if needed (wall thickness, dimensions)
   • Export as STL
   ```

3. **Slice for 3D Printer:**
   - Use Cura, PrusaSlicer, or similar
   - Recommended settings:
     - **Layer Height:** 0.2mm
     - **Infill:** 20-30%
     - **Support:** Yes (for button areas)
     - **Print Speed:** 50-60 mm/s

### Printing Parameters

| Setting | Value | Notes |
|---------|-------|-------|
| **Material** | ABS/PLA/PETG | PETG best balance |
| **Nozzle Temp** | 200-220°C | Check filament specs |
| **Bed Temp** | 60°C (PLA), 80-90°C (PETG) | For better adhesion |
| **Print Time** | ~3-4 hours | Varies by settings |
| **Estimated Weight** | 20-30g | Depends on infill |

### Post-Processing

After printing:
1. **Remove supports** carefully
2. **Smooth edges** with sandpaper (optional)
3. **Clean holes** with appropriate drill bit
4. **Test fit** PCB in case
5. **Check button clearance** before final assembly

---

## 🔧 Final Assembly

### Stage 1: Prepare Components

- [ ] PCB fully soldered and tested
- [ ] 3D case printed and cleaned
- [ ] All M2.5 screws and washers ready
- [ ] USB cable available for testing

### Stage 2: Install PCB in Case

1. **Align PCB** with case mounting holes
2. **Guide button stems** into button holes
3. **Ensure OLED** fits in display cutout
4. **Check USB port** alignment
5. **Verify button clearance** - press each one

### Stage 3: Screw Assembly

```
    [ ] [ ] (top screws)
  ┌─────────────┐
  │   DEVICE    │
  └─────────────┘
    [ ] [ ] (bottom screws)

Position: All 4 corners or as per case design
```

**Screw Sequence:**
1. Insert all 4 screws loosely first
2. Tighten in **cross pattern:** top-left, bottom-right, top-right, bottom-left
3. **Do NOT over-tighten** - plastic can crack
4. Verify all components stay aligned

### Stage 4: Cable Management

If adding LiPo battery:
- Route battery wires away from solder joints
- Use hot glue or adhesive tape to secure wires
- Ensure no pinched wires when case closes

---

## 🧪 Testing

### Electrical Tests

**Before any firmware upload:**

1. **Continuity Test** (Multimeter Ohm mode):
   ```
   ✓ GND to GND - should be 0 ohms
   ✓ 3V3 to 3V3 - should be 0 ohms
   ✓ No continuity between 3V3 and GND
   ```

2. **Voltage Test** (Multimeter Voltage mode):
   ```
   USB powered:
   ✓ Measure 3V3 pin to GND = ~3.3V
   ✓ Measure 5V pin to GND = ~5V
   ```

3. **Component Check:**
   ```
   ✓ OLED powers on (if connected)
   ✓ RGB LED responds to power (brief pulse)
   ✓ All buttons are mechanically functional
   ```

### Firmware Loading

See [FIRMWARE.md](FIRMWARE.md) for detailed firmware setup and testing.

### Full System Test

After firmware upload:

- [ ] Device powers on from USB
- [ ] OLED display shows test pattern
- [ ] All 6 buttons are responsive
- [ ] RGB LED changes colors on button press
- [ ] WiFi scan works
- [ ] Serial communication works

---

## 🔴 Troubleshooting

### Common Issues

#### Device won't power on

| Symptom | Cause | Solution |
|---------|-------|----------|
| No LED light | No power | Check USB connection, try different port |
| Red LED only | D1 Mini issue | Check D1 Mini is fully seated |
| Very dim/flickering | Bad solder joint | Reflow all power-related pads |

#### OLED not displaying

| Symptom | Cause | Solution |
|---------|-------|----------|
| Black screen | I2C error | Check pin connections, verify I2C address |
| Garbled display | Wrong address | Try 0x3C and 0x3D addresses |
| No power to OLED | Solder joint | Reflow VDD/GND pins on J1 |

#### Buttons not working

| Symptom | Cause | Solution |
|---------|-------|----------|
| One button unresponsive | Mechanical issue | Reseat button, check mechanical movement |
| All buttons dead | Code issue | Check firmware, verify GPIO pins |
| Intermittent response | Cold solder joint | Reflow button solder joints |

#### RGB LED not lighting

| Symptom | Cause | Solution |
|---------|-------|----------|
| No light at all | Polarity wrong | Check LED orientation, resolder |
| Only red/green/blue | LED damaged | Replace LED |
| Wrong colors | Code issue | Check firmware color mapping |

### Diagnostic Commands

After firmware upload, open Serial Monitor (115200 baud):

```
Status check:
GET /status

Sensor test:
GET /test/buttons
GET /test/oled
GET /test/led

Pin voltage:
GET /pins/voltage
```

---

## ✨ Next Steps

1. **Program Your Device** → [FIRMWARE.md](FIRMWARE.md)
2. **Learn the Pinouts** → [SPECIFICATIONS.md](SPECIFICATIONS.md)
3. **See Photos** → [GALLERY.md](GALLERY.md)
4. **Battery Version** → [LIPOBATTERY.md](LIPOBATTERY.md)

---

## 🆘 Need Help?

- Check the [Troubleshooting](#troubleshooting) section
- Review [Technical Specifications](SPECIFICATIONS.md)
- Search existing issues
- Consult component datasheets

---

<div align="center">

**Happy Building! 🎉**

[← Back to README](README.md) | [Next: Firmware Guide →](FIRMWARE.md)

</div>
