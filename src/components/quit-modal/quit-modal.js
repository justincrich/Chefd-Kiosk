import React from 'react'
import './quit-modal.scss'
import Button from 'core-components/buttons/standard/button_standard.js'


export default function QuitModal(props){
    return (
        <div className='quitmodal'>
            <h2 className='quitmodal_header'>Are you sure you want to quit?</h2>
            <div className='quitmodal_description'>
                You’ve come so far! Just a few more taps to get to the good stuff.
            </div>
            <div className='quitmodal_buttonbox'>
                <Button
                    id='continue'
                    className='quitmodal_buttonbox_button'
                >
                    Continue
                </Button>
                <Button
                    outlined
                    id='quit'
                    className='quitmodal_buttonbox_button'
                >
                    Yes, Quit
                </Button>
            </div>

        </div>
    )
}