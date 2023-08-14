import { useState } from 'react';
import styles from "@src/styles/All.module.css"
import NewFile from '@src/components/Wokspace/NewFile';
import { BiSearch } from "react-icons/bi";

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


function All() {
  const handleSearch = (searchTerm: string) => {
    console.log('검색어:', searchTerm);
    // 검색 로직 구현
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>전체 파일</div>
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

export default All;