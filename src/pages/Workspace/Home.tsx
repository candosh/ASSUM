import { useState, useEffect } from 'react';
import styles from "@src/styles/Home.module.css"
//import NewFile from '@src/components/Wokspace/NewFile';
import { FaMicrophone } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import axios from 'axios';
import { useAtom } from 'jotai';
import { userIdAtom } from '@src/lib/stateJotai';

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
};


function Home() {
  const [userId] = useAtom(userIdAtom);

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
      fetchDataWithUserId();
    }
  }, [userId]);

  function NewFile() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>새로운 파일 1</p>
              <p className={styles.newfileSub}>6호 태풍 '카눈'이 북상하며 영남 내륙을 통과중이다. 태풍은 대구 북서쪽을 지나갔고, 북서쪽으로 이동하 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.10 12:39</p>
          </div>
          <div className={styles.newfileLength}>
            <p>12분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }


  return (
    <>
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
            <NewFile />
            <NewFile />
            <NewFile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;