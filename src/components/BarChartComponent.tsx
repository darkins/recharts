import React from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { barChartData } from "../data/sampleData";

const BarChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3>Irish Supermarket Sales: Pre-COVID vs Peak</h3>
				<Link to="/data-source/bar-chart" className="data-source-link">
					📊 Data Source
				</Link>
			</div>
			<p className="chart-subtitle">
				Category comparison (€'000s) - CSO Retail Index
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={barChartData}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="category" />
					<YAxis />
					<Tooltip />
					<Legend wrapperStyle={{ paddingTop: "1em" }} />
					<Bar dataKey="pre_covid" fill="#0891B2" name="Pre-COVID Sales" />
					<Bar dataKey="covid_peak" fill="#DC2626" name="COVID Peak Sales" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarChartComponent;
