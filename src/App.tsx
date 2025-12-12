import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Riders from "./pages/Riders";
import Drivers from "./pages/Drivers";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Beta from "./pages/Beta";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/PrivacyPolicy";
import DrivingGuide from "./pages/legal/DrivingGuide";
import ZeroTolerance from "./pages/legal/ZeroTolerance";
import CommunityStandards from "./pages/legal/CommunityStandards";
import PrivacyChoices from "./pages/legal/PrivacyChoices";
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
          <Route path="/about" element={<About />} />
          <Route path="/riders" element={<Riders />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/driving-guide" element={<DrivingGuide />} />
          <Route path="/legal/zero-tolerance" element={<ZeroTolerance />} />
          <Route path="/legal/community-standards" element={<CommunityStandards />} />
          <Route path="/legal/privacy-choices" element={<PrivacyChoices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
