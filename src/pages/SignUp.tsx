"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "@src/styles/signUp.module.css";

// export interface checkItems {
//   checked: any;
//   id: number;
// }

export default function SignUp() {
  const data = [
    { id: 0, title: "선택 1" },
    { id: 1, title: "선택 2" },
    { id: 2, title: "선택 3" },
    { id: 3, title: "선택 4" },
    { id: 4, title: "선택 5" },
  ];
  //Array for checked Agree policy
  const [checkPolicy, setCheckPolicy] = useState<number[]>([]);
  // function for single checked and pushing item into Array
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckPolicy((prev) => [...prev, id]);
    } else {
      setCheckPolicy(checkPolicy.filter((el) => el !== id));
    }
  };
  // function for single checked and pushing all item into Array
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: number[] = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckPolicy(idArray);
    } else {
      setCheckPolicy([]);
      setBtnState(0);
    }
  };

  // change signin button for check state
  const [, setBtnState] = useState<number>(0);
  const [allSelect, setAllSelect] = useState<boolean>(false);
  const [, setCheckState1] = useState<boolean>(false);
  const [, setCheckState2] = useState<boolean>(false);
  const [, setCheckState3] = useState<boolean>(false);


  const isChecked = () => {
    if (checkPolicy.includes(0)) {
      setAllSelect(true);
    } else if (
      checkPolicy.includes(1) &&
      checkPolicy.includes(2) &&
      checkPolicy.includes(3)
    ) {
      setAllSelect(true);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.Upper}>
        <div className={styles.signInBox}>
          <span>
            <h4 className={styles.signInTitle}>회원가입</h4>
          </span>
          <h5>이메일</h5>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            className={styles.emailInputBox}
          ></input>

          {/*<h5>이름</h5>
        <input
          type="text"
          className={styles.nameInputBox}
          placeholder="이름을 입력해주세요"
        ></input>
        <h5>닉네임</h5>
        <input
          placeholder="닉네임을 입력해주세요"
          className={styles.nicknameInputBox}
        ></input>*/}
          <h5>비밀번호</h5>
          <input
            type="password"
            className={styles.passwordInputBox1}
            placeholder="비밀번호를 입력해주세요"
          ></input>
          <input
            type="password"
            className={styles.passwordInputBox2}
            placeholder="비밀번호를 다시 한번 입력해주세요"
          ></input>
          <p className={styles.passwordInfo}>
            영문자 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
            16자 이하로 입력해주세요
          </p>
          <div className={styles.agreeForm1}>
            <input
              type="checkbox"
              name="select-all"
              onChange={(e) => {
                handleAllCheck(e.target.checked);
                allSelect ? setAllSelect(false) : setAllSelect(true);
              }}
              checked={checkPolicy.length === data.length ? true : false}
            ></input>
            <h5>전체 동의</h5>
            <hr />
          </div>

          <div className={styles.agreeForm2}>
            <input
              type="checkbox"
              name="select-1"
              onChange={(e) => {
                handleSingleCheck(e.target.checked, 1);
                setCheckState1(true);
                isChecked();
              }}
              checked={checkPolicy.includes(1) ? true : false}
            ></input>
            <h5>만 14세 이상입니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm3}>
            <input
              type="checkbox"
              name="select-2"
              onChange={(e) => {
                handleSingleCheck(e.target.checked, 2);
                setCheckState2(true);
                isChecked();
              }}
              checked={checkPolicy.includes(2) ? true : false}
            ></input>
            <h5>ASSUM 이용약관에 동의합니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm4}>
            <input
              type="checkbox"
              name="select-3"
              onChange={(e) => {
                handleSingleCheck(e.target.checked, 3);
                setCheckState3(true);
                isChecked();
              }}
              checked={checkPolicy.includes(3) ? true : false}
            ></input>
            <h5>ASSUM 개인정보 수집 및 이용에 동의합니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm5}>
            <input
              type="checkbox"
              name="select-4"
              onChange={(e) => {
                handleSingleCheck(e.target.checked, 3);
              }}
              checked={checkPolicy.includes(3) ? true : false}
            ></input>
            <h5>광고성 메세지(SNS), 이메일 뉴스레터 수신에 동의합니다 (선택)</h5>
          </div>
          <button
            className={allSelect ? styles.signInBtn1 : styles.signInBtn0}
            disabled={allSelect ? false : true}
          >
            가입하기
          </button>
          <Link to="/login">
            <button className={styles.closeBtn}>로그인 페이지로 돌아가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}