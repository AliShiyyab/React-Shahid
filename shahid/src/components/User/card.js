import styled from "styled-components";
import {StyledCard} from "../styles";


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