import React from 'react'
import './Hero.css'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'
import arrow_btn from '../../assets/arrow_btn.png'

function Hero({herodata,playstatus,setPlaystatus,herocount,setHerocount}) {


  return (
    <div className='hero'>
        <div className='hero-data'>
            <p>{herodata.text1}</p>
            <p>{herodata.text2}</p>
        </div>
        <div className='hero-explore'>
            <p>Explore the features</p>
            <img src={arrow_btn} alt=''></img>
        </div>
        <div className='hero-dot-play'>
            <ul className='hero-dots'>
                <li onClick={()=>setHerocount(0)} className={herocount===0 ?"hero-dot orange": "hero-dot"}></li>
                <li  onClick={()=>setHerocount(1)} className={herocount===1 ?"hero-dot orange": "hero-dot"}></li>
                <li  onClick={()=>setHerocount(2)} className={herocount===2 ?"hero-dot orange": "hero-dot"}></li>
            </ul>
            <div className='hero-play'>
                <img onClick={()=>{setPlaystatus(!playstatus)}} src={playstatus?pause_icon:play_icon}/>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero