import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import LoadingAnim from "@src/assets/anim/animation_loading.json";
import styles from "@src/pages/Login/LoginCallback.module.css";
import AgeModal from "@src/pages/Login/LoginAge";

function LoginCallback() {
  const navigate = useNavigate();
  const loadingAnimationRef = useRef(null);
  const [showAgeModal, setShowAgeModal] = useState(false);

  useEffect(() => {
    if (loadingAnimationRef.current) {
      const animation = lottie.loadAnimation({
        container: loadingAnimationRef.current,
        animationData: LoadingAnim,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });

      return () => animation.destroy();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        sendCodeToServer(code);
      }
    }
  }, [navigate]);

  const sendCodeToServer = async (code: string) => {
    try {
      // 로그인 API 요청
      const response = await axios.post(
        "https://www.assum.store/api/auth/kakao",
        {
          authorizationCode: code,
        }
      );

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      // age 값 요청
      const ageResponse = await axios.get("https://www.assum.store/getAge", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { age } = ageResponse.data;

      console.log(age);
      // age 값이 0 or undefined 이면 모달 띄움
      if (age === undefined || age === 0) {
        console.log("신규 회원가입 - 나이 입력 필요");
        setShowAgeModal(true);
      } else {
        console.log("로그인 성공 - 홈으로 이동");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error sending code to server or fetching age:", error);
    }
  };

  const closeModal = () => {
    setShowAgeModal(false);
  };

  return (
    <>
      <div className={styles.rootcontainer}>
        <div className={styles.LoadingAnim} ref={loadingAnimationRef} />
        <div className={styles.text}>ASSUM 로그인 중</div>
      </div>
      {showAgeModal && <AgeModal closeModal={closeModal} />}
    </>
  );
}

export default LoginCallback;
