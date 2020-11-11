import React,{useRef,useState} from 'react'
import styled from 'styled-components';

import SwiperCore, {Scrollbar,EffectCube } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([ Scrollbar,EffectCube]);

const Div=styled.div`
background-color:#000;
box-shadow:0px -30px 70px 50px rgba(0,0,0,1);
height:100%;
width:100%;
`
const StartingContent=styled.div`
position: relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;

`
const CarouselOne=styled.div`
position:relative;
display:flex;
align-content:center;
justify-content:center;
margin:10px;
`
const CarouselTwo=styled.div`
position:relative;
display:flex;
align-content:center;
justify-content:center;
margin-top:30px;
overflow:hidden;
width:300px
`
const VideoWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const ImgWrapper=styled.div`
width:30%;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:900px){
    width:100%;
}
`
const ImgWrapper2=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Paragraph=styled.p`
display:flex;
flex-direction:column;
position:relative;
align-items:center;
justify-content:center;
color:#fff;
width:50%;
@media (max-width:900px){
    width:100%;
    padding:10px;
}
`
const ImageContainer=styled.div`
height:200px;
width:200px;
position:relative;
`
function CalledContent({img, videoRound}) {
    const videoRef=useRef('')
    const [currentTime,setCurrentTime]=useState(0);
    let duration
    if(videoRef.current.duration){
         duration=videoRef.current.duration.toFixed(0)
    }
    function handleCurrentTime(){
        if(videoRef.current !== undefined && videoRef.current !==null){
            const currentTime=videoRef.current.currentTime
            setCurrentTime(currentTime);
        }
        else{
            return
        }
        
    }
   setInterval(handleCurrentTime,1000)
    return (
        <Div>
            <StartingContent>
            <Paragraph>
            <p>
            <span style={{color:"#FFBF00",fontSize:"4rem",fontWeight:"600",float:"left",margin:"30px"}}> L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Sit amet aliquam id diam maecenas ultricies. Dictum sit amet justo donec enim diam vulputate ut pharetra. Volutpat diam ut venenatis tellus in metus vulputate. In ornare quam viverra orci sagittis eu volutpat odio. Ut consequat semper viverra nam. Nunc sed augue lacus viverra vitae. Mattis pellentesque id nibh tortor. Ac ut consequat semper viverra nam libero justo laoreet sit. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Molestie ac feugiat sed lectus vestibulum mattis.Amet est placerat in egestas erat imperdiet sed euismod nisi. Est placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et netus et malesuada. Lectus sit amet est placerat in egestas erat imperdiet. Ut eu sem integer vitae justo eget magna fermentum. Nisi est sit amet facilisis magna etiam tempor. Donec enim diam vulputate ut pharetra sit. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Eget aliquet nibh praesent tristique magna sit amet purus. Enim facilisis gravida neque convallis a cras. Sit amet dictum sit amet justo donec. Lectus quam id leo in vitae turpis massa sed. Amet justo donec enim diam vulputate ut pharetra sit amet. Vulputate sapien nec sagittis aliquam malesuada bibendum. Urna cursus eget nunc scelerisque. Eget dolor morbi non arcu risus. Egestas diam in arcu cursus euismod quis viverra nibh. Sapien eget mi proin sed libero enim sed. Eget magna fermentum iaculis eu. Purus gravida quis blandit turpis cursus.
            </p>
            </Paragraph>
          
            </StartingContent>
           <CarouselOne>
            <ImgWrapper>
         <Swiper
              spaceBetween={50}
              slidesPerView={2}
              scrollbar={{ draggable: true }}  
            >
              <SwiperSlide><ImageContainer><img src={img[0]} alt=""/></ImageContainer></SwiperSlide>
              <SwiperSlide><ImageContainer><img src={img[1]} alt=""/></ImageContainer></SwiperSlide>
              <SwiperSlide><ImageContainer><img src={img[2]} alt=""/></ImageContainer></SwiperSlide>
              <SwiperSlide><ImageContainer><img src={img[3]} alt=""/></ImageContainer></SwiperSlide>
            </Swiper>
           
            </ImgWrapper>
            </CarouselOne>
            <StartingContent>
            <Paragraph>
            <h1 style={{color: "rgb(255, 191, 0)",fontSize:"2rem",marginBottom:"20px"}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet</h1>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est asperiores, odio repudiandae accusantium impedit architecto omnis cum, cumque facere sequi, quasi quod vel. Nobis eligendi vel voluptatem dolore eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est asperiores, odio repudiandae accusantium impedit architecto omnis cum, cumque facere sequi, quasi quod vel. Nobis eligendi vel voluptatem dolore eum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est asperiores, odio repudiandae accusantium impedit architecto omnis cum, cumque facere sequi, quasi quod vel. Nobis eligendi vel voluptatem dolore eum!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est asperiores, odio repudiandae accusantium impedit architecto omnis cum, cumque facere sequi, quasi quod vel. Nobis eligendi vel voluptatem dolore eum!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est asperiores, odio repudiandae accusantium impedit architecto omnis cum, cumque facere sequi, quasi quod vel. Nobis eligendi vel voluptatem dolore eum  
           </p>
           <hr style={{height:"3px",color:"#fff",width:"50%",backgroundColor:"grey",margin:"20px"}}/>
       </Paragraph>
       </StartingContent>
       
       <StartingContent>
       
       <VideoWrapper>

       <div className="second__video-container"  style={{width:"200px",height:"200px",color:"#fff",borderRadius:"50%"}}>
       <video ref={videoRef} height="100%" width="100%" src={videoRound} autoPlay
       loop muted style={{objectFit:"cover",borderRadius:"50%"}}></video>
       <div className="timestamp" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
       <p>{currentTime.toFixed(0)}</p> <p>{duration}</p>
       </div>
       
       </div>
       </VideoWrapper>
       </StartingContent>
       <StartingContent>
       <div className="para" style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#fff",marginTop:"30px",width:"300px"}}><p>Video Replis(181)</p> <p>See all</p></div>
        <CarouselTwo>
        <ImgWrapper2>    <Swiper
      slidesPerView={2}
      scrollbar={{draggable:true}}
      spaceBetween={30}
      >
          <SwiperSlide ><ImageContainer><img src={img[4]} alt=""/></ImageContainer></SwiperSlide>
          <SwiperSlide><ImageContainer><img src={img[5]} alt=""/></ImageContainer></SwiperSlide>
          <SwiperSlide><ImageContainer><img src={img[6]} alt=""/></ImageContainer></SwiperSlide>
          <SwiperSlide><ImageContainer><img src={img[7]} alt=""/></ImageContainer></SwiperSlide>
          <SwiperSlide><ImageContainer><img src={img[8]} alt=""/></ImageContainer></SwiperSlide>
      </Swiper></ImgWrapper2>
        </CarouselTwo> 
     
    
       </StartingContent>
      
        </Div>
    )
}

export default CalledContent
