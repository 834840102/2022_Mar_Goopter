import styled from "styled-components";

const Cont = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    background-color: #2db59d;
`

const DropDown = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 22px;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
`

const Arrow =styled.img`
    width: 20px;
    height: 20px;
    margin-left: 8px;
    position: relative;
    top: 2px;
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 2%;
`

export default function HeaderBar ({
    text = "",
}) {
    return <Cont>
        <Logo src="/icons/goopter_logo_white.png" />
        <DropDown>
            {text}
            <Arrow src="/icons/down-caret.svg" />            
        </DropDown>        
        <Icon src="/icons/more-svgrepo-com.svg" />        
    </Cont>
}