import styled from "styled-components";
import {StyledCard} from "../styles";

const Container = styled.div`
  padding: 2px 16px;
`;


const BlogCard = ({val}) => {
	return (
		<div>
			<StyledCard>
				<img src={val.image} alt="Avatar" style={{width: '100%'}}/>
				<Container>
					<h4><b>{val.author}</b></h4>
					<p>Title: {val.title}</p>
					<p>Content: {val.content}</p>
				</Container>
			</StyledCard>
		</div>
	)
}

export default BlogCard