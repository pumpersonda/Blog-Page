import React from 'react';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Label } from '../../atoms/Label';
import './index.css';

export function SearchBar() {
  return (
    <div className="search-bar">
      <Label inputId="search-id" text="SEARCH THE SITE" />
      <div className="search-bar__input--container">
        <Input id="search-id" placeholder="ENTER KEYWORD" />
        <Button text="SEARCH" />
      </div>
    </div>
  );
}
