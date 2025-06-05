import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { useState, useEffect, useCallback } from 'react';

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

const BlogEditor = ({ content, onContentChange }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
          HTMLAttributes: {
            class: 'font-bold',
          },
        },
        bold: {
          HTMLAttributes: {
            class: 'font-bold',
          },
        },
        italic: {
          HTMLAttributes: {
            class: 'italic',
          },
        },
        strike: {
          HTMLAttributes: {
            class: 'line-through',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc list-inside',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal list-inside',
          },
        },
        listItem: {
          HTMLAttributes: {
            class: 'my-2',
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: 'border-l-4 border-gray-300 pl-4 my-4 italic',
          },
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg my-4',
        },
      }),
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
      const html = editor.getHTML();
      onContentChange(html);
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none max-w-none',
      },
    },
    immediatelyRender: false, // Add this to fix SSR warning
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-gray-950 border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
      <MenuBar editor={editor} />
      <div className="prose prose-slate max-w-none w-full min-h-[300px]">
        <EditorContent editor={editor} className="min-h-[300px] p-4" />
      </div>
      <style jsx global>{`
        .editor-btn {
          @apply px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
        }
        .editor-btn.is-active {
          @apply bg-gray-100 text-gray-900 border-blue-500;
        }
        .ProseMirror {
          @apply outline-none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          @apply text-gray-400 float-left pointer-events-none h-0;
        }
        .ProseMirror h1 {
          @apply text-3xl font-bold mb-4 mt-6;
        }
        .ProseMirror h2 {
          @apply text-2xl font-bold mb-3 mt-5;
        }
        .ProseMirror ul {
          @apply list-disc list-inside my-4;
        }
        .ProseMirror ol {
          @apply list-decimal list-inside my-4;
        }
        .ProseMirror li {
          @apply my-2;
        }
        .ProseMirror blockquote {
          @apply border-l-4 border-gray-300 pl-4 my-4 italic;
        }
        .ProseMirror img {
          @apply max-w-full h-auto rounded-lg my-4;
        }
        .ProseMirror a {
          @apply text-blue-600 hover:text-blue-800 underline;
        }
        .ProseMirror strong {
          @apply font-bold;
        }
        .ProseMirror em {
          @apply italic;
        }
        .ProseMirror p {
          @apply my-2;
        }
      `}</style>
    </div>
  );
};

export default BlogEditor;