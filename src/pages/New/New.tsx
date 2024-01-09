import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "@src/pages/New/New.module.css";
import { LiaPaperclipSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAtom } from "jotai";
import {
  dataKeywordArr,
  dataLink,
  dataSum,
  dataTitle,
} from "@src/store/stateJotai";
import SideNav from "@src/components/Wokspace/SideNav";

function New() {
  const [inputValue, setInputValue] = useState("");
  const [, setTitle] = useAtom(dataTitle);
  const [, setKeywordArr] = useAtom(dataKeywordArr);
  const [, setSum] = useAtom(dataSum);
  const [, setLink] = useAtom(dataLink);
  const navigate = useNavigate();
  const handleSummary = async () => {
    if (inputValue.trim() === "") {
      alert("링크를 첨부해주세요.미첨부 시 무한 로딩 될 수 있습니다.");
      return;
    }
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요한 서비스 입니다.");
      navigate("/login");
      return;
    }

    console.log(accessToken);

    const config = {
      params: {
        url: inputValue,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.post(
        `https://www.assum.store/url`,
        null,
        config
      );
      console.log(res);
      const data: string = res.data;
      const dataArray = data
        .split("\n")
        .map((line) =>
          line
            .replace("제목: ", "")
            .replace("키워드: ", "")
            .replace("요약글: ", "")
            .replace("제목 : ", "")
            .replace("키워드 : ", "")
            .replace("요약글 : ", "")
        )
        .filter((item) => item !== "");

      setTitle(dataArray[0]);
      setKeywordArr(dataArray[1]);
      setSum(dataArray[2]);
      setLink(inputValue);

      navigate("/detail"); // 여기서 /detail로 이동
    } catch (err) {
      console.error("API 요청 오류:", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const initialize = () => {
    setTitle("");
    setKeywordArr("");
    setSum("");
    setLink("");
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <SideNav />
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
            <Link to="/detail">
              <button onClick={handleSummary} className={styles.linkBtn}>
                요약하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
