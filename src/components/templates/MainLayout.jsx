"use client";
import { useState, useEffect } from "react";
import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const MainLayout = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <div className="h-screen w-full flex bg-gray-100 overflow-hidden">
    
      <div className="h-full overflow-y-auto no-scrollbar">
        <Sidebar
          isOpen={drawerOpen}
          isMobile
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col h-full">
      
        <Header
          title={title}
          onMenuClick={() => setDrawerOpen(true)}
        />
        <div className="flex-1 overflow-y-auto flex flex-col">
          
          <main className="flex-1 p-4 md:px-6 lg:px-8">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;