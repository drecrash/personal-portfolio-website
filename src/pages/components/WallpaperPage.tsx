import {motion}  from 'framer-motion'
import {useState} from "react"
import { useMediaQuery } from '../../util/useMediaQuery'
import FolderItem from './FolderItem.tsx'
import Button from './Button.tsx'

import PDFViewer from './PdfViewer.tsx'


export default function Wallpaper(){
    const [divs, setDivs] = useState<{ [id: string]: boolean }>({
        resumediv: false,
        portfoliodiv: false
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
                    <div className='grid-cols-2 grid pl-20'>
                        <div className='absolute'>
                            <Button id="resumediv" onClick={toggleVisibility} icon='windows_folder_icon.png' name="resume"/>
                        </div>
                        <FolderItem id="resumediv" isVisible={divs.resumediv} onClose={toggleVisibility}>
                            <div className='bg-white ml-[40%] absolute mt-[15%]'>
                                <div className=''>
                                    <button 
                                    className=''
                                    onClick={() => handleClose('resumediv')}>
                                        <span>&times;</span>
                                    </button>
                                </div>


                                <div>
                                    <PDFViewer pdfUrl="resumeMarch2024.pdf" pageNumber={1}/>
                                </div>
                            </div>
                        </FolderItem>
                    </div>

                    <div>
                        <div className='absolute'>
                            <Button id="portfoliodiv" onClick={toggleVisibility} icon='windows_folder_icon.png' name="portfolio"/>
                        </div>
                        
                        <FolderItem id="portfoliodiv" isVisible={divs.portfoliodiv} onClose={toggleVisibility}>
                            <div className='bg-white ml-[40%] absolute mt-[15%]'>
                                <div className=''>
                                    <button 
                                    className=''
                                    onClick={() => handleClose('portfoliodiv')}>
                                        <span>&times;</span>
                                    </button>
                                </div>


                            
                            </div>
                        </FolderItem>
                    </div>

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