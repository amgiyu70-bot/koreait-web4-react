import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css'; // 1

// 차후에 이곤에  css를 입혀주세요!
export default function QuillEditor({quillRef, value, onChange, modules}) {
  return (
    <ReactQuill 
        ref={quillRef}
        value={value}
        onChange={onChange}
        modules={modules}
        theme='snow' // 2
    />
  )
}
