import "./App.css";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import AreaChartComponent from "./components/AreaChartComponent";
import ScatterChartComponent from "./components/ScatterChartComponent";
import RadarChartComponent from "./components/RadarChartComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>COVID-19 Impact on Ireland's Food Industry</h1>
				<p>
					Data visualization from CSO.ie, ESRI.ie, and Irish Times reporting
				</p>
			</header>

			<main className="dashboard">
				<div className="charts-grid">
					<LineChartComponent />
					<BarChartComponent />
					<PieChartComponent />
					<AreaChartComponent />
					<ScatterChartComponent />
					<RadarChartComponent />
				</div>
			</main>

			<footer className="App-footer">
				<p>Built with React, TypeScript, and Recharts</p>
			</footer>
		</div>
	);
}

export default App;
