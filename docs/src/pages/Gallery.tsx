import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image, X, ZoomIn, Filter } from "lucide-react";

// Gallery images with categories
const galleryImages = [
  { id: 1, category: "components", title: "Components Overview", desc: "All parts laid out for assembly" },
  { id: 2, category: "components", title: "Parts Detail", desc: "Close-up of all electronic components" },
  { id: 3, category: "tools", title: "Required Tools", desc: "Soldering tools and equipment" },
  { id: 4, category: "assembly", title: "OLED Pinout", desc: "OLED display pin configuration" },
  { id: 5, category: "final", title: "Working Device", desc: "Completed BloodHound VENOM in action" },
  { id: 6, category: "battery", title: "Battery Mod Overview", desc: "LiPo battery modification layout" },
  { id: 7, category: "battery", title: "Battery Step 1", desc: "First step of battery installation" },
  { id: 8, category: "battery", title: "Battery Detail", desc: "Detailed view of battery connections" },
  { id: 9, category: "battery", title: "Advanced Wiring", desc: "Advanced battery wiring configuration" },
  { id: 10, category: "battery", title: "Battery in Case", desc: "Battery fitted inside the case" },
  { id: 11, category: "battery", title: "Battery PCB", desc: "TP4056 charging module installation" },
  { id: 12, category: "battery", title: "Wire Soldering", desc: "Soldering battery wires" },
  { id: 13, category: "battery", title: "Complete Build", desc: "Finished battery-powered device" },
  { id: 14, category: "comparison", title: "Size Comparison", desc: "With and without battery comparison" },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "components", label: "Components" },
  { id: "tools", label: "Tools" },
  { id: "assembly", label: "Assembly" },
  { id: "final", label: "Final Device" },
  { id: "battery", label: "Battery Mod" },
  { id: "comparison", label: "Comparison" },
];

// Generate placeholder colors for demo
const getPlaceholderColor = (id: number) => {
  const colors = [
    "from-primary/30 to-secondary/30",
    "from-secondary/30 to-primary/30",
    "from-primary/40 to-muted",
    "from-muted to-secondary/40",
  ];
  return colors[id % colors.length];
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-gradient-hero min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Image className="w-4 h-4" />
              Photo Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              📸 Build <span className="text-primary text-glow-red">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visual documentation of the build process, components, and final device.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "hero" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.id === "all" && <Filter className="w-4 h-4" />}
                {cat.label}
              </Button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-lift"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Placeholder gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderColor(image.id)} flex items-center justify-center`}>
                    <div className="text-center p-4">
                      <Image className="w-12 h-12 text-foreground/30 mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 font-medium">{image.title}</p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4">
                      <ZoomIn className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">{image.title}</p>
                      <p className="text-xs text-muted-foreground">{image.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox Modal */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 bg-card border-border">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                
                {selectedImage && (
                  <div>
                    <div className={`aspect-video bg-gradient-to-br ${getPlaceholderColor(selectedImage.id)} flex items-center justify-center`}>
                      <div className="text-center">
                        <Image className="w-24 h-24 text-foreground/30 mx-auto mb-4" />
                        <p className="text-lg text-foreground/50 font-medium">{selectedImage.title}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                      <p className="text-muted-foreground">{selectedImage.desc}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full capitalize">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="card-glow p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Share Your Build</h3>
              <p className="text-muted-foreground mb-6">
                Built your own BloodHound VENOM? We'd love to see it! 
                Share your project photos with the community.
              </p>
              <Button variant="hero" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Submit Your Photos
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
