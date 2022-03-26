import styled from "styled-components";

const Cont = styled.div`
    width: 100%;
    height:10vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background-image: url(${props=>props.url});
`

const HeadBox = styled.div`
    margin-top: 3%;
    margin-left: 2%;
`

const Text = styled.p`
    font-size: 14px;
    color: #ccc;
    margin-right: 2%;
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
    return<Cont url={url}>
        <HeadBox>
            <Text>{header}</Text>
        </HeadBox>
        <BottomBox>
            <Stars src={img_url} />
            <Text>{location}</Text>
        </BottomBox>
    </Cont>
}