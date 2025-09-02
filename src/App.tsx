import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SaudeIntestinalMicrobioma from "./pages/SaudeIntestinalMicrobioma";
import JejumIntermitenteGuia from "./pages/JejumIntermitenteGuia";
import NutricaoPersonalizada from "./pages/NutricaoPersonalizada";
import FibremaxxingTendencia from "./pages/FibremaxxingTendencia";
import TelemedicinaVirtual from "./pages/TelemedicinaVirtual";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/saude-intestinal-microbioma" element={<SaudeIntestinalMicrobioma />} />
          <Route path="/jejum-intermitente-guia-completo" element={<JejumIntermitenteGuia />} />
          <Route path="/nutricao-personalizada" element={<NutricaoPersonalizada />} />
          <Route path="/fibremaxxing-tendencia" element={<FibremaxxingTendencia />} />
          <Route path="/telemedicina-virtual" element={<TelemedicinaVirtual />} />
          
          {/* Category pages */}
          <Route path="/saude-intestinal" element={<Index />} />
          <Route path="/emagrecimento" element={<Index />} />
          <Route path="/suplementos" element={<Index />} />
          <Route path="/artigos" element={<Index />} />
          <Route path="/longevidade" element={<Index />} />
          <Route path="/fitness-virtual" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
