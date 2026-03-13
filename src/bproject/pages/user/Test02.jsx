import React, { useState } from 'react';

const ToggleList = () => {
  // 1. 고유 ID를 Key로 가지는 상태 객체
  const [showItem, setShowItem] = useState({});

  const data = [
    { id: 1, name: '항목 1', content: '내용 1' },
    { id: 2, name: '항목 2', content: '내용 2' },
  ];

  // 2. 토글 기능 함수
  const toggleItem = (id) => {
    setShowItem(prev => ({
      ...prev,
      [id]: !prev[id] // 클릭한 ID의 상태만 반전
    }));
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ position: 'relative', marginBottom: '10px' }}>
          <button onClick={() => toggleItem(item.id)}>
            {item.name} 토글
          </button>
          {/* 3. 삼항연산자로 해당 위치에 내용 표시 */}
          {showItem[item.id] && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: '#eee', border: '1px solid #ccc' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};