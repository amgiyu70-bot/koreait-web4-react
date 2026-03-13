import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        // FormData 객체 생성
        const formData = new FormData();
        formData.append('image', file);

        try {
            // PHP 서버 API 호출
            const response = await axios.post('http://gnbiz8888.liodesign.kr/react/admin/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Upload error', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ImageUpload;



/*
import axios from 'axios';

const handleSubmit = async (data, file) => {
  const formData = new FormData();

  // JSON 데이터를 Blob으로 변환하여 추가 (중요)
  const jsonBlob = new Blob([JSON.stringify(data)], { type: "application/json" });
  formData.append("dto", jsonBlob); // 'dto'는 서버에서 받는 파라미터명

  // 파일 추가
  formData.append("file", file);

  // 전송
  await axios.post('/api/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};



const formData = new FormData();

// 1. JSON 데이터 추가 (Blob 객체로 변환하여 JSON 타입 명시)
const jsonData = { name: "test", type: "sample" };
formData.append('data', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

// 2. 파일 추가
formData.append('file', fileObject);

// 3. Axios 또는 fetch로 전송 (Content-Type 설정 안 함 - 자동 설정됨)
axios.post('/api.php', formData);



// 1. JSON 데이터 가져오기
$dataJson = $_POST['data']; // JSON 문자열
$data = json_decode($dataJson, true); // 배열로 변환

// 2. 파일 정보 가져오기
$file = $_FILES['file'];

// 데이터 확인
echo $data['name'];
echo $file['name'];

// 파일 저장 예시
move_uploaded_file($file['tmp_name'], 'uploads/' . $file['name']);



  // 회원가입버튼 클릭
  const signupButtonHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", profileImg);

    const signup = {
      nickName,
      gender,
      role,
      password,
      email,
    };
    formData.append(
      "signup",
      new Blob([JSON.stringify(signup)], { type: "application/json" })
    );

    if (signupActive) {
      if (!isemailChecking) {
        alert("이메일 인증을 완료해주세요!");
        return;
      }
      signupMutation.mutate(formData);
    } else {
      alert("회원정보를 모두 입력해주세요!");
    }
  };
*/
