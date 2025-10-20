import React from "react";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { radarChartData } from "../data/sampleData";

const RadarChartComponent: React.FC = () => {
	return (
		<div className="chart-container">
			<h3>Irish Food Supply Chain Resilience</h3>
			<p className="chart-subtitle">
				Performance metrics before, during, and after COVID
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
					<PolarGrid />
					<PolarAngleAxis dataKey="metric" />
					<PolarRadiusAxis />
					<Radar
						name="Pre-COVID"
						dataKey="pre_covid"
						stroke="#059669"
						fill="#059669"
						fillOpacity={0.6}
					/>
					<Radar
						name="COVID Impact"
						dataKey="covid_impact"
						stroke="#DC2626"
						fill="#DC2626"
						fillOpacity={0.6}
					/>
					<Radar
						name="Recovery"
						dataKey="recovery"
						stroke="#2563EB"
						fill="#2563EB"
						fillOpacity={0.6}
					/>
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarChartComponent;
