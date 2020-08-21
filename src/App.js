import React from 'react';
import './App.css';
import { Page, Tabs, Spacer, Divider } from '@zeit-ui/react';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';

const App = () => {
	return (
		<>
			<Page size='small' className='container'>
				<Page.Header>
					<h1
						style={{
							fontFamily: "'Sriracha', cursive",
							color: 'red',
						}}
					>
						@mrudul_bhatt
					</h1>
				</Page.Header>
				<Divider />
				<Page.Content style={{ color: 'red' }}>
					<Tabs initialValue='about'>
						<Tabs.Item label='About' value='about'>
							<Spacer y={3} />
							<Home />
						</Tabs.Item>
						<Tabs.Item label='I Do' value='services'>
							<Spacer y={3} />
							<Services />
						</Tabs.Item>
						<Tabs.Item label='Projects' value='projects'>
							<Projects />
						</Tabs.Item>
					</Tabs>
				</Page.Content>
			</Page>
		</>
	);
};

export default App;
