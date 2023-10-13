import React, {useEffect, useState} from 'react';
import {ListOfUsers} from "../services/list-of-users";
import {Loader} from "../components/Loader";
import styled from "styled-components";
import Cards from "../components/User/cards";

const StyledDivForLoader = styled.div`
	height:600px;
	display: flex;
	justify-content: center;
`;

const StyledCenter = styled.div`
	display: flex;
	align-items: center;
`;

export const About = () => {
	const [shahidUsers, setShahidUsers] = useState();

	useEffect(() => {
		ListOfUsers(setShahidUsers)
	}, [])

	console.log(shahidUsers);

	if (!shahidUsers) {
		return (
			<StyledDivForLoader>
				<StyledCenter>
					<Loader/>
				</StyledCenter>
			</StyledDivForLoader>
		)
	} else
		return (
			<div>
				<Cards shahidUsers={shahidUsers} />
			</div>
		);
}