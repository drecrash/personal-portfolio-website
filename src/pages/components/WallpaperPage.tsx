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

import Notepad from './elements/Notepad.tsx'

import Blog from './Blog.tsx'

export default function Wallpaper(){
    const [divs, setDivs] = useState<{ [id: string]: boolean }>({
        resumediv: false,
        portfoliodiv: false,
        portfoliodiv1: false,
        blogdiv: false
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
                    <div className='grid-cols-3 grid pl-20'>
                        <div className='absolute'>
                            <Button id="resumediv" onClick={toggleVisibility} icon='windows_txt_icon.png' name="resume"/>
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
                                    <PDFViewer pdfUrl="mainResume.pdf" pageNumber={1}/>
                                </div>
                            </div>
                        </FolderItem>
                    </div>

                    <div>
                        <div className='absolute'>
                            <Button id="portfoliodiv" onClick={toggleVisibility} icon='windows_folder_icon.png' name="portfolio"/>
                        </div>
                        
                        <div className=''>
                            <FolderItem id="portfoliodiv" isVisible={divs.portfoliodiv} onClose={toggleVisibility}>
                                <div className='bg-white ml-[40%] absolute mt-[15%] w-96 h-64 flex'>
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
                                                <Button id="portfoliodiv1" onClick={toggleVisibility} icon='windows_txt_icon.png' name="Discord Stock Market Simulator"/>
                                            </div>
                                        </div>

                                    </div>
                                    


                                
                                </div>
                            
                            </FolderItem>
                        </div>
                    </div>

                    {/*  Portfolio Content Stuff */}

                    <div className=''>

                        <FolderItem id="portfoliodiv1" isVisible={divs.portfoliodiv1} onClose={toggleVisibility}>

                            <Notepad title="discord-stock-market-sim.txt" onClose={() => handleClose('portfoliodiv1')}>

                                <div>


                                    <div className='mb-[2%] ml-[1%] mr-[5%]'>
                                        <p>
                                            - timestamp: jan 2023 <br/>
                                            - <a href="https://github.com/drecrash/stock-market-bot" className='text-sky-900 underline'>source code</a>
                                        </p>
                                        <br/>
                                        <p>
                                            - i created a simple stock market simulator based in a Discord bot for a client desiring to feature a stock market in their virtual universe. <br/>
                                            - the market features instant buy/sell, as well as buy/sell orders. <br/>
                                            - it has the capability to update a Google Sheet of stock tickers as stock is bought and sold. <br/>
                                        </p>
                                    </div>

                                </div>



                            </Notepad>

                        </FolderItem>

                    </div>

                    {/*  Blog Content Stuff */}

                    <div className='absolute mt-20'>
                            
                        <div className=''>
                            <Button id="blogdiv" onClick={toggleVisibility} icon='windows_folder_icon.png' name="blog"/>
                        </div>

                        <div className='w-[1000px] absolute'>

                            <FolderItem id="blogdiv" isVisible={divs.blogdiv} onClose={toggleVisibility}>

                                <Notepad title="personal-notes.txt" onClose={() => handleClose('blogdiv')}>


                                    <Blog/>


                                </Notepad>

                            </FolderItem>

                        </div>

                    </div>






                </div>

                <div className='pl-[20%] md:pt-[13%] sm:pt-[10%]'>
                    <h1 className='text-4xl'>
                        i'm dre
                    </h1>
                    <h1 className='text-3xl'>
                        your favorite backend engineer
                    </h1>
                </div>
            
            </div>
        </div>


    )


}