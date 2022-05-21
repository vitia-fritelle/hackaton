import {RatingContainer, UserContainer} from './styles';
import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './../../Components/componentes-de-perguntas/Header';

function RatingScreen() {
	const [data, setData] = useState([
		{
			_id: '62881f56f6588f37fda7ab3f',
			image: 'https://popseries.com.br/wp-content/uploads/2022/04/Peaky-Blinders.jpg',
			name: 'Michael Gray',
			score: 20,
		},
		{
			_id: '628819c31a42b269acc84cf2',
			score: 10,
			name: 'Tommy Shelby',
			image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/TommyShelby.jpg/250px-TommyShelby.jpg',
		},
		{
			_id: '62881cdd1a42b269acc84cf3',
			score: 9,
			name: 'Polly Gray',
			image: 'https://s2.glbimg.com/y4Gu2P55yLZ9e6R575zLREQWuIg=/smart/e.glbimg.com/og/ed/f/original/2022/02/28/peakyblinders-pollygray03.jpg',
		},
		{
			_id: '62881e0af6588f37fda7ab3d',
			image: 'https://www.peakyblinders.com.br/wp-content/uploads/2021/11/alfie.jpg',
			name: 'Alfie Solomons',
			score: 9,
		},
		{
			_id: '62881d1d1a42b269acc84cf4',
			score: 8,
			name: 'Oswald Mosley',
			image: 'https://i.pinimg.com/originals/34/2d/96/342d96c8bedba8c2cd04238879dbf431.jpg',
		},
		{
			_id: '62881e69f6588f37fda7ab3e',
			image: 'https://static.wikia.nocookie.net/peaky-blinders/images/0/0b/Johns3.jpg',
			name: 'John Shelby',
			score: 8,
		},
	]);

	const Axios = () => {
		const URL = '';
		const promise = axios.get(URL);
		promise.then((response) => {
			const {data} = response;
			setData(data);
		});
		promise.catch((error) => {
			console.log(error.response);
		});
	};

	return (
		<RatingContainer>
			<Header />
			<h2>Ranking Usuários</h2>
			{data.map((user, index) => (
				<UserContainer key={user._id}>
					<div className="data_user">
						<p className="position">{index + 1}</p>
						<img src={user.image} alt="profile_picture" />
						<p className="user_name">{user.name}</p>
					</div>
					<p className="score">{user.score} XP</p>
				</UserContainer>
			))}
		</RatingContainer>
	);
}

export default RatingScreen;
