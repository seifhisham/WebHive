"use client";

import { type JSONContent, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function ProductDescription({ content }: { content: JSONContent }) {
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base",
      },
    },
    onCreate: ({ editor }) => {
      // Force an update after editor is created
      editor.commands.focus('end');
    },
    immediatelyRender: false // Add this to fix SSR issue
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="prose prose-sm sm:prose-base max-w-none">
      <EditorContent editor={editor} />
    </div>
  );
}