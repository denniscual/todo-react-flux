import React from 'react';

export const Header = ({headingText, subText, children}) =>
    <div>
        <header>
            {headingText}
            {subText}
        </header>
    </div>