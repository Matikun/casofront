import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { UsersDataContext } from './Context/UsersDataContext';
import CheckDataPage from './Pages/CheckDataPage';
import DonePage from './Pages/DonePage';
import MainPage from './Pages/MainPage';
import VehiclesPage from './Pages/VehiclesPage';
import VisitPage from './Pages/VisitPage';

function App() {
	return (
		<UsersDataContext>
			<Switch>
				<Route exact path="/">
					<MainPage />
				</Route>
				<Route exact path="/visit">
					<VisitPage />
				</Route>
				<Route exact path="/vehicle">
					<VehiclesPage />
				</Route>
				<Route exact path="/checkdata">
					<CheckDataPage />
				</Route>
				<Route exact path="/done">
					<DonePage />
				</Route>
			</Switch>
		</UsersDataContext>
	);
}

export default App;
