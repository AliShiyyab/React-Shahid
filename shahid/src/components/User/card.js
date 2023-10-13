import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  background-color: white;
  color: #2D2D82;
  border-radius: 20px;

  @media (max-width: 992px) {
    width: calc(50% - 20px); /* Display 2 cards in one line on tablets */
  }

  @media (max-width: 576px) {
    width: calc(100% - 20px); /* Display 1 card in one line on mobile devices */
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;


const Container = styled.div`
  padding: 2px 16px;
`;


const Card = ({val}) => {
	return (
		<div>
			<StyledCard>
				<img src={val.avatar} alt="Avatar" style={{width: '100%'}}/>
				<Container>
					<h4><b>{val.first_name} - {val.last_name}</b></h4>
					<p>Email: {val.email}</p>
				</Container>
			</StyledCard>
		</div>
	)
}

export default Card