import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Oops! The page you&#39;re looking for is under construction or doesn&#39;t exist.
      </p>
      <Link href="/home" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}
