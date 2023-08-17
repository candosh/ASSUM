import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "@src/styles/signUp.module.css";
import axios from "axios";

// export interface checkItems {
//   checked: any;
//   id: number;
// }

export default function SignUp() {
  // 선택 동의 사항
  const data = [
    { id: 0, title: "선택 1" },
    { id: 1, title: "선택 2" },
    { id: 2, title: "선택 3" },
    { id: 3, title: "선택 4" },
    { id: 4, title: "선택 5" },
  ];

  // 동의 여부를 저장하는 배열
  const [checkPolicy, setCheckPolicy] = useState<number[]>([]);
  
  // 개별 동의 사항 체크 처리
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckPolicy((prev) => [...prev, id]);
    } else {
      setCheckPolicy(checkPolicy.filter((el) => el !== id));
    }
  };
  
  // 전체 동의 체크 처리
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

  // 개별 동의 사항 체크 여부 확인
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

  //add: email,password state

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('https://www.assum.store/signUp', {
        email,
        password
      });

      if (response.status === 200) {
        console.log(response);
        alert('회원가입 성공 🙌🏻');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.log(error);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>비밀번호</h5>
          <input
            type="password"
            className={styles.passwordInputBox1}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            className={styles.passwordInputBox2}
            placeholder="비밀번호를 다시 한번 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
          <hr />
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
          <Link to="/login" className={styles.signInLink}>
            <button
              className={allSelect ? styles.signInBtn1 : styles.signInBtn0}
              disabled={allSelect ? false : true}
              onClick={handleSignUp}
            >
              가입하기
            </button>
          </Link>
          <Link to="/login">
            <button className={styles.closeBtn}>로그인 페이지로 돌아가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
