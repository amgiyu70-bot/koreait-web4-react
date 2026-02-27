// quill 에디터용 커스텀 훅

import { useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../supabase/supabaseClient";

// .env에 있는 정보 가져오기
const BUKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET_NAME;

// supabase에 이미지 올리는 메서드
const uploadImageToSupabase = async (file) => {
    // 파일명이 견치지 않도록, uuid를 생성해서 저장
    const extName = file.name.split(".").pop(); // 확장자
    const fileName = `${uuidv4()}.${extName}`;

    // 이미지 업로드
   const {error} = await supabase.storage.from(BUKET_NAME).upload(fileName, file);
    if (error) {
        throw new Error(error.message);
    } 

    // 에러가 없다면 실행될 코드
    const {data} = supabase.storage.from(BUKET_NAME).getPublicUrl(fileName);
    return data.publicUrl; // src에 들어갈 url 리턴   

}

// quill은 리치텍스트편집기
// html을 작성하게 하는 구조
// 기본라이브러리에는 이미지첨부기능이 X
// img 태그 삽입하는 로직을 직접 작성
export const useQuillEditor = () => {
    const quillRef = useRef(null);
    
    // 리렌더링이 일어나도 텍트트편집하던 상태는 유지해야함
    // useCallback()은 리렌더링 대상에서 제외되게 만들어줌
    const imageHandler = useCallback(()=> {
        // 가상의 file input
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.click();

        input.onchange = async () => {
                // supabase 갔다 와야함
                const file = input.files?.[0];
                if (!file) {
                    return;
                }

                const maxSize = 3 * 1024 * 1204; // 3M
            if (file.size > maxSize) {
                // 사용자 알림 추가
                console.log("3M가 초과");
                return;
            }

            // supabase 와 통신해서 이미지 url을 받아와야 한다
            try {
            // const url = await uploadImageToSupabase(file);
                const url = await uploadImageToSupabase(file);
                const editor = quillRef.current?.getEditor();
                // 현재 사용자가 에디터에서 입력중인 위치
                const cursor = editor.getSelection(true);
                editor.insertEmbed(cursor.index, "image", url);
                // 사용자알림으로 이미지 업로드 완료!

            } catch (e) {
                // 사용자알림으로 이미지업로드 실패 toste
                console.log(e);
            }
        }


    }, []);

    const modules = {
        toolbar:{
            container: [
                [{header: [1, 2, 3, false]}],
                ["bold", "italic", "underline", "strike"],
                ["image"],
                [{list: "ordered"}, {list: "bullet"}]

            ],
            handlers: {
                image: imageHandler
            }
        }
    }
    return {quillRef, modules}
}