import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'
import CryptoImage from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [coins, setCoins] = useState<any>({})
  const [result, setResult] = useState<any>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(coins).length) {

      const quoteCrypto = async () => {
        setLoading(true)
        setResult({})

        const { coin, crypto } = coins
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result.DISPLAY[crypto][coin])

        setLoading(false)
      }

      quoteCrypto()
    }
  }, [coins])

  return (
    <Container>
      <Image
        src={CryptoImage}
        alt="crypto image"
        title='crypto image'
      />

      <div>
        <Heading>Quote crypto now!</Heading>
        <Form
          setCoins={setCoins}
        />

        {loading && <Spinner />}
        {result.PRICE &&
          <Result
            PRICE={result.PRICE}
            HIGHDAY={result.HIGHDAY}
            LOWDAY={result.LOWDAY}
            CHANGEPCT24HOUR={result.CHANGEPCT24HOUR}
            IMAGEURL={result.IMAGEURL}
            LASTUPDATE={result.LASTUPDATE}
          />
        }
      </div>
    </Container>
  )
}

export default App
