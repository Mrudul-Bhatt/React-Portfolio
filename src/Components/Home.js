import React from 'react';
import me from '../images/me.jpeg';
import { Grid, Text, Divider, Card, Image, Spacer } from '@zeit-ui/react';
import {
	Instagram,
	Facebook,
	Github,
	Linkedin,
	Code,
	Mail,
} from '@zeit-ui/react-icons';

const Home = () => {
	const MockItem1 = () => {
		return (
			<Card shadow style={{ width: '100%', height: '100%' }}>
				<Image width='540' height='200' src={me} />
			</Card>
		);
	};

	const MockItem2 = () => {
		return (
			<Card
				shadow
				style={{
					width: '100%',
					height: '100%',
					textAlign: 'center',
				}}
			>
				<h3 style={{ color: 'red' }}>
					Hi, I'am Mrudul, CS Student, MERN Stack Developer, Competitive
					Programmer...
				</h3>
				<Divider />
				<Text style={{ color: 'black', fontSize: '19px' }}>
					I completed my 10 + 2 from Assisi Convent School, Noida. I am
					currently pursuing Bachelor Of Technology in Computer Science from
					Ajay Kumar Garg Engineering College, Ghaziabad. I have sound knowledge
					& experience of building web applications using ReactJs, NodeJs,
					ExpressJs,MongoDB. I have experience of making NodeJs, ExpressJs
					driven API's. I have worked with Version Control Git & Github, Netlify
					& Heroku.
				</Text>
			</Card>
		);
	};
	const MockItem3 = () => {
		return (
			<Card
				shadow
				style={{ width: '100%', height: '60px', backgroundColor: 'black' }}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						justifyItems: 'space-around',
						marginBottom: '10px',
					}}
				>
					<a
						href='https://www.instagram.com/mrudul_bhatt/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Instagram color='red' />
					</a>
					<a
						href='https://www.facebook.com/utkarsh.bhatt.92'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Facebook color='red' />
					</a>
					<a
						href='https://github.com/Mrudul-Bhatt'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Github color='red' />
					</a>
					<a
						href='https://www.linkedin.com/in/mrudul-bhatt-a6772a187/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Linkedin color='red' />
					</a>
					<a
						href='https://www.hackerrank.com/dashboard'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Code color='red' />
					</a>
				</div>
			</Card>
		);
	};
	const MockItem4 = () => {
		return (
			<Card
				shadow
				style={{ width: '100%', height: '60px', backgroundColor: 'black' }}
			>
				<a href='mailto:mrudul1203@gmail.com'>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Mail color='red' />
						<Spacer />
						<h5 style={{ color: 'red' }}>mrudul1203@gmail.com</h5>
					</div>
				</a>
			</Card>
		);
	};

	return (
		<Grid.Container gap={2} justify='center'>
			<Grid xs={24} md={12}>
				<MockItem1 />
			</Grid>
			<Grid xs={24} md={12}>
				<MockItem2 />
			</Grid>
			<Grid xs={24} md={24}>
				<MockItem3 />
			</Grid>
			<Grid xs={24} md={24}>
				<MockItem4 />
			</Grid>
		</Grid.Container>
	);
};

export default Home;
