//import { useEffect, useState } from "react";
import styles from "@src/pages/Login/login.module.css";
import logo from "@src/assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
//import { useAtom } from "jotai";
//import { userIdAtom } from "@src/lib/stateJotai";
import kakaoLogo from "@src/assets/img/kakaoLogo.png";

export default function Login(): JSX.Element {
  return (
    <>
      <LoginForm />
    </>
  );
}

function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  //현재는 임시로 바로 홈으로 이동로직

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.LoginForm}>
        <div className={styles.LoginBox}>
          <img
            className={styles.LOGO}
            src={logo}
            width={120}
            alt="logo_login"
          />
          <h4 className={styles.LoginTitle}>
            어렵고 복잡한 정보들,
            <br />
            이젠 쉽고 간략하게 들어요!
          </h4>
          <p className={styles.subtitle}>
            kakao 로그인을 통해
            <br />
            ASSUM 서비스를 이용해보세요!
          </p>
          <div className={styles.kakaoContainer}>
            <button onClick={goToHome} className={styles.kakao}>
              <img src={kakaoLogo} alt="kakaoLogo"></img>
              카카오 로그인
            </button>
          </div>
          <hr className={styles.liner} />
          <div className={styles.partSection}>
            <Link className={styles.terms} to="/Terms">
              이용약관
            </Link>
            <Link className={styles.policy} to="/Policy">
              개인정보처리방침
            </Link>
          </div>
          <p className={styles.footer}>Ⓒ ASSUM</p>
        </div>
      </div>
    </div>
  );
}
