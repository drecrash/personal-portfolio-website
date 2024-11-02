import './Notepad.css'
import Navbar from './Nav';

import notepad_icon from './assets/img/notepad-icon.png'

function Notepad(props){
    return (
        <>
            <div className='notepad-wrapper'>

                
                <div className='notepad-header'>

                    <div className='notepad-blue'>
                        <img src={notepad_icon} style={{width: "3rem"}}/>
                        <span className='notepad-title'>{props.title} - Notepad</span>

                    </div>
                    

                    <div className='navbar'>
                        <Navbar/>

                    </div>
                </div>

                <div className='notepad-contents'>

                    {props.children}


                </div>

            </div>

            
        </>
    )
}

export default Notepad;