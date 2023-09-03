import { useState, useEffect } from 'react';
import styles from "@src/styles/Home.module.css"
import axios from 'axios';
import SideNav from '@src/components/Wokspace/SideNav';
import WordCloud, { Options } from 'react-wordcloud';

type KeywordRank = {
  keyword: string;
  count: number;
}

type Word = {
  text: string;
  value: number;
}

type ApiResponse = {
  age: number;
  keywordRanks: KeywordRank[];
}

export default function Home() {
  const [dataList, setDataList] = useState<ApiResponse[]>([]);
  const [dataTotalList, ] = useState<ApiResponse[]>([]);
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

  const fetchKeywordTotal = async () => {
    try {
      const res = await axios.get<ApiResponse[]>(`https://www.assum.store/keywords/keywordTotalRanking`);
      console.log('home.tsx 전체리스트 가져오기 성공', res);
      // 0대 데이터를 dataList에 추가
      const zeroAgeData = res.data.find(data => data.age === 0);
      if (zeroAgeData) {
        setDataList(prevDataList => [...prevDataList, zeroAgeData]);
      }
    } catch (err) {
      console.error('home.tsx 전체리스트 서버 요청 실패:', err);
    }
  };

  // 선택된 연령대에 해당하는 데이터를 필터링하여 반환
  const getFilteredData = () => {
    if (selectedAge === null) {
      const zeroAgeData = dataList.find(data => data.age === 0);
      if (zeroAgeData) {
        return [zeroAgeData];
      }
      return [];
    }
    return dataList.filter(data => data.age === selectedAge);
  };

  useEffect(() => {
    fetchKeywordRanking();
    fetchKeywordTotal();
  }, []);

  const ageButtons = [
    { label: '전체', age: 0 },
    { label: '10대', age: 10 },
    { label: '20대', age: 20 },
    { label: '30대', age: 30 },
    { label: '40대', age: 40 },
    { label: '50대', age: 50 },
    { label: '60대 ~', age: 60 },
  ];

  // KeywordRank 배열을 Word 배열로 변환하는 함수
  const convertToWords = (keywordRanks: KeywordRank[]): Word[] => {
    return keywordRanks.map((rank) => ({
      text: rank.keyword,
      value: rank.count,
    }));
  };

  const wordCloudOptions: Options = {
    rotations: 3,
    fontSizes: [20, 60],
    colors: ["#E91E63", "#FFC107", "#FF9800","#F44336", 
    "#CDDC39", "#4CAF50","#00BCD4", "#2196F3", "#673AB7", 
    "#E040FB","#009688","#00bfff","#9C27B0"],
    deterministic: true,
    enableOptimizations: true,
    enableTooltip: true,
    fontFamily: "SUIT Variable",
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotationAngles: [0, 0],
    scale: 'linear',
    spiral: 'archimedean',
    svgAttributes: {},
    textAttributes: {},
    tooltipOptions: {},
    transitionDuration: 0
  };

  return (
    <>
      <SideNav />
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.title}>요약 키워드 순위</div>
        </div>
        <div className={styles.body}>
          <div className={styles.wordCloudBox}>
            {selectedAge !== null ? (
              <div className={styles.wordCloud}>
                <h3>{selectedAge === 0 ? "전체 워드 클라우드" : `${selectedAge}대 워드 클라우드`}</h3>
                <WordCloud 
                  words={convertToWords(getFilteredData()[0]?.keywordRanks.slice(0,60))} 
                  options={wordCloudOptions}
                />
              </div>
            ) : (
              <div className={styles.wordCloud}>
                <h3>전체 워드 클라우드</h3>
                <WordCloud 
                  words={convertToWords(dataList.find(data => data.age === 0)?.keywordRanks.slice(0,60) || [])} 
                  options={wordCloudOptions}
                />
              </div>
            )}
          </div>
          <div className={styles.keywordBox}>
            <div>
              <p><h3>나이대별 키워드 순위</h3></p>
            </div>
            <div className={styles.buttonWrap}>
              {ageButtons.map((buttonData, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAge(buttonData.age)}
                  className={selectedAge === buttonData.age ? styles.selectedButton : ''}
                >
                  {buttonData.label}
                </button>
              ))}
            </div>
            <div className={styles.totalKeywordBox}>
              <ul>
                {dataTotalList.map(data => (
                  <ol>
                    {data.keywordRanks.slice(0, 10).map((rank, index) => (
                      <li key={index}>
                        <span className={styles.rank}>{index + 1}위</span>
                        <span> {rank.keyword} +{rank.count} </span>
                      </li>
                    ))}
                  </ol>
                ))}
              </ul>
            </div>
            <div className={styles.keywords}>
              {getFilteredData().map(data => (
                <div key={data.age}>
                  <ul>
                    {data.keywordRanks.slice(0, 10).map((rank, index) => (
                      <li key={index} className={styles.indexBox}>
                        <span className={styles.rank}>{index + 1}위</span>
                        <span> {rank.keyword} </span>
                        <span style={{ color: "#00BFFF", fontWeight: "600"}}> +{rank.count} </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}


