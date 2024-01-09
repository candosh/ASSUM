import React from "react";
import BasicModalWrap from "./basicModalWrap";
import { useNavigate } from "react-router-dom";

// 로그아웃 모달

const LogoutModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    closeModal();
    navigate("/");
  };

  return (
    <BasicModalWrap>
      <h1>로그아웃</h1>
      <p>정말 로그아웃 하시겠어요?</p>
      <div className="btn_container">
        <button className="cancel_btn" onClick={closeModal}>
          취소
        </button>
        <button className="main_btn" onClick={handleLogout}>
          확인
        </button>
      </div>
    </BasicModalWrap>
  );
};

export default LogoutModal;
