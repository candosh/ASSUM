// import React from 'react';
import styles from "@src/styles/Detail.module.css"
import { FaPlay } from "react-icons/fa";
import iconForward from "../assets/img/icon-seconds-forward.png";
import iconBackward from "../assets/img/icon-seconds-back.png";

function Detail() {
  const tags: string[] = ["태풍 카눈", "날씨", "영남 내륙", "상륙", "이동경로", 
  "태풍 경보", "강한비", "바람", "물결", "해안가"];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.headertitle}>새로운 파일</div>
          <div className={styles.headerDate}>2023.08.13</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              [12시 날씨] 태풍 '카눈',
              <br /> 영남 내륙 통과 중
            </div>
            <div className={styles.titleSub}>
              아래 본문은 AI 기반 요약 결과입니다.
            </div>
          </div>
          <div className={styles.tagWrapper}>
            {tags.map((tag, index) => (
              <div className={styles.tagList} key={index}>
                <div className={styles.tag}>{tag}</div>
              </div>
            ))}
          </div>
          <div className={styles.playWrapper}>
            <img src={iconForward} alt="icon-forward" className={styles.iconFive} />
            <FaPlay className={styles.iconPlay}></FaPlay>
            <img src={iconBackward} alt="icon-forward" className={styles.iconFive} />
          </div>
          <div className={styles.content}>
            6호 태풍 '카눈'이 북상하며 영남 내륙을 통과 중이다. <br />
            태풍은 대구 북서쪽을 지나갔고, 북서쪽으로 이동하여 충북, 서울, 북한으로 이동할 것으로 예상된다. <br />
            제주도의 태풍 특보는 해제되었지만, 강원, 충청 등에는 태풍 경보 및 주의보가 내려져 있다. <br />
            비가 전국 대부분에 내리고 있으며, 강원 영동과 경북 동해안에는 시간당 50밀리미터 안팎의 장대비가 내리고 있다. <br />
            태풍으로 인해 강원 영동에는 최대 300밀리미터, 다른 지역에도 50에서 200밀리미터의 비가 더 내릴 것으로 예상된다. <br />
            동해안에서는 높은 바람과 물결이 예상되며, 해안가에서는 높은 파도가 발생할 수 있다. <br />
          </div>
          <div className={styles.bottomLink}>
            <a
              href="https://news.kbs.co.kr/news/view.do?ncd=7745561"
              target="_blank"
              title="original link"
            >
              원문 링크
            </a>
            <hr className={styles.breakline}></hr>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;