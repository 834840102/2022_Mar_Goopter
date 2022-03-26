import styled from "styled-components";

const Cont = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width:40px;
    height:40px;
`

const Text = styled.p`
    font-size: 14px;
    color: #ccc;
`

export default function NavigationIcon ({
    url = '',
    text = ''
}) {
    return <Cont>
        <Img src={url}/>
        <Text>{text}</Text>
    </Cont>
}