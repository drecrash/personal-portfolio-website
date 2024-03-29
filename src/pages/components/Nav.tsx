import {motion}  from 'framer-motion'
import {useState} from "react"
import { useMediaQuery } from '../../util/useMediaQuery'


export default function Nav(){
    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 1280px)')
    console.log(matches)
    return(
        <footer className="relative mx-8 mb-24 flex flex-col justify-between pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
            
            <div className="fixed bottom-0 left-0 right-0 overflow-y-auto bg-98-grey flex justify-between items-end">

                    {/* Title */}
             
                    {/* <h1 className="text-lg bottom-0 ml-0 font-bold float-left absolute">
                        <a href="/">dre</a>
                    </h1> */}
                    <div className="float-left max-w-[3%]">
                        <div className="m-1 justify-center items-center space-x-4 flex">
                            <div className="">
                                <img className="" src="/home_button_navbar.png" alt="dre's pfp" />
                            </div>
{/* 
                            <div className='max-w-[50%] inline-flex gap-x-[10%]'>

                                <a href="/"><img className="pt-1 pb-1" src="/home_icon.png" alt="resume" /></a>
                                <a href="/resume"><img className="pt-1 pb-1" src="/resume_icon.png" alt="resume" /></a>
                                <a href="/contact"><img className="pt-1 pb-1" src="/contact_icon.png" alt="contact me" /></a>
                            </div> */}
                        </div>
                    </div>
                    <div className='grow border-l border-black mr-3 h-max'></div>

            </div>
        </footer>
    )
}