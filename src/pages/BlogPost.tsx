
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogLayout from '@/components/BlogLayout';
import { Button } from '@/components/ui/button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Şu anda sadece bir yazımız var, gelecekte burada slug'a göre yazı bulma mantığı olacak
  if (slug !== 'why-interpretability-matters') {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-blog-bg text-blog-text flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Post Not Found</h1>
            <p className="text-blog-text-secondary mb-8 font-sans">The blog post you're looking for doesn't exist.</p>
            <Link to="/">
              <Button variant="ghost" className="text-blog-accent hover:text-blog-accent/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-blog-bg">
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-blog-text-secondary hover:text-blog-text transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <BlogLayout />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
