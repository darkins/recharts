import React from "react";
import { Link } from "react-router-dom";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../data/sampleData";

const LineChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3>Irish Food Sales During COVID-19 (2020)</h3>
				<Link to="/data-source/line-chart" className="data-source-link">
					📊 Data Source
				</Link>
			</div>
			<p className="chart-subtitle">
				Restaurant closures vs grocery surge (€'000s)
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={lineChartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend wrapperStyle={{ paddingTop: "1em" }} />
					<Line
						type="monotone"
						dataKey="restaurant_sales"
						stroke="#DC2626"
						strokeWidth={3}
						dot={{ fill: "#DC2626", r: 4 }}
						name="Restaurant Sales"
					/>
					<Line
						type="monotone"
						dataKey="grocery_sales"
						stroke="#059669"
						strokeWidth={3}
						dot={{ fill: "#059669", r: 4 }}
						name="Grocery Sales"
					/>
					<Line
						type="monotone"
						dataKey="delivery_orders"
						stroke="#2563EB"
						strokeWidth={3}
						dot={{ fill: "#2563EB", r: 4 }}
						name="Delivery Orders"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineChartComponent;
