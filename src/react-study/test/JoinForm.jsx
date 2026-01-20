import { useState, useEffect } from "react";

function JoinForm() {
  const [form, setForm] = useState({
    id: "",
    password: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  // input 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 버튼 클릭 (form submit)
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    setSubmit(true);
  };

  // 🔥 submit 상태가 바뀔 때 검증 실행
  useEffect(() => {
    if (!submit) return;

    const newErrors = {};

    if (form.id.length < 5) {
      newErrors.id = "아이디는 5자 이상";
    }

    if (form.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "이메일 형식이 올바르지 않습니다";
    }

    setErrors(newErrors);

    // 에러가 없으면 서버 전송
    if (Object.keys(newErrors).length === 0) {
      console.log("서버 전송", form);
      // axios.post("/api/join", form)
    }

    setSubmit(false);
  }, [submit, form]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        placeholder="아이디"
        value={form.id}
        onChange={handleChange}
      />
      {errors.id && <p>{errors.id}</p>}

      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <input
        name="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">회원가입</button>
    </form>
  );
}

export default JoinForm;
