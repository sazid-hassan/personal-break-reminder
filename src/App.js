import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<Router>
				<Nav />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
