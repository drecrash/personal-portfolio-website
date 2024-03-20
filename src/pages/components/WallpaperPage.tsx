import {motion}  from 'framer-motion'
import {useState} from "react"
import { useMediaQuery } from '../../util/useMediaQuery'
import FolderItem from './FolderItem.tsx'
import Button from './Button.tsx'

import { useRef } from "react"

import PDFViewer from './PdfViewer.tsx'

import MarkdownViewer from './MarkdownViewer.tsx'
import ReactDOM from 'react-dom';

import Portfolio from './elements/Portfolio.tsx'

export default function Wallpaper(){
    const [divs, setDivs] = useState<{ [id: string]: boolean }>({
        resumediv: false,
        portfoliodiv: false,
        portfoliodiv1: false
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

    const scrollableContentRef = useRef<HTMLDivElement>(null);

    const scrollStep = 150;

    const handleScroll = (scrollOffset: number) => {
        if (scrollableContentRef.current) {
          const newScrollLeft = scrollableContentRef.current.scrollLeft + scrollOffset;
          scrollableContentRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
          });
        }
      };
    
      const handlePrev = () => {
        handleScroll(-scrollStep);
      };
    
      const handleNext = () => {
        handleScroll(scrollStep);
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

                                
                                
                                <div className=''>
                                    <div>
                                        <div className=''>
                                            <Button id="portfoliodiv1" onClick={toggleVisibility} icon='windows_folder_icon.png' name="portfolio-item-1"/>
                                        </div>
                                    </div>

                                    <div className='ml-[50%]'>

                                        <FolderItem id="portfoliodiv1" isVisible={divs.portfoliodiv1} onClose={toggleVisibility}>

                                            <div className='bg-white ml-[40%] mt-[15%]'>
                                                <div className=''>
                                                    <button 
                                                    className=''
                                                    onClick={() => handleClose('portfoliodiv1')}>
                                                        <span>&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                            


                                        </FolderItem>

                                    </div>

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