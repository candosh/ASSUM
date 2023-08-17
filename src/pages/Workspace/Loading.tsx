import Lottie from "lottie-react";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import Animation from '@src/assets/anim/animation_micloading.json';

export default function Loading() {
  return (
    
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
    </div>
  )
}