import { useState, useEffect } from 'react';
import styles from "@src/styles/All.module.css";
import { BiSearch } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
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

export default function All() {
  const userId = useAtomValue(userIdAtom);
  const [fileData, setFileData] = useState<{ title: string }[]>([]);

  const fetchDataWithUserId = async () => {
    try {
      const res = await axios.get(`https://www.assum.store/${userId}/all`);
      setFileData(res.data);
      console.log('all.tsx 서버 요청 성공', res);
    } catch (err) {
      console.error('all.tsx 서버 요청 실패:', err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDataWithUserId();
    }
  }, [userId]);

  return (
    <div>
      <SideNav />
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>전체 파일</div>
          <SearchBar onSearch={() => { }} />
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
            {fileData.map((file, index) => (
              <NewFileItem key={index} fileTitle={file.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//아래 뿌려주는 부분 서버 수정 후 변경해줘야 함!
//이거 수정 후 Home.tsx도 바꿔 놓겠습니다!
function NewFileItem({ fileTitle }: { fileTitle: string }) {
  return (
    <div className={styles.newroot}>
      <div className={styles.newbody}>
        <div className={styles.newfilesWrapper}>
          <div className={styles.newicon}>
            <FaMicrophone className={styles.newiconVoice} />
          </div>
          <div className={styles.newfileNameWrapper}>
            <p className={styles.newfileName}>{fileTitle}</p>
            <p className={styles.newfileSub}>
              전체 요약글
            </p>
          </div>
        </div>
        <div className={styles.newfileDate}>
          <p>2023.08.18 11:46</p>
        </div>
        <div className={styles.newfileLength}>
          <p>10분</p>
        </div>
      </div>
      <hr className={styles.newbreakline} />
    </div>
  );
}