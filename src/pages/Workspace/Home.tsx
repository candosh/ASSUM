import { useState, useEffect } from 'react';
import styles from "@src/styles/Home.module.css"
import { FaMicrophone } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import axios from 'axios';
import { useAtomValue } from 'jotai';
import { userIdAtom } from '@src/lib/stateJotai';
import SideNav from '@src/components/Wokspace/SideNav';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.inputContainer}>
      <BiSearch className={styles.iconSearch}></BiSearch>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchBar}
      />
    </div>
  );
};

const handleSearch = (searchTerm: string) => {
  console.log('검색어:', searchTerm);
  // 검색 로직 구현
  // 예를 들면, searchTerm을 사용하여 서버에 검색 요청을 보낼 수 있습니다.
};

function Home() {
  const userId = useAtomValue(userIdAtom);
  console.log(userId);

  const fetchDataWithUserId = async () => {
    try {
      const res = await axios.get(`https://www.assum.store/${userId}/home`);
      console.log('홈으로 이동', res);

    } catch (err) {
      console.error('서버 요청 실패:', err);
    }
  };

  useEffect(() => {
    if (userId) {
      console.log("userId 로딩:", userId); // userId 값 확인
      fetchDataWithUserId();
    }
  }, [userId]);

  function NewFile1() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>위메이드 "국내외 3개 게임사와 '위믹스 플레이' 온보딩 계약</p>
              <p className={styles.newfileSub}>위메이드는 여러 국내외 게임사와 블록체인 게임 플랫폼 '위믹스 플레이' 온보딩(연동) 계약을 체결했다고 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18 11:46</p>
          </div>
          <div className={styles.newfileLength}>
            <p>10분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }


  function NewFile2() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>메시가 미국 '꼴찌'로 이적한 이유와 이적 결정 고백</p>
              <p className={styles.newfileSub}>메시는 바르셀로나에서 떠나기로 결정한 후 파리 생제르맹(PSG)을 거부하고 미국의 인터 마이애미로 이...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18 10:39</p>
          </div>
          <div className={styles.newfileLength}>
            <p>6분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }

  return (
    <>
      <SideNav />
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>최근 파일</div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className={styles.body}>
          <div className={styles.titleWrapper}>
            <div className={styles.titles}>
              <div className={styles.fileName}>파일 이름</div>
              <div className={styles.fileDate}>생성 일자</div>
              <div className={styles.fileLength}>길이</div>
            </div>
            <hr className={styles.breakline}></hr>
          </div>
          <div className={styles.filesWrapper}>
            <NewFile1 />
            <NewFile2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
