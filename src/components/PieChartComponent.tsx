import React from "react";
import { Link } from "react-router-dom";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	Cell,
} from "recharts";
import { pieChartData } from "../data/sampleData";

const PieChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3>Irish Food Delivery Market Share</h3>
				<Link to="/data-source/pie-chart" className="data-source-link">
					📊 Data Source
				</Link>
			</div>
			<p className="chart-subtitle">Platform usage during pandemic (%)</p>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={pieChartData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="value" name="Market Share (%)">
						{pieChartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PieChartComponent;
