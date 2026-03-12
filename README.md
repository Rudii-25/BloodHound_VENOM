# 🩸 BloodHound VENOM

<div align="center">

![BloodHound VENOM](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-ESP8266-orange?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)

**An open-source hackable handheld device for DIY enthusiasts and developers**

[🚀 Quick Start](#quick-start) • [📖 Docs](#documentation) • [⚙️ Specs](#hardware-specifications) • [🖼️ Gallery](GALLERY.md) • [📄 License](LICENSE)

</div>

---

## 🎯 Overview

BloodHound VENOM is a compact, programmable handheld device powered by the **ESP8266** microcontroller. Perfect for IoT projects, security testing, network monitoring, and creative hardware hacking.

### ✨ Key Features

| Feature | Details |
|---------|---------|
| 🎮 **6 Button Input** | Tactile 6x6mm push buttons for intuitive control |
| 📡 **WiFi Connectivity** | Full ESP8266 WiFi capabilities (2.4GHz) |
| 🎨 **OLED Display** | 1.3" 128x64 I2C OLED screen for UI/feedback |
| 💡 **RGB LED** | WS2812B addressable RGB LED for status indication |
| 🔋 **Multiple Power Options** | Standard USB or optional LiPo battery variant |
| 🏠 **3D Printable Case** | OpenSCAD parametric case design |
| 📝 **Open Source** | Fully customizable firmware and hardware |

---

## 📚 Documentation Hub

Quick access to all guides and resources:

```
📦 BloodHound VENOM Documentation
├── 🚀 README.md ...................... (you are here)
├── 🛠️ ASSEMBLY.md ................... Step-by-step assembly
├── 💻 FIRMWARE.md ................... Coding guide & examples
├── ⚙️ SPECIFICATIONS.md ............. Technical pinouts & specs
├── 📸 GALLERY.md .................... Build photos & showcase
├── 🔋 LIPOBATTERY.md ............... Battery variant guide
└── 📄 LICENSE ....................... MIT License
```

### 👇 Start Here

- **[🛠️ Assembly Guide](ASSEMBLY.md)** - How to build and solder everything
- **[💻 Firmware Guide](FIRMWARE.md)** - Program your device with examples
- **[⚙️ Technical Specs](SPECIFICATIONS.md)** - Pin configuration & schematics
- **[📸 Photo Gallery](GALLERY.md)** - Build process and showcase photos
- **[🔋 LiPo Battery Guide](LIPOBATTERY.md)** - Battery-powered variant

---

## 🚀 Quick Start

### 1️⃣ Get Your Components
See the [Bill of Materials](ASSEMBLY.md#bill-of-materials) for all parts needed (~$20-30).

### 2️⃣ Assemble
Follow the [Assembly Guide](ASSEMBLY.md) for detailed step-by-step instructions.

### 3️⃣ Upload Firmware
Check [Firmware Setup](FIRMWARE.md) to program your device.

### 4️⃣ Start Hacking!
Use the provided examples or write your own Arduino sketches.

---

## 🔌 Hardware Specifications

| Component | Model | Details |
|-----------|-------|---------|
| 🧠 **Microcontroller** | ESP8266 (D1 Mini) | 160MHz, 80KB RAM, WiFi |
| 📺 **Display** | 1.3" SH1106 OLED | 128x64 pixels, I2C interface |
| 💡 **LED** | WS2812B RGB | Addressable, 5050 SMD |
| 🔘 **Buttons** | 6x6mm Tactile | 6x switches, through-hole |
| ⚡ **Power** | USB Micro or LiPo | See [LiPo Variant](LIPOBATTERY.md) |

**Full specifications:** [⚙️ SPECIFICATIONS.md](SPECIFICATIONS.md)

---

## 📂 Project Structure

```
BloodHound_VENOM/
├── 📄 BloodHound_VENOM.kicad_sch      # KiCAD Schematic
├── 📋 BloodHound_VENOM.kicad_pcb      # PCB Layout
├── 🎨 BloodHound_VENOM_Case/
│   └── BloodHound_VENOM_Case.scad    # 3D Case (OpenSCAD)
├── 🔵 BloodHound_VENOM_Gerber/       # Manufacturing Gerber Files
├── 🔋 LiPo_Battery_Version_PCB/      # Battery Variant PCB
├── 📸 Photos/                         # Build Documentation
├── 🔤 Symbols/                        # KiCAD Symbols
├── 📚 Documentation/
│   ├── README.md
│   ├── ASSEMBLY.md
│   ├── FIRMWARE.md
│   ├── SPECIFICATIONS.md
│   ├── GALLERY.md
│   ├── LIPOBATTERY.md
│   └── LICENSE
└── 📊 BOM Files
    ├── BOM.csv
    ├── positions.csv
    └── LiPo_BOM.html
```

---

## 🎨 Gallery Preview

<div align="center">

**Device Showcase & Build Process**

| View | Status |
|------|--------|
| **Main Device** | ✅ Complete |
| **Battery Variant** | ✅ Available |
| **Case Design** | ✅ 3D Printable |
| **Components** | ✅ Verified |

**[📸 See Full Gallery with Photos →](GALLERY.md)**

</div>

---

## 💡 Use Cases

✅ Network Security Testing  
✅ IoT Development Platform  
✅ WiFi Signal Analysis  
✅ Custom Firmware Projects  
✅ Educational Hardware Platform  
✅ Conference Badges  
✅ Portable Development Tool  
✅ Proof-of-Concept Testing  

---

## 🔧 What You'll Learn

By building BloodHound VENOM, you'll gain experience with:

- 🔌 **Electronics & Soldering** - PCB assembly and component soldering
- 💻 **Embedded Programming** - C++ with Arduino IDE
- 📡 **WiFi & Networking** - ESP8266 WiFi capabilities
- 🎨 **Hardware Design** - KiCAD PCB design files
- 🖨️ **3D Printing** - Case design and printing
- 🔍 **Debugging** - Serial communication and troubleshooting

---

## 📋 Getting Started Steps

1. **Read** → [ASSEMBLY.md](ASSEMBLY.md) for complete parts list
2. **Buy** → Components from [Bill of Materials](ASSEMBLY.md#bill-of-materials)
3. **Print** → 3D case from [Case Files](BloodHound_VENOM_Case/)
4. **Solder** → Follow [Assembly Guide](ASSEMBLY.md) carefully
5. **Program** → See [FIRMWARE.md](FIRMWARE.md) for setup
6. **Customize** → Write your own firmware or use examples

---

## 🔧 Tools & Skills Required

| Skill | Level | Resource |
|-------|-------|----------|
| **Soldering** | Beginner+ | [ASSEMBLY.md](ASSEMBLY.md#soldering-basics) |
| **3D Printing** | Basic | [ASSEMBLY.md](ASSEMBLY.md#3d-printing) |
| **Programming (C/Arduino)** | Beginner | [FIRMWARE.md](FIRMWARE.md) |
| **PCB Assembly** | Beginner+ | [ASSEMBLY.md](ASSEMBLY.md) |

---

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| **PCB Size** | ~67mm × 50mm |
| **Case Size** | ~70mm × 55mm × 12mm |
| **Component Count** | 11 components |
| **Board Layers** | 2-layer PCB |
| **Build Time** | 2-3 hours |
| **Est. Cost** | $20-30 USD |
| **Power Draw** | ~150-200mA (WiFi) |
| **Battery Life** | 4-6 hours (LiPo 1000mAh) |

---

## 🌟 Features Comparison

### Standard USB Version vs LiPo Battery Version

| Feature | USB | LiPo |
|---------|-----|------|
| **Power Input** | Micro USB | USB-C + LiPo |
| **Charging** | Via USB | TP4056 charger |
| **Portability** | Requires cable | Fully wireless |
| **Form Factor** | Compact | Slightly thicker |
| **Cost** | Lower | Higher |
| **Recommended Use** | Testing/dev | Field use |

See [LIPOBATTERY.md](LIPOBATTERY.md) for detailed battery version guide.

---

## 🤝 Contributing

We welcome contributions! You can help with:

- 🐛 **Bug Reports** - Found an issue? Let us know
- ✨ **Feature Ideas** - Suggest improvements
- 📝 **Documentation** - Improve guides and comments
- 🎨 **Hardware Mods** - Design variations
- 💻 **Firmware Examples** - Share cool code snippets
- 🌍 **Translations** - Make docs available in other languages

**How to Contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-thing`)
3. Commit changes (`git commit -m 'Add amazing thing'`)
4. Push to branch (`git push origin feature/amazing-thing`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for full details.

**You can:**
- ✅ Use for personal/commercial projects
- ✅ Modify and redistribute
- ✅ Use in closed-source projects

**You must:**
- ℹ️ Include license and copyright notice

---

## 🆘 Support & Community

- 🐛 **Issues** - Report bugs or suggest features
- 💬 **Discussions** - General questions and ideas
- 📧 **Questions** - Check existing issues first
- 🌐 **Community** - Share your builds and projects

---

## 🙏 Acknowledgments

Built with ❤️ for makers, hackers, and IoT enthusiasts everywhere.

**Special thanks to:**
- Wemos/Lolin for the D1 Mini platform
- Adafruit for excellent libraries
- The Arduino community for amazing resources
- All contributors and builders

---

## 📡 Specifications Summary

```
┌─────────────────────────────────┐
│   BloodHound VENOM - Summary    │
├─────────────────────────────────┤
│ CPU: ESP8266 @ 160MHz           │
│ RAM: 160KB (80KB usable)        │
│ Flash: 4MB                      │
│ WiFi: 802.11 b/g/n 2.4GHz      │
│ Display: 1.3" OLED 128×64      │
│ I/O: 6 buttons + 1 RGB LED     │
│ Power: USB 5V or LiPo 3.7V     │
│ Size: 67×50×10mm (PCB)          │
│ Weight: ~15g                    │
└─────────────────────────────────┘
```

---

<div align="center">

### 🚀 Ready to Build?

**[Start with Assembly Guide →](ASSEMBLY.md)**

---

**Made with ❤️ by [Rudra Sharma](http://rudrasharma.tech/)**

⭐ Star this repository if you find it useful!

[📖 Full Docs](README.md) • [🛠️ Assembly](ASSEMBLY.md) • [💻 Firmware](FIRMWARE.md) • [📸 Gallery](GALLERY.md) • [⚙️ Specs](SPECIFICATIONS.md) • [🔋 LiPo](LIPOBATTERY.md) • [📄 License](LICENSE)

</div>
