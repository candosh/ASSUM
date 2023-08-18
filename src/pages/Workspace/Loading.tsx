import Lottie from "lottie-react";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import Animation from '@src/assets/anim/animation_micloading.json';
import SideNav from "@src/components/Wokspace/SideNav";

export default function Loading() {
  return (
    <>
      <SideNav />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '300px',
        width: '95%',
        height: '720px'
      }}>
        <Lottie
          loop
          animationData={Animation}
          style={{
            width: '30%', 
            height: 'auto'
          }}
        />
        <h1 style={{ fontWeight: '800' }}>로딩 중...</h1>
        <p style={{ fontSize: "15px" ,fontWeight: '400' }}>약 10초의 시간이 걸립니다</p>
      </div>
    </>
  )
}