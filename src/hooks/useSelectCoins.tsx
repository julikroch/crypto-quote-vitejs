import { useState } from 'react'
import styled from '@emotion/styled'
import { OptionsI } from '../typings'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectCoins = (label: string, options: OptionsI[]) => {

    const [state, setState] = useState('')

    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={(e: any) => setState(e.target.value)}
            >
                <option value="">Select</option>
                {options?.map((option: OptionsI) => (
                    <option
                        key={option.id}
                        value={option.id}
                    >{option.name}</option>
                ))}
            </Select>
        </>
    )

    return [state, SelectCoins]
}

export default useSelectCoins
