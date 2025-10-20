import React from "react";
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { scatterChartData } from "../data/sampleData";

const ScatterChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<h3>Irish Food Prices vs Demand</h3>
			<p className="chart-subtitle">Price increases vs demand changes (%)</p>
			<ResponsiveContainer width="100%" height={300}>
				<ScatterChart
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid />
					<XAxis
						type="number"
						dataKey="price_increase"
						name="Price Increase"
						unit="%"
					/>
					<YAxis
						type="number"
						dataKey="demand_change"
						name="Demand Change"
						unit="%"
					/>
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter
						name="Food Categories"
						data={scatterChartData}
						fill="#7C3AED"
					/>
				</ScatterChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ScatterChartComponent;
