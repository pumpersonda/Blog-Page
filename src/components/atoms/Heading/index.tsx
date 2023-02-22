import React from 'react';
export interface HeadingProps {
    level: number;
    color?: string;
    children: React.ReactNode;
}



export function Heading({ level, color = 'black', ...props }: HeadingProps){
    return React.createElement(`h${level}`, {...props, style:{ color: color}}, props.children);
}