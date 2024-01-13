import React, { useState } from "react";
import styles from "@src/components/Search/SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

// 검색 바 컴포넌트
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  onSearchEnter: () => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSearchEnter }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchEnter();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <BiSearch className={styles.iconSearch}></BiSearch>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className={styles.searchBar}
      />
    </div>
  );
};

export default SearchBar;
