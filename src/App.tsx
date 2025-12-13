import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Careers from "./pages/Careers";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Beta from "./pages/Beta";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/PrivacyPolicy";
import DrivingGuide from "./pages/legal/DrivingGuide";
import ZeroTolerance from "./pages/legal/ZeroTolerance";
import CommunityStandards from "./pages/legal/CommunityStandards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/riders" element={<HowItWorks />} />
          <Route path="/drivers" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/driving-guide" element={<DrivingGuide />} />
          <Route path="/legal/zero-tolerance" element={<ZeroTolerance />} />
          <Route path="/legal/community-standards" element={<CommunityStandards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
