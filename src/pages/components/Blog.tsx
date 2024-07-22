import React, { useEffect, useState } from 'react';

interface Post {
    id: string;
    date: string;
    text_url: string | null;
    media_list: string[] | null;
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const apiUrl = "https://api.dre.ong/disbook/receive-posts"; // Replace with your actual API URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': 'taTr8vj2Ne7WDIMRlTLh31A026OF0T716yfGUIhp' // Replace with your actual token or other headers
                    },
                    body: JSON.stringify({})
                });
                const data = await response.json();
                const postsArray = Object.entries(data).map(([id, post]) => ({
                    id,
                    ...post
                })) as Post[];
                setPosts(postsArray);
            } catch (error) {
                console.error("Error fetching posts data:", error);
            }
        };

        fetchData();
    }, []);

    const fetchText = async (url: string): Promise<string> => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            return await response.text();
        } catch (error) {
            console.log(error)
            return `Error fetching text: ${error}`;
        }
    };

    return (
        <div className='ml-3 mr-3 text-wrap'>
            {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                    <div className='text-wrap' id={`blog-post-${index + 1}`}>
                        <h1 className='text-2xl font-extrabold'>Post {index + 1}</h1>
                        <p>
                            {post.text_url
                                ? <AsyncText fetchText={fetchText} url={post.text_url} />
                                : "No text available."
                            }
                        </p>
                        {post.media_list && post.media_list.length > 0 && (
                            <div>
                                {post.media_list.map((mediaUrl, i) => (
                                    <img key={i} src={mediaUrl} alt="" className="max-w-xs m-2" />
                                ))}
                            </div>
                        )}
                    </div>
                    <p>====================</p>
                </React.Fragment>
            ))}
        </div>
    );
}

interface AsyncTextProps {
    fetchText: (url: string) => Promise<string>;
    url: string;
}

const AsyncText: React.FC<AsyncTextProps> = ({ fetchText, url }) => {
    const [text, setText] = useState<string>("Loading...");

    useEffect(() => {
        fetchText(url).then(fetchedText => {
            setText(fetchedText);
        });
    }, [fetchText, url]);

    return <>{text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</>;
}
