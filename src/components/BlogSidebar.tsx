
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Section {
  id: string;
  title: string;
}

interface BlogSidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-6 z-50 bg-blog-bg/80 backdrop-blur-sm border border-blog-border hover:bg-blog-border/50 transition-all duration-200"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-blog-text" />
          ) : (
            <Menu className="h-5 w-5 text-blog-text" />
          )}
        </Button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-auto
          w-80 lg:w-72 xl:w-80
          bg-blog-bg/95 lg:bg-transparent
          backdrop-blur-sm lg:backdrop-blur-none
          border-r border-blog-border lg:border-r-0
          z-50 lg:z-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          ${isMobile ? 'pt-20' : 'pt-8'}
        `}
      >
        <div className="p-6 lg:p-8">
          <h2 className="font-sans font-semibold text-xl text-white mb-6">
            Contents
          </h2>
          
          <nav className="space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`
                  block w-full text-left px-4 py-3 rounded-lg
                  font-sans text-sm transition-all duration-200
                  ${activeSection === section.id
                    ? 'bg-blog-accent/20 text-blog-accent font-medium border-l-3 border-blog-accent'
                    : 'text-blog-text-secondary hover:text-blog-text hover:bg-blog-border/30'
                  }
                `}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
