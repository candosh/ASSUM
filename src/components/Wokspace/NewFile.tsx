// import React from 'react';
import styles from "@src/styles/NewFile.module.css";
import { FaMicrophone } from "react-icons/fa";

interface NewFileProps {
  createdDate: string; // 생성 일자 prop 추가
}


function NewFile() {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.filesWrapper}>
          <div className={styles.icon}>
            <FaMicrophone className={styles.iconVoice}></FaMicrophone>
          </div>
          <div className={styles.fileNameWrapper}>
            <p className={styles.fileName}>새로운 파일 1</p>
            <p className={styles.fileSub}>6호 태풍 '카눈'이 북상하며 영남 내륙을 통과중이다. 태풍은 대구 북서쪽을 지나갔고, 북서쪽으로 이동하 ...</p>
          </div>
        </div>
        <div className={styles.fileDate}>
          <p>2023.08.10 12:39</p>
        </div>
        <div className={styles.fileLength}>
          <p>12분</p>
        </div>
      </div>
      <hr className={styles.breakline}></hr>
    </div>
  );
}

export default NewFile;