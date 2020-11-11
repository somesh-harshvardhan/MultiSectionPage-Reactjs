
import React,{ useState} from 'react'
import styled from 'styled-components';
import './ContentBuilder.css'
import CalledContent from './CalledContent'

import {AiOutlineEye,AiOutlineVideoCamera} from 'react-icons/ai'
import {FaRegDotCircle,FaGlobeAfrica} from 'react-icons/fa'
import {BiArrowFromLeft,BiBookmark} from 'react-icons/bi'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import {IconContext} from 'react-icons/lib'



const Content=styled.div`
position:relative;
top:52%;
left:10%;
@media (max-width: 900px){
    font-size:1rem;
    top:12%;
    left:3%
}
`
const Button=styled.div`
position:absolute;
top:80%;
left:10%;
display:flex;
justify-content:flex-start;
align-items:center;
@media (max-width: 900px){
    font-size:20px;
    top:70%;
    left:3%
}

`
const Header=styled.h1`
font-size:2.4rem;
color: #ffffff;
width:50%;
position:relative;
top:45%;
left:10%;
@media (max-width: 900px){
    font-size:2rem;
    top:10%;
    left:3%
}  

`
const Sectionone=styled.section`
position:relative;
overflow:hidden;
height:110vh;
`

function ContentBuilder({ headerMain,videosrc,img, videoRound,handleEffect1,handleEffect2}) {
    const [caller,setCaller]=useState(false)
   

   window.addEventListener('scroll',(event)=>{
       if(window.scrollY> 58 ){
           setCaller(true);
           handleEffect1();
       }
       else {
           setCaller(false);
           handleEffect2();
       }
   })
    return (
        <>

            <Sectionone>
            <video className="video" loop autoPlay muted src={videosrc} type="mp4/video">
                 Your Browser Doesnt Support Video
            </video>
            <Header>{ headerMain}</Header>
            <Content>
                 <div className="icon-container">
                     <img src="https://randomuser.me/api/portraits/women/9.jpg" alt=""/>
                 </div>
                 <div className="status">
                     <div className="name"><p>Alex Robinson</p></div>
                     <div className="descrip"><span>
                     <AiOutlineEye/>  564 
                     </span>
                     <span><FaRegDotCircle/> 123</span>
                     <span><FaGlobeAfrica/> 2mins ago</span>  </div>
                     
                 </div>
                 <div className="link"><BiArrowFromLeft/></div>
                 <div className="link"><BiBookmark/></div>
                  <p style={{clear:"both",color:"#fff"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              </Content>
              <Button>
              <IconContext.Provider  value={{size:"1rem"}}>
              <button><BsBoxArrowInUpRight /> <span>Read More</span> </button>
              <button><AiOutlineVideoCamera/> <span> Reply</span></button>
              </IconContext.Provider>
                   
              </Button>
            </Sectionone>
            {
            caller ? <CalledContent img={img} videoRound={videoRound}/> : ""
            }
       </>
      
    )
}

export default ContentBuilder
