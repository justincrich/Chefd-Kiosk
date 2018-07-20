import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './standard/input_text_standard.js';

storiesOf('Inputs',module)
    .add('Standard',()=>(
        <Input placeholder='Email'/>
    ))
    .add('Checkbox Standard',()=>{
        
    })
