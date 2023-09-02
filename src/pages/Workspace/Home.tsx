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
        <div>
          <p><h3>나이대별 키워드 순위</h3></p>
        </div>
        <div>
          {dataList.map(data => (
            <div key={data.age}>
              {/* 60 이상의 나이는 "60대 이상"으로 표시, 그 외는 "xx대"로 표시 */}
              <h3>{data.age >= 60 ? '60대 이상' : `${data.age}대`}</h3>
              <ul>
                {data.keywordRanks.slice(0, 10).map((rank, index) => (
                  <li key={index}>
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
    </>
  );
}


