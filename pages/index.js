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
`

const StoreCont = styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  margin-top: 13vh;
`

const SmallBannerCont = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
`

const LargeBannerCont = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
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

  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/city?lan=en&cntry=1')
      .then(function(res){
        //console.log(res.data.records[0].name)
        setCity(res.data.records[0].name)
      })
      .catch(function(error){
        console.log(error)
      })
  },[])

  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/hs?city=1&lan=en')
      .then(function(res){
        console.log(res.data.records)
        setStore(res.data.records)
      })
      .catch(function(err){
        console.log(err)
      })
  },[])

  useEffect

  useEffect(()=>{
    axios.get('https://api-dev.goopter.com/api/v7/hlst?latlon=49.213366,-122.988651&lan=en&page=1&limit=20&city=1&c_id=1')
      .then(function(res){
        console.log(res.data.records)
        setBanner(res.data.records)
      })
      .catch(function(err){
        console.log(err)
      })
  },[])

  return (
    <Cont>
      <HeaderBar text={city} />
      <StoreCont>
        {store.map((o, i)=><Store url={o.img} text={o.name}></Store>)}
      </StoreCont>
      <SmallBannerCont>
        {banner.map((o, i)=>
        <S_Cont url={'https://res.cloudinary.com/goopterdev' + o.i_url} header={o.city} rating={o.rating}></S_Cont>)}
      </SmallBannerCont>
      <LargeBannerCont>
      {banner.map((o, i)=>
        <L_Cont url={'https://res.cloudinary.com/goopterdev' + o.i_url} header={o.city} rating={o.rating}></L_Cont>)}
      </LargeBannerCont>
      <NavigationBar>
        <NavigationIcon url="/icons/i_home.png" text="Home"/>
        <NavigationIcon url="/icons/i_hot.png" text="What's Hot"/>
        <NavigationIcon url="/icons/i_order.png" text="Order"/>
        <NavigationIcon url="/icons/i_my_account.png" text="Account"/>
      </NavigationBar>
    </Cont>
  )
}
