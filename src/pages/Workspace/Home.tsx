import { useState, useEffect } from 'react';
import styles from "@src/styles/Home.module.css"
import axios from 'axios';
import SideNav from '@src/components/Wokspace/SideNav';

type KeywordRank = {
  keyword: string;
  count: number;
}

type ApiResponse = {
  age: number;
  keywordRanks: KeywordRank[];
}

export default function Home() {
  const [dataList, setDataList] = useState<ApiResponse[]>([]);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const fetchKeywordRanking = async () => {
    try {
      const res = await axios.get<ApiResponse[]>(`https://www.assum.store/keywords/keywordRanking`);
      console.log('home.tsx 리스트 가져오기 성공', res);

      // 나이대 순서대로 정렬
      const sortedData = res.data.sort((a, b) => a.age - b.age);
      setDataList(sortedData);
    } catch (err) {
      console.error('home.tsx 서버 요청 실패:', err);
    }
  };

  // 선택된 연령대에 해당하는 데이터를 필터링하여 반환
  const getFilteredData = () => {
    if (selectedAge === null) {
      return dataList; // 선택된 연령대가 없으면 전체 데이터 반환
    }
    return dataList.filter(data => data.age === selectedAge);
  };

  useEffect(() => {
    fetchKeywordRanking();
  }, []);

  return (
    <>
      <SideNav />
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>요약 키워드 순위</div>
        </div>
        <div className={styles.keywordBox}>
          <div>
            <p><h3>나이대별 키워드 순위</h3></p>
          </div>
          <div>
            <button onClick={() => setSelectedAge(10)}>10대</button>
            <button onClick={() => setSelectedAge(20)}>20대</button>
            <button onClick={() => setSelectedAge(30)}>30대</button>
            <button onClick={() => setSelectedAge(40)}>40대</button>
            <button onClick={() => setSelectedAge(50)}>50대</button>
            <button onClick={() => setSelectedAge(60)}>60대 이상</button>
          </div>
          <div className={styles.keywords}>
            {getFilteredData().map(data => (
              <div key={data.age}>
                <ul>
                  {data.keywordRanks.slice(0, 10).map((rank, index) => (
                    <li key={index} className={styles.indexBox}>
                      <span className={styles.rank}>{index + 1}위</span>
                      <span> {rank.keyword} </span>
                      <span> +{rank.count} </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


