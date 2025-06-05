import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function BlogCard({ title, excerpt, slug, image, date, _id, isAdmin = false, onDelete }) {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || '/images/placeholder.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{formattedDate}</p>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <Link
            href={isAdmin ? `/admin/blog/${_id}` : `/blog/${slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {isAdmin ? 'Edit' : 'Read More'}
          </Link>
          {isAdmin && onDelete && (
            <button
              onClick={() => onDelete(_id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}