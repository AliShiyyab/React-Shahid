import React, {useEffect, useState} from 'react';
import {ListOfUsers} from "../services/list-of-users";
import {Loader} from "../components/Loader";
import Cards from "../components/User/cards";
import {StyledCenter, StyledDivForLoader} from "../components/styles";


export const About = () => {
	const [shahidUsers, setShahidUsers] = useState();

	useEffect(() => {
		ListOfUsers(setShahidUsers)
	}, [])

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
				<div style={{width: "100%"}}>
					<h2 style={{textAlign: "center"}}>Our Developer ^_^</h2>
				</div>
				<Cards shahidUsers={shahidUsers} />
			</div>
		);
}