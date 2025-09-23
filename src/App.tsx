import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CreditCooperativeRegistration from "./pages/CreditCooperativeRegistration";
import MultiStateCooperativeRegistration from "./pages/MultiStateCooperativeRegistration";
import MicrofinanceRegistration from "./pages/MicrofinanceRegistration";
import OtherCooperativeRegistration from "./pages/OtherCooperativeRegistration";

// Audit & Compliance Pages
import CreditCooperativeAudit from "./pages/CreditCooperativeAudit";
import MultiStateAudit from "./pages/MultiStateAudit";
import MicrofinanceAudit from "./pages/MicrofinanceAudit";
import OtherCooperativeAudit from "./pages/OtherCooperativeAudit";

// Business Consultancy Pages
import BankingConsultancy from "./pages/BankingConsultancy";
import BankingBusinessSetup from "./pages/BankingBusinessSetup";
import BankingBusinessGrowth from "./pages/BankingBusinessGrowth";

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
          <Route path="/credit-cooperative-registration" element={<CreditCooperativeRegistration />} />
          <Route path="/multi-state-cooperative-registration" element={<MultiStateCooperativeRegistration />} />
          <Route path="/microfinance-registration" element={<MicrofinanceRegistration />} />
          <Route path="/other-cooperative-registration" element={<OtherCooperativeRegistration />} />
          
          {/* Audit & Compliance Routes */}
          <Route path="/credit-cooperative-audit" element={<CreditCooperativeAudit />} />
          <Route path="/multi-state-audit" element={<MultiStateAudit />} />
          <Route path="/microfinance-audit" element={<MicrofinanceAudit />} />
          <Route path="/other-cooperative-audit" element={<OtherCooperativeAudit />} />
          
          {/* Business Consultancy Routes */}
          <Route path="/banking-consultancy" element={<BankingConsultancy />} />
          <Route path="/banking-business-setup" element={<BankingBusinessSetup />} />
          <Route path="/banking-business-growth" element={<BankingBusinessGrowth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
