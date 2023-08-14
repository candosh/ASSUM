import { ChangeEvent, useEffect, useState } from "react";
import styles from "@src/styles/Detail.module.css"
import { FaPlay } from "react-icons/fa";
import { getSpeech } from "@src/lib/getSpeech";
import { getFormattedDate } from "src/components/Wokspace/Date.ts";

type Contents = {
  text: string;
  title: string;
  keyword: string[];
  link: string;
};

const defaultData: Contents = {
  text: "텍스트입니다",
  title: "제목입니다",
  keyword: ["키워드1", "키워드2", "키워드3"],
  link: "원문 링크",
};

const Detail = () => {
  const [contents, setContents] = useState<Contents>(defaultData);
  const headerDate = getFormattedDate();

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContents((prev) => {
      return {
        ...prev,
        text: e.target.value,
      };
    });
  };

  const handlePlayButton = () => {
    /** API 호출 및 결과 값 받아오는 로직 추가
     * 통신 예시 (상황에 맞게 커스텀하세요!)
     *
     * axios.get("https://api~~", {
     * headers: {
     *  'Content-Type': 'application/json',
     *  ~~~ 헤더에 넣을 것들 여기에
     *  }
     * }).then((res) => {
     *  setCotents(res.data);
     * }).catch((err) => {
     *  console.log(err);
     * })
     */

    getSpeech(contents.text);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.headertitle}>새로운 파일</div>
          <div className={styles.headerDate}>{headerDate}</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              <h1>{contents.title}</h1>
            </div>
            <div className={styles.titleSub}>
              아래 본문은 AI 기반 요약 결과입니다.
            </div>
            <div className={styles.tagWrapper}>
              {contents.keyword.map((tag, index) => (
                <div className={styles.tagList} key={index}>
                  <div className={styles.tag}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.playWrapper}>
            <FaPlay className={styles.iconPlay} onClick={handlePlayButton}></FaPlay>
          </div>
          <div className={styles.content}>
            <input type="text" className={styles.summaryBox} onChange={handleInput} value={contents.text} />
          </div>
          <div className={styles.bottomLink}>
            <a
              href={contents.link}
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