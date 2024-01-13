import { useState, useEffect } from "react";
import styles from "@src/pages/Home/All.module.css";
import { FaMicrophone } from "react-icons/fa";
import axios from "axios";
import SideNav from "@src/components/Wokspace/SideNav";
import { FiChevronLeft } from "react-icons/fi";
import SearchBar from "@src/components/Search/SearchBar";

// '히스토리': 전체파일 페이지

interface File {
  title: string;
  keyword: string[];
  link: string;
  text?: string;
}

export default function All() {
  const [list, setList] = useState<
    { title: string; keyword: string[]; link: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태를 관리
  const [selectedFile, setSelectedFile] = useState<File | null>({
    title: "",
    keyword: [],
    link: "",
    text: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<File[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchDataWithToken = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const res = await axios.get(`https://www.assum.store/all`, config);
        console.log(res.data);
        setList(res.data);
        console.log("all.tsx 서버 요청 성공", res);
      } catch (err) {
        console.error("all.tsx 서버 요청 실패:", err);
      }
    };

    fetchDataWithToken();
  }, []);

  // 파일 클릭 시 모달 열기
  const handleFileClick = (file: File) => {
    setSelectedFile(file);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedFile(null);
    setIsModalOpen(false);
  };

  // 검색 함수
  const handleSearch = async () => {
    if (!searchTerm) return;

    const accessToken = localStorage.getItem("accessToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        `https://www.assum.store/findByKeyword?title=${searchTerm}`,
        config
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("검색 요청 실패:", error);
    }
  };

  return (
    <div>
      <SideNav />
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>전체 파일</div>
          <SearchBar
            onSearch={(value) => setSearchTerm(value)} // 검색어 입력 시 setSearchTerm 호출
            onSearchEnter={() => handleSearch()} // 엔터를 누르면 검색 실행
          />
        </div>
        <div className={styles.body}>
          <div className={styles.titleWrapper}>
            <div className={styles.titles}>
              <div className={styles.fileName}>파일 이름</div>
            </div>
            <hr className={styles.breakline}></hr>
          </div>
          <div className={styles.filesWrapper}>
            {(searchTerm ? searchResults : list)
              .slice()
              .reverse()
              .map((file, index) => (
                <div key={index} onClick={() => handleFileClick(file)}>
                  <NewFileItem
                    key={index}
                    fileTitle={file.title}
                    fileKeyword={file.keyword}
                    fileLink={file.link}
                  />
                </div>
              ))}
            {/* 모달 열기 */}
            {isModalOpen && selectedFile && (
              <Modal file={selectedFile} onClose={handleCloseModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NewFileItem({
  fileTitle,
  fileKeyword,
  fileLink,
}: {
  fileTitle: string;
  fileKeyword: string[];
  fileLink: string;
}) {
  return (
    <div className={styles.newroot}>
      <div className={styles.newbody}>
        <div className={styles.newfilesWrapper}>
          <div className={styles.newicon}>
            <FaMicrophone className={styles.newiconVoice} />
          </div>
          <div className={styles.newfileNameWrapper}>
            <p className={styles.newfileName}>{fileTitle}</p>
          </div>
          <div className={styles.newKeywords}>
            {fileKeyword.map((keyword, index) => (
              <span key={index} className={styles.newKeyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.newLink}>
          <a href={fileLink} target="_blank" rel="noopener noreferrer">
            원문 링크
          </a>
          <hr />
        </div>
      </div>
      <hr className={styles.newbreakline} />
    </div>
  );
}

function Modal({ file, onClose }: { file: File; onClose: () => void }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={styles.modalBtnWrapper}>
          <button className={styles.backButton} onClick={onClose}>
            <FiChevronLeft className={styles.backicon} />
          </button>
        </div>
        <h2>{file.title}</h2>
        <p className={styles.modalKeywordWrap}>
          {file.keyword.map((keyword, index) => (
            <span key={index} className={styles.modalKeyword}>
              {keyword}
            </span>
          ))}
        </p>
        <p className={styles.modalText}>{file.text}</p>
        <p className={styles.modalLink}>
          <a href={file.link} target="_blank" rel="noopener noreferrer">
            원문링크
          </a>
        </p>
      </div>
    </div>
  );
}
