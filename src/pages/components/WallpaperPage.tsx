import {motion}  from 'framer-motion'
import {useState} from "react"
import { useMediaQuery } from '../../util/useMediaQuery'
import FolderItem from './FolderItem.tsx'
import Button from './Button.tsx'

import PdfViewer from './PdfViewer.tsx'


export default function Wallpaper(){
    const [divs, setDivs] = useState<{ [id: string]: boolean }>({
        div1: false
      });
    
      const toggleVisibility = (id: string) => {
        setDivs({
          ...divs,
          [id]: !divs[id],
        });
      };

      const handleClose = (id: string) => {
        setDivs({
          ...divs,
          [id]: false,
        });
      };

    return(
        <div className=''>
            <div className='bg-98-blue h-screen '>
                <div className='relative'>
                    <div className='absolute'>
                        <Button id="div1" onClick={toggleVisibility} icon='windows_folder_icon.png' name="resume"/>
                    </div>
                    <FolderItem id="div1" isVisible={divs.div1} onClose={toggleVisibility}>
                        <div className='bg-white ml-[40%] absolute mt-[15%]'>
                            <div className=''>
                                <button 
                                className=''
                                onClick={() => handleClose('div1')}>
                                    <span>&times;</span>
                                </button>
                            </div>

                            <PdfViewer pdfUrl="resumeMarch2024.pdf" />
                            
                        </div>
                    </FolderItem>
                </div>

                <div className='pl-[20%] pt-[13%]'>
                    <h1 className='text-4xl'>
                        i'm andre
                    </h1>
                    <h1 className='text-3xl'>
                        your favorite backend engineer
                    </h1>
                </div>
            
            </div>
        </div>


    )


}