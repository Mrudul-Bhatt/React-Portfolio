import React from 'react';
import { Grid, Text, Divider, Card, Spacer } from '@zeit-ui/react';
import {
	Instagram,
	Facebook,
	Github,
	Linkedin,
	Code,
	Mail,
} from '@zeit-ui/react-icons';

const Services = () => {
	const MockItem1 = () => {
		return (
			<Card
				shadow
				style={{ width: '100%', height: '100%', textAlign: 'center' }}
			>
				<h3 style={{ color: 'red' }}>MERN Stack Dev</h3>
				<Divider />
				<Text style={{ color: 'black', fontSize: '20px' }}>
					Introduced to NodeJs as a backend development technology by my peers
					and since then i have loved the JS runtime environment, making apps
					with Nodejs, ExpressJs along with templating engines was my approach
					at starting. I also built API's for my projects. From templating
					engines I moved to ReactJs frontend framework to complete myself as
					stack developer
				</Text>
			</Card>
		);
	};
	const MockItem2 = () => {
		return (
			<Card
				shadow
				style={{ width: '100%', height: '100%', textAlign: 'center' }}
			>
				<h3 style={{ color: 'red' }}>Competitive Coding with C++</h3>
				<Divider />
				<Text style={{ color: 'black', fontSize: '20px' }}>
					Started from Hackerrank, Hackerearth as a learner, I like to code in
					C++, I have 5 stars on Hackerrank in problem solving, strengthening my
					Data Structures and Algorithms to achieve efficient coding skills
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
					<a href='https://www.instagram.com/mrudul_bhatt/' target='_blank'>
						<Instagram color='red' />
					</a>
					<a href='https://www.facebook.com/utkarsh.bhatt.92' target='_blank'>
						<Facebook color='red' />
					</a>
					<a href='https://github.com/Mrudul-Bhatt' target='_blank'>
						<Github color='red' />
					</a>
					<a
						href='https://www.linkedin.com/in/mrudul-bhatt-a6772a187/'
						target='_blank'
					>
						<Linkedin color='red' />
					</a>
					<a href='https://www.hackerrank.com/dashboard' target='_blank'>
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

export default Services;
