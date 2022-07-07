import styled from '@emotion/styled'

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Image = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Result = ({ result }: any) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Container>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="crypto image"
            />
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>Highest price today: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price today: <span>{LOWDAY}</span></Text>
                <Text>Quote variation: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}

export default Result
