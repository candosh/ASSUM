// import { useState } from "react";
import { ReactNode } from 'react';
import { Link } from "react-router-dom";
import { GoHome, GoFileDirectory, GoStar, GoLink } from "react-icons/go";
import logo from "@src/assets/logo.png";
import styles from "@src/styles/SideNav.module.css";

interface menuProvider {
	name: string;
	path: string;
	icon: ReactNode;
}

const SideNav = () => {
	const menuData: menuProvider[] = [
		{
			name: "홈",
			path: "/home",
			icon: <GoHome className={styles.menuIcon} />,
		},
		{
			name: "전체 파일",
			path: "/home/all",
			icon: <GoFileDirectory className={styles.menuIcon} />,
		},
		{
			name: "즐겨찾기",
			path: "/home/favorites",
			icon: <GoStar className={styles.menuIcon} />,
		},
	];
	const subMenus: string[] = ["개인정보 처리방침", "이용 약관", "로그인/로그아웃"];

	return (
		<>
			<div className={styles.navWrapper}>
				<Link to="/home" className={styles.logoWrapper}>
					<img src={logo} width={108} alt="logoImage"></img>
				</Link>
				<Link to="/new" className={styles.newButton}>
					<GoLink className={styles.newIcon}></GoLink>
					<span style={{ marginLeft: "8px" }}>새 파일 만들기</span>
				</Link>
				<div className={styles.menuWrapper}>
					{menuData.map((menu, index) => {
						return (
							<div key={index}>
								<Link to={menu.path} className={styles.menuList}>
									{menu.icon}
									<div className={styles.menuText}>{menu.name}</div>
								</Link>
							</div>
						);
					})}
				</div>
				<div className={styles.subMenuWrapper}>
					{subMenus.map((menu, index) => (
						<div className={styles.subMenuList} key={index}>
							<div className={styles.subMenu}>{menu}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SideNav;
