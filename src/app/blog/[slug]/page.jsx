import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`);
  const blogs = await res.json();
  const blog = blogs.find((b) => b.slug === params.slug);

  return {
    title: `${blog?.title || 'Blog Post'} - MedicoTech Solutions`,
    description: blog?.excerpt || 'Read our latest blog post',
  };
}

async function getBlog(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`);
  const blogs = await res.json();
  return blogs.find((blog) => blog.slug === slug);
}

export default async function BlogPost({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{blog.title}</h1>
            <div className="text-gray-500 text-sm">
              Published on {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          
          {blog.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div 
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </div>
  );
}