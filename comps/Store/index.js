import styled from "styled-components";

const Cont = styled.div`
    display: flex;
    width: 50px;
    height:50px;
    flex-direction: column;
`

const Box = styled.img`
    width:50px;
    height:50px;
`

const Text = styled.p`
    font-size: 16px;
`

export default function Store ({
    url = "",
    text = "",
}) {
    return <Cont>
        <Box src={url} />
        <Text>{text}</Text>
    </Cont>
}