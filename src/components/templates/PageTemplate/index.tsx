import React from 'react';
import './index.css';

export interface PageTemplateProps{
    header?: React.ReactNode;
    hero?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export function PageTemplate({ header, hero, children, footer, ...props }: PageTemplateProps){
    return <div className="page-template" {...props}>
        <header>{header}</header>
        {hero && <div>{hero}</div>}
        <section>{children}</section>
        <footer>{footer}</footer>
    </div>
}