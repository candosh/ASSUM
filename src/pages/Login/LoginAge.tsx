import React, { useState } from "react";
import axios from "axios";
import ModalWrap from "@src/components/modal/modalWrap";
import { useNavigate } from "react-router-dom";

// 나이 값을 받는 페이지

const LoginAge: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();
  const [age, setAge] = useState<number | null>(null);

  const getAge = async () => {
    if (age === null || age === 0) {
      alert("나이를 선택해주세요.");
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await axios.post(
        `https://www.assum.store/setAge?num=${age}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("회원 가입 성공 - 홈으로 이동");
        closeModal();
        navigate("/home");
      } else {
        alert("다시 입력 해주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <ModalWrap>
      <h1>나이 입력 하기</h1>
      <p>실시간 나이대별 키워드 순위를 알아보세요!</p>
      <div className="age-container">
        <select
          className="ageScroll"
          value={age || ""}
          onChange={(e) => setAge(Number(e.target.value))}
        >
          <option value="0">나이 입력</option>
          {[...Array(87)].map((_, index) => (
            <option key={index} value={index + 14}>
              {index + 14}
            </option>
          ))}
        </select>
      </div>
      <div className="btn_container">
        <button className="main_btn" onClick={getAge}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default LoginAge;
