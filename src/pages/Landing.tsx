import styles from "@src/styles/Landing.module.css";
import { Link } from "react-router-dom";
import logo from "@src/assets/logo.png";
import Lottie from "lottie-react";
import Shape1 from '@src/assets/anim/animation_shape1.json';
import Shape2 from "@src/assets/anim/animation_shape2.json";
import Shape3 from "@src/assets/anim/animation_shape3.json";
import Shape4 from "@src/assets/anim/animation_shape4.json";
import iMac from "@src/assets/img/iMac.png";
import article1 from "@src/assets/img/article1.png";
// import MicAnim from "@src/assets/anim/animation_mic.json";
// import PlayAnim from "@src/assets/anim/animation_play1.json";
import article3 from "@src/assets/img/article3.png";
import Arrow from "@src/assets/img/blueArrow.png";
// import Mic from "@src/assets/img/blueMic.png";
import AI from "@src/assets/img/blueAI.png";
import People from "@src/assets/img/people.png";
import ArrowBottom from "@src/assets/img/arrowBottom.png";
import logoGrey from "@src/assets/logo-grey2.png";

export default function info() {
  return (
    <>
      <div className={styles.root}>
        {/* section1 */}
        <div className={styles.section1}>
          <div className={styles.others}>
            <div className={styles.header}>
              <img src={logo} alt="logoImage" className={styles.headerLogo}></img>
              <div className={styles.loginSignup}>
                <Link to="/login" className={styles.linkBtn}>로그인</Link>
                <p>/</p>
                <Link to="/signup" className={styles.linkBtn}>회원가입</Link>
              </div>
            </div>
            <div className={styles.section1Content}>
              <div className={styles.pagetitle}>
                <p>어렵고 긴 글들, 이젠 쉽고 간략하게 들어요!</p>
                <img src={logo} alt="logo" />
                <p>
                  정보를 얻기 위해 찾은 뉴스기사, 블로그 등 길고 복잡한 내용이 한눈에 안 들어오시죠?
                  <br /> 이젠 어썸으로 간략하고 핵심적인 내용만 쏙쏙 뽑아 들려드릴게요
                </p>
              </div>
              <Link to="/login" className={styles.linkBtn}>
                <button className={styles.startBtn}>어썸 시작하기</button>
              </Link>
              <img src={iMac} alt="iMac" className={styles.iMackImg} />
            </div>
          </div>
          <Lottie
            loop
            animationData={Shape1}
            className={styles.shape1}
          />
          <Lottie
            loop
            animationData={Shape2}
            className={styles.shape2}
          />
          <Lottie
            loop
            animationData={Shape3}
            className={styles.shape3}
          />
          <Lottie
            loop
            animationData={Shape4}
            className={styles.shape4}
          />
        </div>
        {/* section 2 */}
        <div className={styles.section2}>
          <div className={styles.article1}>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>
                링크 첨부, <br /> 버튼 클릭으로 <br /> 손쉽게 이용
              </div>
              <img src={Arrow} alt="article1-arrow" className={styles.article1Arrow} />
              <div className={styles.articleSub}>
                한눈에 들어오는 디자인, <br />
                누구나 쉽게 익힐 수 있는 간단한 사용법으로 <br />
                쉽고 빠르게 서비스를 이용할 수 있어요
              </div>
            </div>
            <img src={article1} alt="article-img" className={styles.article_img} />
          </div>
          {/*
          <div className={styles.article2}>
            <div className={styles.articleImg}>
              <Lottie
                loop
                animationData={MicAnim}
                className={styles.micAnim}
              />
              <Lottie
                loop
                animationData={PlayAnim}
                className={styles.playAnim}
              />
            </div>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>
                보지 않아도 <br /> 귀로 들을 수 있는 <br /> 음성 기능
              </div>
              <img src={Mic} alt="article2-mic" className={styles.article2Mic} />
              <div className={styles.articleSub}>
                재생 버튼을 눌러 음성 기능을 활용해 보세요 <br />
                글을 읽는 게 어려운 사람들도 함께 이용할 수 있도록 <br />
                요약된 내용을 음성으로 들을 수 있어요
              </div>
            </div>
          </div>
          */}
          <div className={styles.article3}>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>
                AI 요약 <br /> 길고 복잡한 내용을 <br /> 핵심만 쏙쏙 요약 정리
              </div>
              <img src={AI} alt="article3-ai" className={styles.article3AI} />
              <div className={styles.articleSub}>
                어썸의 AI 요약을 사용해 보세요<br />
                제목, 키워드와 함께 핵심 내용만 간결하게 요약해주어<br />
                쉽고 빠르게 내용을 이해할 수 있어요
              </div>
            </div>
            <img src={article3} alt="article-img" className={styles.article_img} />
          </div>
        </div>
        {/* section3 */}
        <div className={styles.section3}>
          <h1 className={styles.section3Title}>
            누구나 이용할 수 있는 <br /> 어썸과 같이 읽고, 같이 들어요
          </h1>
          <p className={styles.section3Text}>
            모두가 차별없고, 제약없이 정보를 습득할 수 있는 그날까지
            <br /> 어썸은 끝없이 노력하겠습니다
          </p>
          <img src={People} alt="people" className={styles.section3People} />
          <img src={ArrowBottom} alt="arrow-bottom" className={styles.arrowBottom} />
          <Link to="/login">
            <div className={styles.Btnbox2}>
              <button className={styles.startBtn2}>어썸 시작하기</button>
            </div>
          </Link>
        </div>
        {/* footer - 멤버 변경*/}
        <div className={styles.footer}>
          <img src={logoGrey} alt="logo-grey" className={styles.footerLogo} />
          <p className={styles.articleFooter}>어썸</p>
          <div className={styles.member1}>
            <p className={styles.PL}>DESIGNER, FRONTEND DEVELOPER</p>
            <p className={styles.DS}>강해솔</p>
          </div>
          <div className={styles.member2}>
            <p className={styles.PL}>FRONTEND DEVELOPER</p>
            <p className={styles.FE}>최서현</p>
          </div>
          <div className={styles.member3}>
            <p className={styles.PL}>BACKEND DEVELOPER</p>
            <p className={styles.BE}>박정우</p>
          </div>
          <div className={styles.member4}>
          <p className={styles.PL}>BACKEND DEVELOPER</p>
            <p className={styles.BE}>유승한</p>
          </div>
          <p className={styles.footerTitle}>
            @ASSUM
          </p>
          <div className={styles.fhr}></div>
        </div>
      </div>
    </>
  )
}