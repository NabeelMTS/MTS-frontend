import BlogCard from '@/app/components/Blog/BlogCard';

export const metadata = {
  title: 'Blog - MedicoTech Solutions',
  description: 'Read our latest articles on medical billing, coding, and healthcare IT solutions.',
};

async function getBlogs() {  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  
  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">INSIGHTS</h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">MedicoTech Blog</h3>
          <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Stay updated with the latest trends in medical billing, coding, and healthcare IT.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              excerpt={blog.excerpt}
              slug={blog.slug}
              image={blog.image}
              date={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}