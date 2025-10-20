import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { areaChartData } from "../data/sampleData";

const AreaChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<h3>Food Insecurity & Support in Ireland</h3>
			<p className="chart-subtitle">
				Pandemic Unemployment Payment impact (persons)
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart
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
					<Area
						type="monotone"
						dataKey="food_insecure"
						stackId="1"
						stroke="#DC2626"
						fill="#DC2626"
						fillOpacity={0.7}
						name="Food Insecure"
					/>
					<Area
						type="monotone"
						dataKey="pandemic_payment"
						stackId="1"
						stroke="#059669"
						fill="#059669"
						fillOpacity={0.7}
						name="PUP Recipients"
					/>
					<Area
						type="monotone"
						dataKey="food_banks"
						stackId="1"
						stroke="#D97706"
						fill="#D97706"
						fillOpacity={0.7}
						name="Food Bank Users"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AreaChartComponent;
