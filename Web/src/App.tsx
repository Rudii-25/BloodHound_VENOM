import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assembly from "./pages/Assembly";
import Firmware from "./pages/Firmware";
import Specifications from "./pages/Specifications";
import Gallery from "./pages/Gallery";
import Battery from "./pages/Battery";
import Contribute from "./pages/Contribute";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assembly" element={<Assembly />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/specifications" element={<Specifications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/battery" element={<Battery />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
