import React,{useState} from 'react'
import ContentBuilder from './ContentBuilder'
import {slideOne,slideTwo,slideThree} from './Object'
import SwiperCore, { EffectCube} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/effect-cube/effect-cube.scss'

SwiperCore.use([EffectCube])

function Hero() {
  const [effect,setEffect]=useState(true)
  const handleEffect1=()=>{
      setEffect(false)
  }
  const handleEffect2=()=>{
    setEffect(true)
  }
    return (
        <div>
         <Swiper 
        touchRatio={effect ? 1:0} 
        cubeEffect={{slideShadows:false,shadow:false,shadowScale:0,shadowOffset:0}} 
        touchReleaseOnEdges={true}
        threshold={30}
         effect= "cube">
             <SwiperSlide><ContentBuilder {...slideOne} handleEffect1={handleEffect1} handleEffect2={handleEffect2}/> </SwiperSlide>
             <SwiperSlide><ContentBuilder {...slideTwo} handleEffect1={handleEffect1} handleEffect2={handleEffect2}/></SwiperSlide>
             <SwiperSlide><ContentBuilder {...slideThree} handleEffect1={handleEffect1} handleEffect2={handleEffect2}/></SwiperSlide>
         </Swiper>
           
        </div>
    )
}

export default Hero
