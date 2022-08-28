import React, { useEffect } from 'react' 
import {
    keybindRouter
} from '../helperFunctions/Synth'

const ToneComponent = () => {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, [])

    function handleKeyDown(e) {
        console.log('keydown', e.which)
        keybindRouter(e.which)
    }

    return (
        <div>
            <h1>Try playing some music!</h1>
        </div>
    )
}

export default ToneComponent