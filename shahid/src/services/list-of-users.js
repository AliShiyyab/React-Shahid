import axios from "axios";

export const ListOfUsers = (setUsers) => {

	axios.get('https://reqres.in/api/users').then((response) => {
		setUsers(response.data.data)
	})
}