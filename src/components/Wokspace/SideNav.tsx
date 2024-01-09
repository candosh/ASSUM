import { ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoHome, GoFileDirectory, GoLink } from "react-icons/go";
// import { GoStar } from "react-icons/go";
import logo from "@src/assets/logo.png";
import styles from "./SideNav.module.css";
import LogoutModal from "../modal/LogoutModal";
import ModalBackground from "../modal/ModalBackground";

interface MenuProvider {
  name: string;
  path: string;
  icon: ReactNode;
}

const SideNav = () => {
  const navigation = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const menuData: MenuProvider[] = [
    {
      name: "홈",
      path: "/home",
      icon: <GoHome className={styles.menuIcon} />,
    },
    {
      name: "히스토리",
      path: "/all",
      icon: <GoFileDirectory className={styles.menuIcon} />,
    },
    /*{
			name: "즐겨찾기",
			path: "/favorites",
			icon: <GoStar className={styles.menuIcon} />,
		},*/
  ];

  // 로그인 여부 확인
  const isTokenPresent = () => {
    return !!localStorage.getItem("accessToken");
  };

  // 로그아웃 모달
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} width={108} alt="logoImage"></img>
        </Link>
        {isTokenPresent() && (
          <Link to="/new" className={styles.newButton}>
            <GoLink className={styles.newIcon}></GoLink>
            <span style={{ marginLeft: "8px" }}>새 요약 만들기</span>
          </Link>
        )}
        <div className={styles.menuWrapper}>
          {menuData.map((menu, index) => (
            <div key={index}>
              <Link to={menu.path} className={styles.menuList}>
                {menu.icon}
                <div className={styles.menuText}>{menu.name}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.subMenuWrapper}>
          {isTokenPresent() ? (
            <span className={styles.subMenuList} onClick={openLogoutModal}>
              로그아웃
            </span>
          ) : (
            <span
              className={styles.subMenuList}
              onClick={() => navigation("/login")}
            >
              로그인
            </span>
          )}
        </div>
      </div>
      {isLogoutModalOpen && (
        <ModalBackground>
          <LogoutModal closeModal={() => setIsLogoutModalOpen(false)} />
        </ModalBackground>
      )}
    </>
  );
};

export default SideNav;
