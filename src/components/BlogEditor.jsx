import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { useState, useEffect } from 'react';

const BlogEditor = ({ content, onChange }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="border rounded-lg p-4">
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${editor?.isActive('bold') ? 'bg-gray-200' : 'bg-gray-100'}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${editor?.isActive('italic') ? 'bg-gray-200' : 'bg-gray-100'}`}
        >
          Italic
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'bg-gray-100'}`}
        >
          H2
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded ${editor?.isActive('bulletList') ? 'bg-gray-200' : 'bg-gray-100'}`}
        >
          Bullet List
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default BlogEditor; 