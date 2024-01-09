import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoHome, GoFileDirectory, GoLink } from "react-icons/go";
// import { GoStar } from "react-icons/go";
import logo from "@src/assets/logo.png";
import styles from "./SideNav.module.css";

interface MenuProvider {
  name: string;
  path: string;
  icon: ReactNode;
}

const SideNav = () => {
  const navigation = useNavigate();

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

  const handleLogout = () => {
    if (confirm("정말 로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      navigation("/");
    }
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} width={108} alt="logoImage"></img>
        </Link>
        <Link to="/new" className={styles.newButton}>
          <GoLink className={styles.newIcon}></GoLink>
          <span style={{ marginLeft: "8px" }}>새 요약 만들기</span>
        </Link>
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
          <span className={styles.subMenuList} onClick={handleLogout}>
            로그아웃
          </span>
        </div>
      </div>
    </>
  );
};

export default SideNav;
