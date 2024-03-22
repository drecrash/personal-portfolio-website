import React from 'react';


export default function Blog(){

    return (

        <div className='ml-3 mr-3 text-wrap'>


            <div className='text-wrap' id="blog-post-2">
                <h1 className='text-2xl font-extrabold'>Second Post</h1>
                <p>
                    This is literally just to see how the separation between posts looks
                </p>
            </div>

            <p>====================</p>

            <div className='text-wrap' id="blog-post-1">
                <h1 className='text-2xl font-extrabold'>First Post</h1>
                <p>
                    This is my first post on this blog. Hopefully I'll be able to add some sort of search in the 
                    future in order to find this easier. Right now all the posts are in straight HTML which isn't ideal. 
                    In the future I hope to be able to have some sort of Markdown parser so I can write these blog posts in Markdown and 
                    display them. <br/>
                    Also, I haven't added any fonts yet and I think once I do that, the website will look a lot more like Windows 98--which 
                    is what I'm going for.
                </p>
            </div>

        </div>





    )








}