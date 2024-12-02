import logo from './logo.svg';
import './App.css';
import React from 'react';

// export const App = () => {
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload 2.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<div className="App-link">{currentYear}</div>
// 			</header>
// 		</div>
// 	);
// };

// const element = createElement(type, props, ...children)

// далее код без jsx
export const App = () => {
	const currentYear = new Date().getFullYear();

	return React.createElement('div', { className: 'App' }, [
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement('p', null, 'Edit src/App.js and save to reload 2.'),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement(
				'div',
				{
					className: 'App-link',
				},
				currentYear,
			),
		),
	]);
};
