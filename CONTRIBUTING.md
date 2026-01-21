# 🤝 Contributing to BloodHound VENOM

<div align="center">

**Thank you for considering contributing to BloodHound VENOM!**

This guide helps you understand how to contribute effectively.

[← Back to README](README.md)

</div>

---

## 📖 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Types of Contributions](#types-of-contributions)
4. [Pull Request Process](#pull-request-process)
5. [Development Setup](#development-setup)
6. [Coding Standards](#coding-standards)
7. [Testing Guidelines](#testing-guidelines)
8. [Documentation](#documentation)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all contributors, regardless of:
- Age, body size, disability
- Ethnicity, gender identity and expression
- Level of experience
- Nationality, personal appearance
- Race, religion
- Sexual identity and orientation
- Or any other characteristic

### Our Standards

Examples of behavior that contributes to creating a positive environment include:
- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing opinions and experiences
- ✅ Accepting constructive criticism gracefully
- ✅ Focusing on what's best for the community
- ✅ Showing empathy towards others

Examples of unacceptable behavior include:
- ❌ Harassment of any kind
- ❌ Discrimination based on protected characteristics
- ❌ Insults or derogatory comments
- ❌ Unwelcome sexual attention or advances
- ❌ Trolling or inflammatory comments
- ❌ Other conduct unethical or unprofessional

### Enforcement

Community leaders are responsible for clarifying and enforcing standards of acceptable behavior. Inappropriate behavior may result in temporary or permanent removal from the community.

---

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:
- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ Familiarity with basic Git workflow
- ✅ Knowledge of the relevant technology area
- ✅ Time and enthusiasm!

### First Steps

1. **Fork the repository**
   - Click "Fork" on GitHub
   - Creates a copy under your account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/BloodHound_VENOM.git
   cd BloodHound_VENOM
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the guidelines below
   - Commit regularly with clear messages

5. **Test your changes**
   - Verify nothing is broken
   - Test on hardware if possible

6. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

---

## 🎯 Types of Contributions

### 🐛 Bug Reports

**Found a bug?** Great! Here's how to report it:

1. **Check existing issues** - Don't report duplicates
2. **Use the bug template** - Include all relevant info
3. **Provide examples** - Include code snippets or photos
4. **System info** - OS, Arduino IDE version, board type

**Bug Report Template:**
```markdown
# Bug Report: [Brief Description]

## Description
Clear description of what isn't working

## Steps to Reproduce
1. First step
2. Second step
3. ...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [Windows/macOS/Linux]
- Arduino IDE: [version]
- Board: [D1 Mini/etc]
- Libraries: [list versions]

## Screenshots/Logs
If applicable, attach photos or error messages

## Additional Context
Any other relevant information
```

### ✨ Feature Requests

**Have an idea?** We'd love to hear it!

1. **Check existing requests** - Avoid duplicates
2. **Use the feature template** - Structured feedback
3. **Describe the use case** - Why is this needed?
4. **Suggest implementation** - How might it work?

**Feature Request Template:**
```markdown
# Feature Request: [Brief Title]

## Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternative Solutions
Other approaches you've considered

## Additional Context
Mockups, examples, or references
```

### 📝 Documentation Improvements

Help improve our guides and examples:

- ✅ Fix typos and grammar
- ✅ Clarify confusing sections
- ✅ Add missing information
- ✅ Include code examples
- ✅ Update outdated content
- ✅ Improve formatting/structure

### 💻 Code Contributions

### Firmware Improvements

```cpp
// Example: Add a new feature
#include <NewLibrary.h>

// Implement new functionality
void newFeature() {
  // Your code here
  // Include comments
  // Follow style guide
}
```

**Guidelines:**
- Follow the [Coding Standards](#coding-standards)
- Include comments for complex logic
- Test thoroughly before submitting
- Maintain backward compatibility

### Hardware Designs

If modifying PCB or case:
- ✅ Use KiCAD for PCB changes
- ✅ Use OpenSCAD for case changes
- ✅ Export production files
- ✅ Document changes clearly
- ✅ Include assembly photos
- ✅ Update BOM if components change

### Examples & Tutorials

Share useful code examples:

```cpp
// Example: WiFi Network Scan
// Shows how to scan and display networks

#include <ESP8266WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
}

void loop() {
  int n = WiFi.scanNetworks();
  for (int i = 0; i < n; ++i) {
    Serial.println(WiFi.SSID(i));
  }
  delay(5000);
}
```

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] Fork and clone the repository
- [ ] Create a feature branch (`feature/what-you-added`)
- [ ] Make changes following guidelines
- [ ] Test your changes
- [ ] Commit with clear messages
- [ ] Push to your fork
- [ ] Check for conflicts

### PR Description Template

```markdown
## Description
Brief explanation of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Related Issues
Fixes #(issue number)

## Changes Made
- Detailed change 1
- Detailed change 2
- ...

## Testing Done
Describe tests performed

## Screenshots (if applicable)
Include any relevant images

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
- [ ] Changes are backward compatible
```

### Review Process

1. **GitHub Actions** - Automated checks run
2. **Maintainers review** - Manual review and testing
3. **Feedback** - May request changes
4. **Approval** - Once approved, merged
5. **Celebration** 🎉 - Your contribution is live!

---

## 💻 Development Setup

### Arduino IDE Setup

```bash
# 1. Install Arduino IDE
# https://www.arduino.cc/en/software

# 2. Add ESP8266 board
# File > Preferences > Additional Boards Manager URLs:
# https://arduino.esp8266.com/stable/package_esp8266com_index.json

# 3. Install ESP8266 package
# Tools > Board > Boards Manager > esp8266

# 4. Select D1 Mini board
# Tools > Board > LOLIN(WEMOS) D1 Mini (ESP8266)
```

### Required Libraries

```bash
# Install via Arduino IDE Library Manager:
# Adafruit_SSD1306
# Adafruit_GFX_Library
# Adafruit_NeoPixel
# ArduinoJson
```

### Hardware for Testing

- D1 Mini ESP8266 board
- USB cable for programming
- Breadboard (optional)
- Multimeter for testing

---

## 📐 Coding Standards

### C++ Code Style

```cpp
// 1. Use consistent indentation (2 spaces)
void setup() {
  Serial.begin(115200);
  
  if (condition) {
    doSomething();
  }
}

// 2. Use clear variable names
int buttonCount = 6;  // Good
int bc = 6;           // Bad

// 3. Add meaningful comments
// Calculate battery voltage from ADC reading
float voltage = (analogRead(A0) / 1024.0) * 3.3;

// 4. Keep functions small and focused
void handleButtonPress() {
  // Do one thing well
}

// 5. Use const for constants
const int OLED_ADDRESS = 0x3C;
const char* SSID = "MyNetwork";

// 6. Follow Arduino conventions
void setup() { }      // Always include
void loop() { }       // Main loop

// 7. Use proper naming conventions
void initializeDisplay();    // Functions: camelCase
int CONSTANT_VALUE = 100;   // Constants: UPPER_SNAKE_CASE
int localVariable = 5;      // Variables: camelCase
```

### Documentation Comments

```cpp
/**
 * Brief description of function
 * 
 * Longer description if needed. Explain what it does
 * and why it exists.
 * 
 * @param param1 Description of parameter
 * @param param2 Description of parameter
 * @return Description of return value
 * 
 * @example
 * myFunction(10, 20);  // Returns 30
 */
int myFunction(int param1, int param2) {
  return param1 + param2;
}
```

---

## 🧪 Testing Guidelines

### Before Submission

- ✅ Compile without errors
- ✅ Compile without warnings
- ✅ Upload to D1 Mini successfully
- ✅ Test all modified features
- ✅ Check for memory issues
- ✅ Verify serial output

### Testing Checklist

```cpp
// Test your code with:
void testFeature() {
  Serial.println("Testing: Button Input");
  
  // Test normal case
  digitalWrite(BUTTON_PIN, LOW);
  delay(20);
  assert(buttonPressed == true);
  
  // Test edge case
  digitalWrite(BUTTON_PIN, HIGH);
  delay(20);
  assert(buttonPressed == false);
  
  Serial.println("✓ Button test passed");
}
```

### Hardware Testing

1. **Upload & monitor serial output**
2. **Test each component individually**
3. **Test all features together**
4. **Check power consumption**
5. **Verify in different conditions**

---

## 📚 Documentation

### Writing Documentation

**Clear documentation is important!**

Guidelines:
- ✅ Use markdown format
- ✅ Include code examples
- ✅ Add diagrams/ASCII art where helpful
- ✅ Link to related sections
- ✅ Update table of contents
- ✅ Check spelling and grammar

### Code Examples

```cpp
// Good example: Clear, commented, runnable
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire);

void setup() {
  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("Display init failed!");
    while (1);
  }
  
  display.clearDisplay();
  display.println("Hello!");
  display.display();
}

void loop() {
  delay(1000);
}
```

---

## 🎓 Learning Resources

### For Hardware Development

- [KiCAD Official Docs](https://docs.kicad.org/)
- [Eagle Schematic Tutorial](https://learn.sparkfun.com/)
- [PCB Design Guide](https://www.pcbway.com/blog/)

### For Firmware Development

- [Arduino Language Reference](https://www.arduino.cc/reference/)
- [ESP8266 Arduino Documentation](https://arduino-esp8266.readthedocs.io/)
- [C++ Best Practices](https://isocpp.org/wiki/faq)

### For Soldering & Assembly

- [Soldering Tutorial](https://learn.adafruit.com/adafruit-guide-excellent-soldering)
- [Component Identification](https://www.electronics-tutorials.ws/)
- [PCB Assembly Guide](https://www.sparkfun.com/)

---

## ❓ Questions?

### Getting Help

- **GitHub Issues** - Search and create issues
- **Discussions** - General questions
- **Discord/Community** - Real-time chat
- **Maintainers** - DM for urgent questions

### Resources

- [README](README.md) - Project overview
- [ASSEMBLY.md](ASSEMBLY.md) - Building guide
- [FIRMWARE.md](FIRMWARE.md) - Programming guide
- [SPECIFICATIONS.md](SPECIFICATIONS.md) - Technical details

---

## 🏆 Recognition

Contributors are valued members of our community! Your efforts help:
- ✅ Improve the project for everyone
- ✅ Help other makers learn
- ✅ Advance open-source hardware
- ✅ Build something great together

**All significant contributors will be:**
- Listed in project README
- Mentioned in release notes
- Part of the BloodHound community
- Forever recognized in project history

---

## 📋 Contribution Ideas

### Easy First Contributions

Great for first-time contributors:
- [ ] Fix typos in documentation
- [ ] Add code comments
- [ ] Improve existing examples
- [ ] Update diagrams or ASCII art
- [ ] Add translations

### Medium Contributions

More involved work:
- [ ] Write new tutorial
- [ ] Create example sketch
- [ ] Improve library compatibility
- [ ] Add test cases
- [ ] Document troubleshooting

### Advanced Contributions

Complex improvements:
- [ ] Design hardware variant
- [ ] Rewrite library code
- [ ] Optimize performance
- [ ] Add WiFi security
- [ ] Create mobile app integration

---

## 🚀 Your First Contribution

### Step-by-Step

```bash
# 1. Fork the repo (GitHub web interface)

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/BloodHound_VENOM.git
cd BloodHound_VENOM

# 3. Create branch
git checkout -b fix/typo-in-readme

# 4. Make changes
# Edit files as needed
# Example: Fix typo in README.md

# 5. Commit changes
git add README.md
git commit -m "Fix: Typo in assembly section"

# 6. Push to fork
git push origin fix/typo-in-readme

# 7. Open Pull Request
# Visit GitHub, click "Compare & pull request"
# Describe your changes
# Submit!
```

### Common First PR Messages

Good commit messages:
- ✅ "Fix: Typo in ASSEMBLY.md"
- ✅ "Docs: Add battery troubleshooting section"
- ✅ "Example: Add button input sketch"
- ✅ "Improve: Better error handling"

Bad commit messages:
- ❌ "Update"
- ❌ "Fix stuff"
- ❌ "asdfghjkl"
- ❌ "WIP"

---

<div align="center">

### Thank You! 🙏

**Your contributions help make BloodHound VENOM amazing!**

Whether it's code, documentation, bug reports, or ideas—
every contribution counts and is deeply appreciated.

---

[← Back to README](README.md)

**Happy Contributing! 🚀**

</div>
