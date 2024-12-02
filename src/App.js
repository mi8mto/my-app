import logo from './logo.svg'; // декларативный стиль
import './App.css'; // декларативный стиль

// Далее также декларативный стиль
export const App = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="App-link">{currentYear}</div>
			</header>
		</div>
	);
};
