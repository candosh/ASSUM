import { useEffect, useState } from "react";
import styles from "@src/styles/login.module.css"
import logo from "@src/assets/logo.png";
import chevron from "@src/assets/img/icons8-셰브론-오른쪽-52.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAtom } from 'jotai';
import { userIdAtom } from "@src/lib/stateJotai";

export default function Login(): JSX.Element {
	return (
		<>
			<LoginForm />
		</>
	);
}

function LoginForm(): JSX.Element {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isActivePw, setIsActivePw] = useState<boolean>(false);
	const [userId, setUserId] = useAtom(userIdAtom);
	const navigation = useNavigate();

	useEffect(() => {
		if (userId) {
			navigation("/new");
		}
	}, [userId]);

	const isPassedLogin = (): void => {
		email.includes("@") && email.length > 5 && email.includes(".")
			? setIsActive(true)
			: setIsActive(false);
	};

	const isCorrectPassword = (): void => {
		password.length > 7 && isActive
			? setIsActivePw(true)
			: setIsActivePw(false);
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(event.target.value);
	};

	const handleInputPw = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(event.target.value);
	};

	const handleLoginSubmit = async () => {
		if (isActive && email !== "" && isActivePw && password !== "") {
			axios.post('https://www.assum.store/login', {
				email: email,
				password: password
			})
				.then((res) => {
					const userId: number = res.data;
					console.log(res.data);
					setUserId(userId);
					alert('로그인 성공 🙌🏻');
				})
				.catch((err) => {
					alert('로그인 실패😭 다시 시도해주세요');
					console.error("로그인 실패", err);
				});
		}
	};

	return (
		<div className={styles.loginContainer}>
			<div className={styles.LoginForm}>
				<div className={styles.LoginBox}>
					<img
						className={styles.LOGO}
						src={logo}
						width={120}
						alt="logo_login"
					/>
					<h4 className={styles.LoginTitle}>
						하나의 계정으로
						<br />
						더욱 편리하게
					</h4>
					<p className={styles.subtitle}>
						ASSUM이 제공하는 서비스를
						<br />
						하나의 계정으로 모두 이용할 수 있습니다
					</p>
					<p className={styles.formTitle}>이메일</p>
					<input
						className={
							isActive || email === ""
								? styles.emailInputBox
								: styles.emailInputBox1
						}
						onChange={handleInput}
						onKeyUp={isPassedLogin}
						type="email"
						required
						placeholder="이메일을 입력해주세요"></input>
					<p
						className={
							isActive || email === "" ? styles.nowarning : styles.warning
						}>
						올바른 이메일을 입력해주세요
					</p>
					<p className={styles.formTitle}>비밀번호</p>
					<input
						className={
							isActivePw || password === ""
								? styles.emailInputBox
								: styles.emailInputBox1
						}
						onChange={handleInputPw}
						onKeyUp={isCorrectPassword}
						type="password"
						required
						placeholder="비밀번호를 입력해주세요"></input>
					<p
						className={
							isActivePw || password === "" ? styles.nowarning : styles.warning
						}>
						올바른 비밀번호를 입력해주세요
					</p>
					<button
						onClick={handleLoginSubmit}
						className={
							isActive && email !== "" && isActivePw && password !== ""
								? styles.submitBtn
								: styles.unactiveBtn
						}
						disabled={email === "" && password === "" ? true : false}>
						로그인
					</button>
					<Link to="/signup" className={styles.findBtn}>
						<p className={styles.forgotten}>회원이 아니시라면</p>
						<span>
							<img className={styles.chevron} src={chevron} width={16} alt="chevron" />
						</span>
					</Link>
					<hr className={styles.liner} />
					<div className={styles.partSection}>
						<Link className={styles.terms} to="/Terms">
							이용약관
						</Link>
						<Link className={styles.policy} to="/Policy">
							개인정보처리방침
						</Link>
					</div>
					<p className={styles.footer}>Ⓒ ASSUM</p>
				</div>
			</div>
		</div>
	);
}
