import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({ setCoins }: any) => {
    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [coin, SelectCoin] = useSelectCoins('Select Coin', coins)
    const [crypto, SelectCrypto] = useSelectCoins('Select Crypto', cryptos)

    useEffect(() => {
        const apiConsult = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const result = await fetch(url)
            const response = await result.json()

            const arrayCryptos = response?.Data?.map((item: any) => {
                const obj = {
                    id: item.CoinInfo.Name,
                    nombre: item.CoinInfo.FullName
                }
                return obj
            })
            setCryptos(arrayCryptos)
        }
        apiConsult();
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if ([coin, crypto].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setCoins({ coin, crypto })
    }

    return (
        <>
            {error && <Error>All fields are mandatory</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectCoin />
                <SelectCrypto />

                <InputSubmit
                    type="submit"
                    value="Quote"
                />
            </form>
        </>
    )
}

export default Form
