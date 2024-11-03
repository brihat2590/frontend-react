import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  const herodata=[
    {text1:"dive into",text2:"what you love"},
    {text1:"Indulge in ",text2:"Your Passions"},
    {text1:"Give into",text2:"Your Preference"}
  ]
  const [herocount,setHerocount]=useState(2)
  const [playstatus,setPlaystatus]=useState(false)
  useEffect(()=>{
    setInterval(() => {
      setHerocount((count)=>{return count===2?0:count+1})
      
    }, 5000);
  },[])


  
  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount}/>
      <Navbar/>
      <Hero playstatus={playstatus} herocount={herocount} setHerocount={setHerocount} herodata={herodata[herocount]} setPlaystatus={setPlaystatus}/>
    </div>
  )
}

export default App