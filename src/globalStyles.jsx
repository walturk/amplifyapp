import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

export const Button = styled.button`
	border-radius: 1px;
	white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
	padding: 5px 30px;
	color: white;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};

	outline: none;
	cursor: pointer;
`;
