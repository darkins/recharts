import { Routes, Route } from "react-router-dom";
import "./App.css";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import AreaChartComponent from "./components/AreaChartComponent";
import ScatterChartComponent from "./components/ScatterChartComponent";
import RadarChartComponent from "./components/RadarChartComponent";
import LineChartDataSource from "./pages/LineChartDataSource";
import BarChartDataSource from "./pages/BarChartDataSource";
import PieChartDataSource from "./pages/PieChartDataSource";
import AreaChartDataSource from "./pages/AreaChartDataSource";
import ScatterChartDataSource from "./pages/ScatterChartDataSource";
import RadarChartDataSource from "./pages/RadarChartDataSource";

function Dashboard() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>COVID-19 Impact on Ireland's Food Industry</h1>
				<p>Data visualization from the CSO, ESRI, and The Irish Times</p>
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

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/data-source/line-chart" element={<LineChartDataSource />} />
			<Route path="/data-source/bar-chart" element={<BarChartDataSource />} />
			<Route path="/data-source/pie-chart" element={<PieChartDataSource />} />
			<Route path="/data-source/area-chart" element={<AreaChartDataSource />} />
			<Route
				path="/data-source/scatter-chart"
				element={<ScatterChartDataSource />}
			/>
			<Route
				path="/data-source/radar-chart"
				element={<RadarChartDataSource />}
			/>
		</Routes>
	);
}

export default App;
