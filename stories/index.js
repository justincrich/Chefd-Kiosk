import React from 'react';
import {Router} from 'react-router'
import {action} from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import {
    Button,
    Check,
    HeaderBanner,
    Modal
} from './components/index';

// storiesOf('Buttons')
//     .add('Button.Standard',()=><Router><Button/></Router>)
storiesOf('Inputs')
    .add('Checks',()=><Check/>)
    .add('Field')
storiesOf('Headers')
    .add('Banner Header',()=><HeaderBanner/>)
storiesOf('Modals')
    .addDecorator(StoryRouter())
    .add('Confirmation Modal',()=><Modal/>)