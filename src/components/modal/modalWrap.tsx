import styled from "styled-components";

// 모달창 스타일 & 배치
const ModalWrap = styled.div`
  font-family: "Arimo";
  src: url("https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap");
  width: 460px;
  height: 220px;
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    #000;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 9999;

  h1 {
    position: absolute;
    top: 30px;
    left: 30px;

    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
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

    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn_container {
    display: flex;
    gap: 30px;

    position: absolute;
    bottom: 30px;
    right: 30px;

    button {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .cancel_btn {
      color: rgba(255, 255, 255, 0.87);
      border: none;
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.2) 100%
        ),
        #000;
    }
    .main_btn {
      padding: 13px 32px;
      border-radius: 16px;
      background: var(--primary-900, #233e2c);
      border: none;

      color: var(--primary-400, #79cd96);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export default ModalWrap;
