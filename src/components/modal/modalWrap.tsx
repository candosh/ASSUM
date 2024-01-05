// 모달 스타일 컴포넌트

import styled from "styled-components";

// 모달창 스타일 & 배치
const ModalWrap = styled.div`
  font-family: SUIT Variable;
  src: url("https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap");
  width: 500px;
  height: 280px;
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    #e3e3e3;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 9999;

  h1 {
    position: absolute;
    top: 30px;
    left: 30px;

    color: var(--text-high-emphasis, rgba(0, 0, 0, 0.87));
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }

  p {
    position: absolute;
    top: 75px;
    left: 30px;

    color: var(--text-medium-emphasis, rgba(0, 0, 0, 0.6));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .age-container {
    margin-top: 130px;
  }

  .ageScroll {
    height: 50px;
    width: 200px;
    min-height: 50px;
    padding: 0px 12px;
    outline: none;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin-bottom: 8px;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
  }

  .btn_container {
    display: flex;
    gap: 30px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    cursor: pointer;

    button {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 90px;
    }
    .main_btn {
      padding: 13px 32px;
      border-radius: 16px;
      background: var(--primary-900, #00bfff);
      border: none;

      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export default ModalWrap;
