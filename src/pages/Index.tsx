
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogHomepage from '@/components/BlogHomepage';

const Index = () => {
  return (
    <ThemeProvider>
      <BlogHomepage />
    </ThemeProvider>
  );
};

export default Index;
