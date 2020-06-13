import React from 'react';
import { Grid, Text, Divider, Card, Spacer, Collapse } from '@zeit-ui/react';
import {
	Instagram,
	Facebook,
	Github,
	Linkedin,
	ExternalLink,
	Code,
	Mail,
} from '@zeit-ui/react-icons';

const Projects = () => {
	const MockItem1 = () => {
		return (
			<Collapse.Group>
				<Collapse title='Quiz App' shadow>
					<Divider />
					<Text
						style={{
							color: 'black',
							fontSize: '20px',
							textAlign: 'center',
						}}
					>
						An app which loads questions from API and displays, with 4 options.
						User chooses answers and score is seen after attempting all
						questions with play again option. NodeJs, ExpressJs is used for
						creating API which has questions and array of answers, databse used
						is MongoDB. In order to alter questions or answers you need postman
						or insomnia pseudo interfaces.
					</Text>
					<Divider />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							justifyItems: 'space-around',
						}}
					>
						<a
							href='https://quiziee.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<ExternalLink />
								<Spacer />
								<h5>Website</h5>
							</div>
						</a>
						<a
							href='https://github.com/Mrudul-Bhatt/QuizApp.git'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<Github />
								<Spacer />
								<h5>Github</h5>
							</div>
						</a>
					</div>
				</Collapse>
				<Collapse title='Exercise Tracker' shadow>
					<Divider />
					<Text
						style={{
							color: 'black',
							fontSize: '20px',
							textAlign: 'center',
						}}
					>
						An app for adding users and managing their schedule of exercises and
						work Interface is made using ReactJs. Communication with backend api
						is met with axios. Backend is made using NodeJs, ExpressJs with CRUD
						operations implementation, for creating user, adding schedule,
						updating it, deleting it, setting time and date for schedule.
						MongoDB is used for database
					</Text>
					<Divider />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							justifyItems: 'space-around',
						}}
					>
						<a
							href='https://schedule-track.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<ExternalLink />
								<Spacer />
								<h5>Website</h5>
							</div>
						</a>
						<a
							href='https://github.com/Mrudul-Bhatt/schedule-tracker-client.git'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<Github />
								<Spacer />
								<h5>Github</h5>
							</div>
						</a>
					</div>
				</Collapse>
				<Collapse title='E-Commerce App' shadow>
					<Divider />
					<Text
						style={{
							color: 'black',
							fontSize: '20px',
							textAlign: 'center',
						}}
					>
						E-Commerce website for buying and selling products with Login &
						Signup. Users need to register in order to use complete
						functionality of site. User Interface of application is served using
						templating engine EJS. App is supported by a NodeJS, ExpressJs
						backend which performs all the CRUD operations MongoDB is used as a
						database for storage, there are cart and order modules along with
						register, login, update and delete product cards.
					</Text>
					<Divider />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							justifyItems: 'space-around',
						}}
					>
						<a
							href='https://market-garden.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<ExternalLink />
								<Spacer />
								<h5>Website</h5>
							</div>
						</a>
						<a
							href='https://github.com/Mrudul-Bhatt/node-project-1.git'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<Github />
								<Spacer />
								<h5>Github</h5>
							</div>
						</a>
					</div>
				</Collapse>
			</Collapse.Group>
		);
	};

	const MockItem2 = () => {
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
	const MockItem3 = () => {
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
			<Grid xs={24} md={24}>
				<MockItem1 />
			</Grid>
			<Spacer y={15} />
			<Grid xs={24} md={24}>
				<MockItem2 />
			</Grid>
			<Grid xs={24} md={24}>
				<MockItem3 />
			</Grid>
		</Grid.Container>
	);
};

export default Projects;
