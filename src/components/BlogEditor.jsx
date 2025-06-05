import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { useState, useEffect, useRef } from 'react';

const BlogEditor = ({ content, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      setFeaturedImageUrl(URL.createObjectURL(file));
    }
  };

  // Remove selected image
  const handleRemoveImage = () => {
    setFeaturedImage(null);
    setFeaturedImageUrl('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
    immediatelyRender: false,
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-gray-950 border-2 border-gray-800 rounded-lg p-4 bg-white">
      {/* Featured Image Upload Section */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-gray-800">
          Featured Image
        </label>
        {featuredImageUrl ? (
          <div className="relative w-full max-w-xs">
            <img
              src={featuredImageUrl}
              alt="Featured"
              className="rounded-lg border border-gray-300 w-full object-cover mb-2"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <span className="text-gray-500 text-sm">No image selected</span>
          </div>
        )}
      </div>
      {/* Editor Toolbar */}
      <div className="text-gray-950 mb-4 flex gap-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`text-gray-950 px-3 py-1 rounded border border-gray-400 hover:bg-gray-200 ${
            editor?.isActive('bold') ? 'bg-gray-400' : 'bg-gray-100'
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`text-gray-950 px-3 py-1 rounded border border-gray-400 hover:bg-gray-200 ${
            editor?.isActive('italic') ? 'bg-gray-400' : 'bg-gray-100'
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`text-gray-950 px-3 py-1 rounded border border-gray-400 hover:bg-gray-200 ${
            editor?.isActive('heading', { level: 2 }) ? 'bg-gray-400' : 'bg-gray-100'
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`text-gray-950 px-3 py-1 rounded border border-gray-400 hover:bg-gray-200 ${
            editor?.isActive('bulletList') ? 'bg-gray-400' : 'bg-gray-100'
          }`}
        >
          Bullet List
        </button>
      </div>
      <EditorContent className='text-gray-950' editor={editor} />
    </div>
  );
};

export default BlogEditor;