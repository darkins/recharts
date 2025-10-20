import React from "react";
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
import { scatterChartData } from "../data/sampleData";

const ScatterChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<h3>Irish Food Prices vs Demand</h3>
			<p className="chart-subtitle">Price increases vs demand changes (%)</p>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={scatterChartData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="category" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar
						name="Price Increase (%)"
						dataKey="price_increase"
						fill="#DC2626"
					/>
					<Bar
						name="Demand Change (%)"
						dataKey="demand_change"
						fill="#16A34A"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ScatterChartComponent;
