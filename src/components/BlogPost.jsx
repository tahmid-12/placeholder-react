import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdDateRange } from "react-icons/md";


const BlogPost = () => {

    const { id } = useParams(); 
    const [post, setPost] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.org/posts/${id}`);
                const data = await response.json();
                console.log("Data",data)
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg">Loading...</p>;
    }

    if (!post) {
        return <p className="text-center text-lg text-red-500">Post not found.</p>;
    }


    return (
        <div className="mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <img
                        src={post.image}
                        alt="Blog Post"
                        className="rounded-lg w-full"
                    />
                </div>
                <div className="lg:w-1/3 flex justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                        <p className="text-gray-500 flex items-center mb-4">
                        <MdDateRange className="mr-1" />
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                        </p>
                        <p className="font-normal text-2xl">
                            {post.content}
                        </p>
                    </div>
                    <div>
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-[10px]">{post.slug}</span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="p-4 border rounded-lg shadow-sm bg-white"
                        >
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Review title</h3>
                            <p className="text-sm text-gray-600 mb-4">Reviewer name</p>
                            <p className="text-sm text-gray-500">Date</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-xl font-semibold mb-4">
                    Follow the latest trends
                </h2>
                <p className="text-gray-600 mb-4">With our daily newsletter</p>
                <div className="flex justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="border rounded-lg px-4 py-2 w-1/3"
                    />
                    <button className="px-6 py-2 bg-gray-900 text-white rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;