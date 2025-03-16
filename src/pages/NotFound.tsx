
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-24 pb-16 min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-2xl text-gray-300 mb-8">Oops! This page doesn't exist.</p>
          <Link to="/">
            <Button className="bg-optimize-blue hover:bg-optimize-blue/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
