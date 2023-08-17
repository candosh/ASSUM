import { useEffect, useState } from "react";
import styles from "@src/styles/Detail.module.css"
import { FaPlay, FaStop } from "react-icons/fa";
import { getSpeech } from "@src/lib/getSpeech";
import { getFormattedDate } from "src/components/Wokspace/Date.ts";
import { useAtomValue } from "jotai";
import { dataTitle, dataSum, dataKeywordArr, dataLink } from "@src/lib/stateJotai";
import Loading from "./Loading";

const Detail = () => {
  const headerDate = getFormattedDate();
  const [contents, setContents] = useState<Contents | null>(null);
  const title = useAtomValue(dataTitle);
  const keyword = useAtomValue(dataKeywordArr);
  const sum = useAtomValue(dataSum);
  const link = useAtomValue(dataLink);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  type Contents = {
    text: string;
    title: string;
    keyword: string[];
    link: string;
  };

  useEffect(() => {
    // 데이터가 준비되었을 때만 컨텐츠 업데이트
    if (title && keyword && sum) {
      setContents({
        text: sum,
        title: title,
        keyword: keyword.split(', '),
        link: link,
      });
    }
  }, [title, keyword, sum, link]);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handlePlayButton = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else if (contents) {
      getSpeech(contents.text);
      setIsPlaying(true);
    }
  };

  if (!contents) {
    return <Loading />;
  }

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
            {isPlaying ? (
              <FaStop className={styles.iconStop} onClick={handlePlayButton}></FaStop>
            ) : (
              <FaPlay className={styles.iconPlay} onClick={handlePlayButton}></FaPlay>
            )}
          </div>
          <div className={styles.content}>
            <p className={styles.summaryBox}>
              {contents.text.split(/, |\. /).map((sentence, index, array) => (
                <p key={index}>
                  {sentence}
                  {index < array.length - 1 && (array[index].endsWith(',') || array[index].endsWith('.')) ? '' : index < array.length - 1 ? ', ' : ''}
                </p>
              ))}
            </p>
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