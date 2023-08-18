import { useState, useEffect } from 'react';
import styles from "@src/styles/All.module.css"
import { BiSearch } from "react-icons/bi";
//import styles from "@src/styles/NewFile.module.css";
import { FaMicrophone } from "react-icons/fa";
import axios from 'axios';
import { useAtom } from 'jotai';
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
  const [userId] = useAtom(userIdAtom);

  const fetchDataWithUserId = async () => {
    try {
      const res = await axios.get(`https://www.assum.store/${userId}/all`);
      console.log('데이터 가져오기', res);
    } catch (err) {
      console.error('서버 요청 실패:', err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDataWithUserId();
    }
  }, [userId]);

  const handleSearch = (searchTerm: string) => {
    console.log('검색어:', searchTerm);
    // 검색 로직 구현
  };


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
              <p className={styles.newfileSub}>메시는 바르셀로나에서 떠나기로 결정한 후 파리 생제르맹(PSG)을 거부하고 미국의 인터 마이애미로 이 ...</p>
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


  function NewFile3() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>김하성, 내야수 최초 GG 가능성 높아져</p>
              <p className={styles.newfileSub}>김하성이 1루와 3루에서 높은 수비 실력을 보여주며 내야수 최초로 골드글러브 수상 가능성을 높였다. 그 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18 10:37</p>
          </div>
          <div className={styles.newfileLength}>
            <p>8분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }


  function NewFile4() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>강원도, 태풍 '카눈' 피해지역에 응급 복구비 20억원 지원</p>
              <p className={styles.newfileSub}>강원도는 제6호 태풍 '카눈'이 북상하면서 피해를 본 고성군 등에 응급 복구비 20억원을 긴급 지원한다고 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18 10:20</p>
          </div>
          <div className={styles.newfileLength}>
            <p>11분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }


  function NewFile5() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>셀트리온, 셀트리온헬스케어 흡수합병…관전 포인트는</p>
              <p className={styles.newfileSub}>18일 셀트리온과 셀트리온헬스케어의 합병으로 증권가는 긍정적인 평가를 내렸다. 하지만 20일 오후 셀 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18  9:20</p>
          </div>
          <div className={styles.newfileLength}>
            <p>4분</p>
          </div>
        </div>
        <hr className={styles.newbreakline}></hr>
      </div>
    );
  }


  function NewFile6() {
    return (
      <div className={styles.newroot}>
        <div className={styles.newbody}>
          <div className={styles.newfilesWrapper}>
            <div className={styles.newicon}>
              <FaMicrophone className={styles.newiconVoice}></FaMicrophone>
            </div>
            <div className={styles.newfileNameWrapper}>
              <p className={styles.newfileName}>50년 주담대' 시대 연 NH농협은행, 9월부터 판매 중단…"한도 소진</p>
              <p className={styles.newfileSub}> NH농협은행이 50년 만기 주택담보대출(주담대) 상품을 이번달까지만 판매하기로 했다. 한도로 계획한 ...</p>
            </div>
          </div>
          <div className={styles.newfileDate}>
            <p>2023.08.18  9:05</p>
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
    <div>
      <SideNav />
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
            <NewFile1 />
            <NewFile2 />
            <NewFile3 />
            <NewFile4 />
            <NewFile5 />
            <NewFile6 />
          </div>
        </div>
      </div>
    </div>
  );
}