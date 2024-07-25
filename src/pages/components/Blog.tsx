import React, { useEffect, useState } from 'react';
import { Remarkable } from 'remarkable';
import 'tailwindcss/tailwind.css';

const md = new Remarkable();

interface Post {
    id: string;
    date: string;
    text_url: string | null;
    media_list: string[] | null;
}

interface BlogComponentProps {
    post_num: string;
}

const Blog: React.FC<BlogComponentProps> = ({ post_num }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const apiUrl = "https://api.dre.ong/disbook/receive-posts"; 
    console.log(post_num)
    post_num = "None"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': import.meta.env.PUBLIC_DISBOOK_API_KEY || "" 
                    },
                    body: JSON.stringify({})
                });
                const data = await response.json();
                const postsArray = Object.entries(data.data).map(([id, post]) => ({
                    ...post as Post,
                    id
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
            console.log(error);
            return `Error fetching text: ${error}`;
        }
    };

    useEffect(() => {
        if (post_num !== "None") {
            console.log(post_num)
            const postElement = document.getElementById(`blog-post-${post_num}`);
            
            if (postElement) {
                postElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [post_num, posts]);

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
};

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
};

export default Blog;
