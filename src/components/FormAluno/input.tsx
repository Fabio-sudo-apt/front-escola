import { useRef, useEffect } from 'react';
import {useField} from '@unform/core'
import { InputFrom } from '../../interfaces/IPessoa';
import * as styled from './style'



export function Input({name, type, placeholder, max, min}: InputFrom) {
    const inputRef = useRef(null)
    const {fieldName, registerField} = useField(name)

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <styled.input1 ref={inputRef} type={type} placeholder={placeholder} required max={max} min={min}/>
    );
}