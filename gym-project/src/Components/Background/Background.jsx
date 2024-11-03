import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image11 from '../../assets/image11.jpg'
import image22 from '../../assets/image22.jpg'
import image33 from '../../assets/image33.jpg'

function Background({playstatus,herocount}) {
    if(playstatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
            <source src={video1} type='video/mp4'></source>
        </video>
        )
        
    }
    else if(herocount==0){
        return(
            <img src={image11} alt='' className='background fade-in'/>
        )

    }
    else if(herocount==1){
        return(
            <img src={image22} className='background fade-in' alt=''/>
        )
    }
    else if(herocount==2){
        return(
            <img src={image33} className='background fade-in' alt=''/>
        )
    }
 
}

export default Background