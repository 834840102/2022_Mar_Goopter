import styled from "styled-components";

const Cont = styled.div`
    width: 50%;
    height:20vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background-image: url(${props=>props.url});
    background-repeat: no-repeat;
    background-size: contain;
`

const Text = styled.p`
    font-size: 14px;
    color: #ccc;
    margin-left: 2%;
    margin-top:2%;
`

const Stars = styled.img`
    margin-left: 2%;
    margin-bottom: 2%;
`

export default function S_Cont ({
    header = '',
    url = "",
    rating = "",
}){
    return<Cont url={url}  onError={(event) => event.target.style.display = 'none'} >
            <Text>{header}</Text>
            <Stars src={rating}/>
    </Cont>
}