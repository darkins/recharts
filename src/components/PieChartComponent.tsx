import React from "react";
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
			<h3>Irish Food Delivery Market Share</h3>
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
