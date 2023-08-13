import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "@src/styles/New.module.css"
import { LiaPaperclipSolid } from "react-icons/lia"

function New() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSummary = () => {
    // 여기에서 inputValue를 백엔드로 전달하거나 필요한 처리를 수행
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>새로운 파일</div>
          <hr className={styles.breakline}></hr>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contents}>
            <LiaPaperclipSolid className={styles.linkIcon}></LiaPaperclipSolid>
            <div className={styles.contentExplain}>
              요약해서 듣고 싶은 웹 브라우저의 링크를 첨부해주세요.
              <br /> 요약본과 음성파일을 추출해드려요.
            </div>
            <input
              type="text"
              name="link"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="링크를 첨부해주세요."
              className={styles.textbox}
            />
            <Link to="/home/detail">
              <button onClick={handleSummary} className={styles.linkBtn}>요약하기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;