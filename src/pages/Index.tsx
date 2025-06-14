
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogLayout from '@/components/BlogLayout';

const Index = () => {
  return (
    <ThemeProvider>
      <BlogLayout />
    </ThemeProvider>
  );
};

export default Index;
