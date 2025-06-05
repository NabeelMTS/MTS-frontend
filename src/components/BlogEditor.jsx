import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { useState, useEffect, useRef, useCallback } from 'react';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const url = window.prompt('Enter the URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  return (
    <div className="border-b border-gray-200 p-4 flex flex-wrap gap-2 bg-white rounded-t-lg">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`editor-btn ${
          editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`editor-btn ${
          editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`editor-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`editor-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`editor-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`editor-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
      >
        Quote
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
      >
        Ordered List
      </button>
      <button
        onClick={setLink}
        className={`editor-btn ${editor.isActive('link') ? 'is-active' : ''}`}
      >
        Link
      </button>
      <button onClick={addImage} className="editor-btn">
        Image
      </button>
    </div>
  );
};

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
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write your blog post here...',
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
      <MenuBar editor={editor} />
      <EditorContent className='text-gray-950' editor={editor} />
      <style jsx global>{`
        .editor-btn {
          @apply px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
        }
        .editor-btn.is-active {
          @apply bg-gray-100 text-gray-900;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror {
          > * + * {
            margin-top: 0.75em;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogEditor;