import { useRef, useEffect } from 'react';
import {useField} from '@unform/core'
import { InputFrom } from '../../interfaces/IPessoa';
import * as styled from './style'



export function Input({name, type, placeholder, defaultParam}: InputFrom) {
    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue} = useField(name)

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <styled.input1 ref={inputRef} defaultValue={defaultValue} type={type} placeholder={placeholder}/>
    );
}