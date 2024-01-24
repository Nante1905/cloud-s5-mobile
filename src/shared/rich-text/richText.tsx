import React from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  RichTextEditorProvider,
  RichTextField,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonBulletedList,
} from "mui-tiptap";
import "./RichText.components.css";

interface RichTextProps {
  onContentChange: (content: string) => void;
}

function RichText({ onContentChange }: RichTextProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  return (
    <div className="richTextContainer wrapper">
      <RichTextEditorProvider editor={editor}>
          <RichTextField
          className="richTextFieldContainer"
            controls={
              <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                <MenuButtonBulletedList />
              </MenuControlsContainer>
            }
          />
      </RichTextEditorProvider>
    </div>
  );
}

export default RichText;