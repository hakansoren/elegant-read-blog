
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ThemeToggle from './ThemeToggle';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Interpretability Matters',
    author: 'Your Name',
    date: 'June 2025',
    excerpt: 'In an era where artificial intelligence systems are becoming increasingly sophisticated and ubiquitous, the question of interpretability has moved from academic curiosity to critical necessity.',
    readTime: '8 min read',
    slug: 'why-interpretability-matters'
  }
];

const BlogHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blog-bg text-blog-text">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-blog-text">
            Personal Blog
          </h1>
          <p className="text-xl text-blog-text-secondary font-sans max-w-2xl mx-auto leading-relaxed">
            Thoughts on technology, AI, and the future of human-machine interaction
          </p>
        </header>

        {/* Blog Posts Grid */}
        <main className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="bg-blog-bg border-blog-border hover:border-blog-accent/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-blog-text-secondary font-sans mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-blog-border">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <span className="text-blog-border">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-blog-text group-hover:text-blog-accent transition-colors duration-200 mb-4">
                  {post.title}
                </h2>
                
                <p className="text-lg text-blog-text-secondary leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Link 
                  to={`/post/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blog-accent hover:text-blog-accent/80 font-sans font-medium transition-colors duration-200 group/link"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-24 text-center text-blog-text-secondary font-sans">
          <p>&copy; 2025 Personal Blog. All rights reserved.</p>
        </footer>
      </div>
      
      <ThemeToggle />
    </div>
  );
};

export default BlogHomepage;
