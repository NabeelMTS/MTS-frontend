import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, excerpt, slug, image, date }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 relative">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{new Date(date).toLocaleDateString()}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}