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
import PlayAnim from "@src/assets/anim/animation_play1.json";
import article3 from "@src/assets/img/article3.png";
import People from "@src/assets/img/people.png";
import ArrowBottom from "@src/assets/img/arrowBottom.png";
import logoGrey from "@src/assets/logo-grey2.png";
import article1T from "@src/assets/img/article1_text.png";
import article2T from "@src/assets/img/article2_text.png";
import article3T from "@src/assets/img/article3_text.png";

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
                  <br/> 이젠 어썸으로 간략하고 핵심적인 내용만 쏙쏙 뽑아 들려드릴게요
                </p>
              </div>
              <Link to="/new" className={styles.linkBtn}>
                <button className={styles.startBtn}>어썸 시작하기</button>
              </Link>
              <img src={iMac} alt="iMac" className={styles.iMackImg}/>           
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
            <img src={article1T} className={styles.article1T} />
            <img src={article1} alt="article-img" className={styles.article_img}/>
          </div>
          <div className={styles.article2}>
            <Lottie
              loop
              animationData={PlayAnim}
              className={styles.articleImg}
            />
            <img src={article2T} className={styles.article2T} />
          </div>
          <div className={styles.article3}>
            <img src={article3T} className={styles.article3T} />
            <img src={article3} alt="article-img" className={styles.article_img}/>
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
          <Link to="/home">
            <div className={styles.Btnbox2}>
              <button className={styles.startBtn2}>어썸 시작하기</button>
            </div>
          </Link>
        </div>
        {/* footer */}
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
            <p className={styles.PL}>PROJECT MANAGER</p>
            <p className={styles.PM}>최신임</p>
          </div>
          <div className={styles.member5}>
            <p className={styles.PL}>PROJECT MANAGER</p>
            <p className={styles.PM}>정의민</p>
          </div>
          <p className={styles.footerTitle}>
            SOONGSIL UNIVERSITY LIKELION HACKATHON PROJECT
          </p>
          <div className={styles.fhr}></div>
        </div>
      </div>
    </>
  )
}