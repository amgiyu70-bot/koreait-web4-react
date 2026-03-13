
import { useState } from 'react'
import QuillEditor from './QuillEditor'
import { useQuillEditor } from './useQuillEditor';
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const editorWrapper = css `
    
`;

export default function PostCreateRage() {
    const [content, setContent] = useState("");
    const {quillRef, modules} = useQuillEditor();

   
  return (
    
        <QuillEditor
            name="it_shop_memo"
            quillRef={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
        />
  )
}
