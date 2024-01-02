import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import LoadingAnim from "@src/assets/anim/loading.json";
import styles from "@src/pages/Login/LoginCallback.module.css";
import { useAtom } from "jotai";
import { userIdAtom } from "@src/lib/stateJotai";

function LoginCallback() {
  const navigate = useNavigate();
  const loadingAnimationRef = useRef(null);
  const [, setUserId] = useAtom(userIdAtom);

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
      const response = await axios.post(
        "http://www.assum.store/api/auth/kakao",
        {
          authorizationCode: code,
        }
      );

      const { accessToken, userId } = response.data;
      localStorage.setItem("accessToken", accessToken);
      setUserId(userId);

      navigate("/home");
    } catch (error) {
      console.error("Error sending code to server:", error);
    }
  };

  return (
    <>
      <div className={styles.rootcontainer}>
        <div className={styles.LoadingAnim} ref={loadingAnimationRef} />
        <div className={styles.text}>ASSUM 로그인 중</div>
      </div>
    </>
  );
}

export default LoginCallback;
