import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ModalWrap from "@src/components/modal/modalWrap";

const LoginAge: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`https://www.remini.store/api/remini/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate(-1);
    } catch (error) {
      console.error("Error deleting retrospective:", error);
    }

    closeModal();
  };

  return (
    <ModalWrap>
      <h1>나이 입력 하기</h1>
      <p>실시간나이대별 키워드 순위를 알아보세요!</p>
      <div className="btn_container">
        <button className="main_btn" onClick={handleDelete}>
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default LoginAge;
