//@flow

import React from 'react';
import { Element } from 'react';

type Props = {
  headingText: Element<any>,
  subText: any
};

export const Header = (props: Props): Element<any> =>
    <div>
        <header>
            {props.headingText}
            {props.subText}
        </header>
    </div>

// normal array
let ingredients: Array<string> = ['potato sauce', 'tomato', 'chicken'];
// tuple - special kind of array
let menu: [string, number, Array<string>] = ['kaldereta', 500, ingredients];
console.log(menu[0]);
