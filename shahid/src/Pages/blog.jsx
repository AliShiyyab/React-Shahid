import React, {useState} from "react";
import blogData from "../services/lis-of-blobs";
import BlogCards from "../components/Blog/blogCards";
import {Loader} from "../components/Loader";
import {StyledCenter, StyledDivForLoader} from "../components/styles";

export const Blog = () => {
	const [shahidBlogs] = useState(blogData)
	if (!shahidBlogs){
		return  (
			<StyledDivForLoader>
				<StyledCenter>
					<Loader/>
				</StyledCenter>
			</StyledDivForLoader>
		)
	}
	return (
		<div>
			<BlogCards shahidBlogs={shahidBlogs} />
		</div>
	)
}