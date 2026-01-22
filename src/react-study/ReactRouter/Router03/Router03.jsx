
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'

const reservations = [
    {id: 1, name: "홍길동", room: "101", date: "2026-01-25"},
    {id: 2, name: "김길동", room: "201", date: "2026-01-26"},
    {id: 3, name: "이길동", room: "301", date: "2026-01-27"},
    {id: 4, name: "박길동", room: "401", date: "2026-01-28"},
]



export default function Router03() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ReservationList />}/>
            <Route path='/reservation/:id' element={<ReservationDtail />} />
        </Routes>
    </BrowserRouter>
  )
}
// 도전! ReservatonList 컴포넌트에서
// ReservationCard를 map으로 뿌려주세ㅛㅇ
// 해당 카드를 클릭하면 Deatil로 이동하게 만들어주세요
// url에 해당 reservation의 아이디가 포함되어야 합니다.


function ReservationDtail() {
    // 카드용 api(다건조회)랑 디테일 api(다건조회) 구분되어 있음
    // 일반적으로 id값을 url 
    const {id} = useParams();
    // url에서 가져온 id => 숫자X 문자열

    // 실제로 api 호출
    const myReservation = reservations.find((r) => r.id === parseInt(id));
    const nav = useNavigate();
    // url 을 타이핑 쳐서 들어오는 경우
    // myReservation 없다면
    if (!myReservation) {
        return (
        <div>
            <h2>잘못된 접근</h2>
            <button onClick={() => nav("/")}>돌아가기</button>
        </div>
        );
    }
    const {name, room, date} = myReservation;
    return (
        <div>
            <h1>예약 상세정보</h1>
            <p>예약번호: #{id}</p>
            <p>예약자: {name}</p>
            <p>호실: {room}</p>
            <p>예약일자: {date}</p>
            <button onClick={() => nav("/")}>돌아가기</button>
        </div>
    )
}

function ReservationCard ({reservation, onClick}) {
    const {id, name, room, date} = reservation;
    return (
        <div onClick={onClick}>
            <h3>{name}님의 예약</h3>
            <p>예약번호: {id}</p>
            <p>객실: {room}</p>
            <p>날짜: {date}</p>
        </div>

    )
}

function ReservationList() {
    // url변경 가능
    const navigate = useNavigate();
    const handleCardClick =() => {
        navigate(`/reservation/${id}`);
    }
    return (
        <div>
            <h1>예약목록</h1>
            <div>
                {reservations.map((r) => {

                    const {id, name, room, date} = r;
                     return (

                         <ReservationCard
                         key={id}
                         reservation={r}
                        /* onClick={()=>handleCardClick(id)} */
                            onClick={() => navigate(`/reservation/${id}`)}

                         />                   
                    )
                    
                })}
            </div>
        </div>
    )
}