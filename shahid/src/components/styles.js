import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledDivForLoader = styled.div`
	height:600px;
	display: flex;
	justify-content: center;
`;

export const StyledCenter = styled.div`
	display: flex;
	align-items: center;
`;

export const HomeMainDevStyled = styled.div`
	width: 100%;
	text-align: center;
`;

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.navbarBackground};
  color: ${(props) => props.theme.navbarText};
  display: flex;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.navbarText};
  justify-content: space-between;
  padding: 10px 20px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
  align: center;
  align-self: center;
  font-size: 18px;
  padding: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.navbarText};
  font-weight: 400;
  &:hover {
    font-weight: 500;
    text-decoration: underline;  
  }
  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 500px;
  height: 670px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  background-color: white;
  color: #2D2D82;

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

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
`;

export const ContactForm = styled.form`
  width: 50%;
  @media (max-width: 992px) {
    width: 80%
  }

  @media (max-width: 576px) {
    padding: 10px;
    width: 90%
  }
  
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;