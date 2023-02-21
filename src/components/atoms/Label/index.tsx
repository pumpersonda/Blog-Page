import React from 'react';
import './index.css';

export interface LabelProps {
    inputId?: string;
    text: string;
}

export function Label({ text, inputId}: LabelProps){
    return <label className="label label__default" htmlFor={inputId}>{text}</label>
}