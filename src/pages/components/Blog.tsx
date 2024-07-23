import React, { useEffect, useState } from 'react';
import { Remarkable } from 'remarkable';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
var md = new Remarkable();



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
                        'x-api-key': import.meta.env.PUBLIC_DISBOOK_API_KEY || "" // Replace with your actual token or other headers
                    },
                    body: JSON.stringify({})
                });
                const data = await response.json();
                const postsArray = Object.entries(data.data).map(([id, post]) => ({
                    id,
                    ...post as Post
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
                        {post.text_url && post.text_url !== "None"
                            ? <AsyncMarkdown fetchText={fetchText} url={post.text_url} />
                            : "No text available."
                        }
                    </div>
                    <p><b>========================================</b></p>
                </React.Fragment>
            ))}
        </div>
    );
}

interface AsyncMarkdownProps {
    fetchText: (url: string) => Promise<string>;
    url: string;
}

const AsyncMarkdown: React.FC<AsyncMarkdownProps> = ({ fetchText, url }) => {
    const [html, setHtml] = useState<string>("Loading...");
    const md = new Remarkable();

    useEffect(() => {
        fetchText(url).then(fetchedText => {
            setHtml(md.render(fetchedText));
        });
    }, [fetchText, url]);

    return <div className="prose prose-h1:mb-[-5%]" dangerouslySetInnerHTML={{ __html: html }} />;
}
