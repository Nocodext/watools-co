
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Features } from "@/components/sections/Features";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Hero />
      <ProblemSolution />
      <ValueProposition />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
