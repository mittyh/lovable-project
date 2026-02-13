import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import CathayCaseStudy from "./pages/CathayCaseStudy";
import CubeCaseStudy from "./pages/CubeCaseStudy";
import NewOTCCaseStudy from "./pages/NewOTCCaseStudy";
import KKdayCaseStudy from "./pages/KKdayCaseStudy";
import OurCityLoveCaseStudy from "./pages/OurCityLoveCaseStudy";
import TaipeiMHealthCaseStudy from "./pages/TaipeiMHealthCaseStudy";
import KVBPrimeCaseStudy from "./pages/KVBPrimeCaseStudy";
import OneCarCaseStudy from "./pages/OneCarCaseStudy";
import TripgineCaseStudy from "./pages/TripgineCaseStudy";
import RoundTaiwanRoundCaseStudy from "./pages/RoundTaiwanRoundCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/cathay-bank-app" element={<CathayCaseStudy />} />
          <Route path="/case-study/cube-bank-app" element={<CubeCaseStudy />} />
          <Route path="/case-study/newotc-crypto" element={<NewOTCCaseStudy />} />
          <Route path="/case-study/kkday-airline" element={<KKdayCaseStudy />} />
          <Route path="/case-study/our-city-love" element={<OurCityLoveCaseStudy />} />
          <Route path="/case-study/taipei-mhealth" element={<TaipeiMHealthCaseStudy />} />
          <Route path="/case-study/kvb-prime" element={<KVBPrimeCaseStudy />} />
          <Route path="/case-study/onecar-mvp" element={<OneCarCaseStudy />} />
          <Route path="/case-study/tripgine-b2b" element={<TripgineCaseStudy />} />
          <Route path="/case-study/round-taiwan-round" element={<RoundTaiwanRoundCaseStudy />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
