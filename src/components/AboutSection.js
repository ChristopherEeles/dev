import React from 'react'
import './AboutSection.css'
import '../App.css'
import { Button } from './Button'

function AboutSection() {
    return (
        <div className='about-container'>
            <video src='/videos/background.mp4' autoPlay loop muted />
            <h1>Christopher Eeles</h1>
            <p>The coolest guy ever!</p>
            <div className='about-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                WATCH TRAILER  <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default AboutSection