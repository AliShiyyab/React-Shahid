import React from 'react';
import styled from 'styled-components';
import BlogCard from "./blogCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const BlogCards = ({ shahidBlogs }) => {
  return (
    <CardContainer>
      {shahidBlogs.blogs.map((val, key) => (
        <BlogCard val={val} key={key} />
      ))}
    </CardContainer>
  );
};

export default BlogCards;
