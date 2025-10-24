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
import { areaChartData } from "../data/sampleData";

const AreaChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3>Food Insecurity & Support in Ireland</h3>
				<Link to="/data-source/area-chart" className="data-source-link">
					📊 Data Source
				</Link>
			</div>
			<p className="chart-subtitle">
				Pandemic Unemployment Payment impact (persons)
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={areaChartData}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend wrapperStyle={{ paddingTop: "1em" }} />
					<Bar dataKey="food_insecure" fill="#DC2626" name="Food Insecure" />
					<Bar
						dataKey="pandemic_payment"
						fill="#059669"
						name="PUP Recipients"
					/>
					<Bar dataKey="food_banks" fill="#D97706" name="Food Bank Users" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AreaChartComponent;
