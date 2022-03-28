import styled from "styled-components";

const Cont = styled.div`
    width: 100%;
    height:20vh;
    border-radius: 10px;
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-image: url(${props=>props.url});
    background-repeat: no-repeat;
    background-size: contain;
`

const HeadBox = styled.div`
    margin-top: 3%;
    margin-left: 2%;
`

const Header = styled.p`
    font-size: 14px;
    color: #ccc;
`

const Text = styled.p`
    position: relative;
    top: 80%;
    right: 2%;
    font-size: 14px;
    color: #ccc;
`

const BottomBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 3%;
`

const Stars = styled.img`
    margin-left: 2%;
    margin-bottom: 2%;
`

export default function L_Cont ({
    header = '',
    location = '',
    url = "",
    img_url = ""
}){
    return<Cont url={url} onError={(event) => event.target.style.display = 'none'} >
        <HeadBox>
            <Header>{header}</Header>
        </HeadBox>
        <BottomBox>
            <Stars src={img_url} />
            <Text>{location}</Text>
        </BottomBox>
    </Cont>
}