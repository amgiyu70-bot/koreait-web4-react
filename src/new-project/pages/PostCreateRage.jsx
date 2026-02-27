
import { useState } from 'react'
import QuillEditor from '../utils/quill/QuillEditor'
import { useQuillEditor } from '../utils/quill/useQuillEditor';
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const editorWrapper = css `
    
`;

export default function PostCreateRage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {quillRef, modules} = useQuillEditor();

    const handleSubmit = () => {
        console.log({title, content})
    }
  return (
    <div>
        <h1>게시글 작성</h1>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div>
            <QuillEditor
                quillRef={quillRef}
                value={content}
                onChange={setContent}
                modules={modules}
            />
        </div>
        <button onClick={handleSubmit}>테스트</button>
    </div>
  )
}
