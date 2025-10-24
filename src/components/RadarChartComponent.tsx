import React from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { radarChartData } from "../data/sampleData";

const RadarChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3>Irish Food Supply Chain Resilience</h3>
				<Link to="/data-source/radar-chart" className="data-source-link">
					📊 Data Source
				</Link>
			</div>
			<p className="chart-subtitle">
				Performance metrics before, during, and after COVID
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={radarChartData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="metric" />
					<YAxis />
					<Tooltip />
					<Legend wrapperStyle={{ paddingTop: "1em" }} />
					<Bar name="Pre-COVID" dataKey="pre_covid" fill="#059669" />
					<Bar name="COVID Impact" dataKey="covid_impact" fill="#DC2626" />
					<Bar name="Recovery" dataKey="recovery" fill="#2563EB" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarChartComponent;
