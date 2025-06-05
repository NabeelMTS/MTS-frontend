'use client';

import { useState, useCallback, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Dropzone } from './Dropzone';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';

export function BlogEditor({ content = '', onContentChange, onImageUpload }) {
  const [isUploading, setIsUploading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      ListItem.configure({
        HTMLAttributes: {
          class: 'list-item',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'bullet-list',
        },
        keepMarks: true,
        keepAttributes: true,
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'ordered-list',
        },
        keepMarks: true,
        keepAttributes: true,
      }),
      Image.configure({
        inline: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
  });

  const addImage = useCallback(
    async (file) => {
      if (!editor) return;
      setIsUploading(true);
      try {
        const url = await onImageUpload(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setIsUploading(false);
      }
    },
    [editor, onImageUpload]
  );

  if (!mounted) {
    return <div className="border rounded-lg p-4 min-h-[200px] bg-white">Loading editor...</div>;
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 border-b pb-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <strong className='text-gray-800'>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <em className='text-gray-800'>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`text-gray-800 p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`text-gray-800 p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`text-gray-800 p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`text-gray-800 p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          Ordered
        </button>
        <Dropzone onDrop={addImage} isUploading={isUploading} />
      </div>
      <EditorContent 
        editor={editor} 
        className="text-gray-800 border rounded-lg p-4 min-h-[300px] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
      />
      <style jsx global>{`
        .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        .ProseMirror li {
          margin: 0.2em 0;
          display: list-item;
        }
        .ProseMirror li p {
          margin: 0;
          display: inline;
        }
        .bullet-list, .ordered-list {
          white-space: normal;
        }
      `}</style>
    </div>
  );
}

export default BlogEditor;