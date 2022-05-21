import styled from 'styled-components';

export const RatingContainer = styled.div`
	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--fonte-primaria);
		color: var(--cor-primaria);
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		font-family: var(--fonte-primaria);
		font-size: 20px;
		font-weight: bold;
		color: var(--cor-terciaria);
	}

	.data_user {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.data_user img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 0 20px;
	}
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;

	.position {
		margin-left: 10px;
		color: var(--cor-primaria);
	}

	.score {
		margin-right: 10px;
	}
`;
