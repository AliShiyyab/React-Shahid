import {useState} from "react";
import blogData from "../services/lis-of-blobs";
import BlogCards from "../components/Blog/blogCards";

export const Blog = () => {
	const [shahidBlogs] = useState(blogData)
	return (
		<div>
			<BlogCards shahidBlogs={shahidBlogs} />
		</div>
	)
}