import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import styles from "@src/styles/signUp.module.css";
import axios from "axios";

export default function SignUp() {
  //이메일, 비밀번호, 비밀번호 확인, 나이
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('');
  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('올바른 이메일을 입력해주세요')
      setIsEmail(false)
    } else {
      setEmailMessage('')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('')
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('');
        setIsPasswordConfirm(true);
      } else {
        if (passwordConfirmCurrent === '') {
          setPasswordConfirmMessage('');
        } else {
          setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        }
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // 체크박스 설정
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [checkState1, setCheckState1] = useState<boolean>(false);
  const [checkState2, setCheckState2] = useState<boolean>(false);
  const [checkState3, setCheckState3] = useState<boolean>(false);
  const [checkState4, setCheckState4] = useState<boolean>(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setCheckState1(true);
      setCheckState2(true);
      setCheckState3(true);
      setCheckState4(true);
    } else {
      setAllCheck(false);
      setCheckState1(false);
      setCheckState2(false);
      setCheckState3(false);
      setCheckState4(false);
    }
  };

  const CheckBtnEvent1 = () => {
    if (checkState1 === false) {
      setCheckState1(true)
    } else {
      setCheckState1(false)
    }
  };

  const CheckBtnEvent2 = () => {
    if (checkState2 === false) {
      setCheckState2(true)
    } else {
      setCheckState2(false)
    }
  };

  const CheckBtnEvent3 = () => {
    if (checkState3 === false) {
      setCheckState3(true)
    } else {
      setCheckState3(false)
    }
  };


  const CheckBtnEvent4 = () => {
    if (checkState4 === false) {
      setCheckState4(true)
    } else {
      setCheckState4(false)
    }
  };

  useEffect(() => {
    if (checkState1 === true && checkState2 === true && checkState3 === true && checkState4 === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [checkState1, checkState2, checkState3, checkState4])

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://www.assum.store/signUp', {
        age,
        email,
        password
      });

      if (response.status === 200) {
        console.log(response);
        alert('회원가입 성공 🙌🏻');
        //회원가입 성공 시 로그인으로 이동
        window.location.href = "/login";
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
        <div className={styles.signUpBox}>
          <span>
            <h4 className={styles.signUpTitle}>회원가입</h4>
          </span>
          <h5>이메일</h5>
          <input
            name="email"
            onChange={onChangeEmail}
            type="email"
            className={
              isEmail || email === ""
                ? styles.emailInputBox
                : styles.emailInputBox1
            }
            placeholder="이메일을 입력해주세요"
          ></input>
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
          <h5>비밀번호</h5>
          <input
            name="password"
            onChange={onChangePassword}
            type="password"
            className={
              isPassword || password === ""
                ? styles.passwordInputBox
                : styles.passwordInputBox1
            }
            placeholder="비밀번호를 입력해주세요"
          ></input>
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
          <input
            name="passwordConfirm"
            onChange={onChangePasswordConfirm}
            type="password"
            className={
              isPasswordConfirm || passwordConfirm === ""
                ? styles.passwordConfirmInputBox
                : styles.passwordConfirmInputBox1
            }
            placeholder="비밀번호를 다시 한번 입력해주세요"
          ></input>
          {passwordConfirm.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
          )}
          <h5>나이</h5>
          <select
            className={styles.ageScroll}
            value={age || ''}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAge(Number(e.target.value))}
          >
            <option value="">나이 입력(선택)</option>
            {[...Array(87)].map((_, index) => (
              <option key={index} value={index + 14}>
                {index + 14}
              </option>
            ))}
          </select>

          <div className={styles.agreeForm1}>
            <div className={styles.allWrapper}>
              <input
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              ></input>
              <h5>전체 동의</h5>
            </div>
            <hr />
          </div>
          <div className={styles.agreeForm2}>
            <input
              type="checkbox"
              id="check1"
              checked={checkState1}
              onChange={CheckBtnEvent1}
            ></input>
            <h5>만 14세 이상입니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm3}>
            <input
              type="checkbox"
              id="check2"
              checked={checkState2}
              onChange={CheckBtnEvent2}
            ></input>
            <h5>ASSUM 이용약관에 동의합니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm4}>
            <input
              type="checkbox"
              id="check3"
              checked={checkState3}
              onChange={CheckBtnEvent3}
            ></input>
            <h5>ASSUM 개인정보 수집 및 이용에 동의합니다 (필수)</h5>
          </div>
          <div className={styles.agreeForm5}>
            <input
              type="checkbox"
              id="check4"
              checked={checkState4}
              onChange={CheckBtnEvent4}
            ></input>
            <h5>광고성 SNS, 이메일 뉴스레터 수신에 동의합니다 (선택)</h5>
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className={
              isEmail &&
                isPassword &&
                isPasswordConfirm &&
                checkState1 &&
                checkState2 &&
                checkState3
                ? styles.signUpBtn1
                : styles.signUpBtn0
            }
            disabled={
              !(
                isEmail &&
                isPassword &&
                isPasswordConfirm &&
                checkState1 &&
                checkState2 &&
                checkState3 &&
                age !== null &&
                age >= 14
              )
            }
          >
            가입하기
          </button>
          <Link to="/login">
            <button className={styles.closeBtn}>로그인 페이지로 돌아가기</button>
          </Link>
        </div>
      </div>
    </div >
  );
}
