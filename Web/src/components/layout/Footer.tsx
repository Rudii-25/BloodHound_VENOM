import { Link } from "react-router-dom";
import { Github, Twitter, MessageCircle, Heart, ExternalLink } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Build Guide", href: "/assembly" },
    { name: "Firmware", href: "/firmware" },
    { name: "Specifications", href: "/specifications" },
  ],
  resources: [
    { name: "Gallery", href: "/gallery" },
    { name: "Battery Mod", href: "/battery" },
    { name: "Contribute", href: "/contribute" },
    { name: "About", href: "/about" },
  ],
  external: [
    { name: "Arduino IDE", href: "https://www.arduino.cc/en/software", external: true },
    { name: "ESP8266 Docs", href: "https://arduino-esp8266.readthedocs.io/", external: true },
    { name: "AliExpress Parts", href: "https://www.aliexpress.com/", external: true },
    { name: "GitHub Repo", href: "https://github.com/Rudii-25/BloodHound_VENOM", external: true },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Rudii-25/BloodHound_VENOM" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="text-2xl">🩸</span>
              <span className="text-foreground">BloodHound</span>
              <span className="text-primary text-glow-red">VENOM</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              An open-source hackable handheld IoT device for makers and developers. 
              Build your own, modify it, and join the community.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">External</h4>
            <ul className="space-y-2">
              {footerLinks.external.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 BloodHound VENOM Project. Released under MIT License.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Rudra Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
