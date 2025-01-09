import { useState, useEffect } from "react";
import { IoEye } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                console.log("Posts", posts); 
                setLoading(false); 
            })
            .catch((error) => {
                setError(error); 
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="px-6 mt-[30px]">

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Placeholder Posts</h1>
                <div className="relative w-[600px] h-[50px]">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="border w-full h-full py-2 px-12 bg-[#F0F1F5] rounded-md"
                    />
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                        <path
                            d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24306 20.6181 3.14583 18.5208C1.04861 16.4236 0 13.8611 0 10.8333C0 7.80556 1.04861 5.24306 3.14583 3.14583C5.24306 1.04861 7.80556 0 10.8333 0C13.8611 0 16.4236 1.04861 18.5208 3.14583C20.6181 5.24306 21.6667 7.80556 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6875 17.6042 16.1458 16.1458C17.6042 14.6875 18.3333 12.9167 18.3333 10.8333C18.3333 8.75 17.6042 6.97917 16.1458 5.52083C14.6875 4.0625 12.9167 3.33333 10.8333 3.33333C8.75 3.33333 6.97917 4.0625 5.52083 5.52083C4.0625 6.97917 3.33333 8.75 3.33333 10.8333C3.33333 12.9167 4.0625 14.6875 5.52083 16.1458C6.97917 17.6042 8.75 18.3333 10.8333 18.3333Z"
                            fill="#1D1B20"
                        />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">

                        <div className="relative">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

                            <div className="absolute top-2 right-2 flex items-center space-x-2 bg-[#FFFFFF] text-[#000000] rounded-[10px] p-2">
                                <IoEye size={24} />
                                <span className="text-sm">{post.id}</span>
                            </div>
                        </div>


                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="flex items-center text-gray-500 text-sm"><MdDateRange className="mr-1" />
                                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">{post.slug}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-700 text-sm mb-4">
                                {post.content.split(" ").slice(0, 50).join(" ")}...
                                <a href="#" className="text-blue-500">Read More</a>
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm"><i className="far fa-comments"></i> {post.comments}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>



        </div>
    )
}

export default Posts