import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './standard/button_standard.js';
import CheckButton from './check/button_check.js';

storiesOf('Button',module)
    .add('Standard',()=>(
        <Button>Continue</Button>
    ))
    .add('Standard Outlined',()=>(
        <Button isAnchor={true} outlined={true}>Quit</Button>
    ))
    .add('Check',()=>(
            <CheckButton isAnchor={true}/>
        )
    )
