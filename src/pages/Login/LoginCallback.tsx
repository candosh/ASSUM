import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import LoadingAnim from "@src/assets/anim/loading.json";
import styles from "@src/pages/Login/LoginCallback.module.css";

function LoginCallback() {
  const navigate = useNavigate();
  const loadingAnimationRef = useRef(null);

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
    console.log("redirect");
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      console.log("code", code);

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
      console.log("response", response);

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      getUserData(accessToken);
    } catch (error) {
      console.error("Error sending code to server:", error);
    }
  };

  const getUserData = async (accessToken: string) => {
    try {
      const response = await axios.get("http:/www.assum.store/api/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("User data response:", response);

      const userData = response.data;
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect to Home page after storing user data
      navigate("/");
    } catch (error) {
      console.error("Error fetching user data:", error);
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
