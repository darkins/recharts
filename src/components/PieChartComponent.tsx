import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";
import { pieChartData } from "../data/sampleData";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: PieLabelRenderProps) => {
	const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;

	if (
		typeof cx !== "number" ||
		typeof cy !== "number" ||
		typeof midAngle !== "number" ||
		typeof innerRadius !== "number" ||
		typeof outerRadius !== "number" ||
		typeof percent !== "number"
	) {
		return null;
	}

	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const PieChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<h3>Irish Food Delivery Market Share</h3>
			<p className="chart-subtitle">Platform usage during pandemic (%)</p>
			<ResponsiveContainer width="100%" height={300}>
				<PieChart>
					<Pie
						data={pieChartData}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						fill="#8884d8"
						dataKey="value"
					>
						{pieChartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PieChartComponent;
