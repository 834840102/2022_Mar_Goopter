import styled from "styled-components"
import axios from "axios"
import { useState,useEffect } from "react"

import HeaderBar from "@/comps/HeaderBar"
import Store from "@/comps/Store"
import S_Cont from "@/comps/SmallCont"
import L_Cont from "@/comps/LargeCont"
import NavigationIcon from "@/comps/NavigationIcon"

const Cont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  min-height: 100vh;
`

const StoreCont = styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  margin-top: 13vh;
`

const BannerCont = styled.div`
  width:100%;
  min-height: 100vh; 
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  margin-top:10vh;
  margin-bottom: 10vh;
  `

const NavigationBar = styled.div`
  display:flex;
  width:100%;
  position: fixed;
  bottom: 0px;
  left:0px;
`

export default function Home() {

  const [city, setCity] = useState("")
  const [store, setStore] = useState([])
  const [banner, setBanner] = useState([])
//get the city name on the top
  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/city?lan=en&cntry=1')
      .then(function(response){
        //console.log(res.data.records[0].name)
        setCity(response.data.records[0].name)
      })
      .catch(function(error){
        console.log(error)
      })
  },[])
//get the store data
  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/hs?city=1&lan=en')
      .then(function(response){
        //console.log(res.data.records)
        setStore(response.data.records)
      })
      .catch(function(error){
        console.log(error)
      })
  },[])

//get the banner data
  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/hlst?latlon=49.213366,-122.988651&lan=en&page=1&limit=20&city=1&c_id=1')
      .then(function(response){
        //console.log(res.data.records)
        for(var i =0; i < response.data.records.length; i++){
          if(response.data.records[i].width == 0){
            delete response.data.records[i]
          }
        }
        setBanner(response.data.records)
      })
      .catch(function(error){
        console.log(error)
      })
  },[])



  return (
    <Cont>
      <HeaderBar text={city} />
      <StoreCont>
        {store.map((o, i)=><Store url={o.img} text={o.name}></Store>)}
      </StoreCont>
      <BannerCont>
        
        {banner.sort((a,b)=>{
          return (a.width - b.width)
        }).map((o, i)=>{
          if(o.width == 2){
            console.log(banner)
            return <S_Cont url={'https://res.cloudinary.com/goopterdev' + o.i_url} header={o.name} rating={o.rating} key={i}></S_Cont>
          }else if(o.width == 4){
            return <L_Cont url={'https://res.cloudinary.com/goopterdev' + o.i_url} header={o.name} rating={o.rating} location={o.city} key={i}></L_Cont>
          }
        })}
      </BannerCont>
      <NavigationBar>
        <NavigationIcon url="/icons/i_home.png" text="Home"/>
        <NavigationIcon url="/icons/i_hot.png" text="What's Hot"/>
        <NavigationIcon url="/icons/i_order.png" text="Order"/>
        <NavigationIcon url="/icons/i_my_account.png" text="Account"/>
      </NavigationBar>
    </Cont>
  )
}

//one cont to cover two types of banner