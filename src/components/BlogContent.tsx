
import React from 'react';

interface BlogPost {
  title: string;
  author: string;
  date: string;
  sections: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
}

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
    <main className="flex-1 lg:ml-8 xl:ml-12">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="blog-prose">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blog-text-secondary font-sans">
            <span className="text-lg">By {post.author}</span>
            <span className="hidden sm:block text-blog-border">•</span>
            <time className="text-lg" dateTime={post.date}>
              {post.date}
            </time>
          </div>
        </header>

        {/* Content */}
        <div className="blog-prose animate-fade-in">
          {post.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 scroll-mt-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};

export default BlogContent;
