import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const RadarChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Irish Food Supply Chain Resilience</h1>
				<h2>Multi-Dimensional Impact Assessment</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Research-Based Estimates)
					</p>
					<p>
						Data reflects supply chain performance across six dimensions based
						on CSO surveys and industry reports.
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>CSO Business Impact of COVID-19 Survey</strong>
							<br />
							<a
								href="https://www.cso.ie/en/statistics/covid-19/businessimpactofcovid-19"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.cso.ie/en/statistics/covid-19/businessimpactofcovid-19
							</a>
						</li>
						<li>
							<strong>Food Safety Authority of Ireland (FSAI)</strong> - Supply
							chain monitoring
						</li>
						<li>
							<strong>Retail Ireland</strong> - Industry supply chain reports
						</li>
						<li>
							<strong>Irish Times</strong> - Business reporting on food sector
							disruptions
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Six Supply Chain Dimensions</h3>
					<p>Performance scored 0-100 across three time periods:</p>

					<p>
						<strong>1. Delivery Reliability</strong>
					</p>
					<ul>
						<li>Pre-COVID: 95% (baseline)</li>
						<li>COVID Impact: 65% (driver shortages, border delays)</li>
						<li>Recovery: 85% (adapted logistics)</li>
					</ul>

					<p>
						<strong>2. Inventory Levels</strong>
					</p>
					<ul>
						<li>Pre-COVID: 85% (normal stock)</li>
						<li>COVID Impact: 45% (panic buying, supply disruptions)</li>
						<li>Recovery: 80% (restocked, buffer increased)</li>
					</ul>

					<p>
						<strong>3. Supplier Availability</strong>
					</p>
					<ul>
						<li>Pre-COVID: 90% (stable supply base)</li>
						<li>COVID Impact: 60% (farm closures, processing delays)</li>
						<li>Recovery: 85% (diversified suppliers)</li>
					</ul>

					<p>
						<strong>4. Distribution Speed</strong>
					</p>
					<ul>
						<li>Pre-COVID: 90% (efficient networks)</li>
						<li>COVID Impact: 55% (staff shortages, restrictions)</li>
						<li>Recovery: 75% (new protocols)</li>
					</ul>

					<p>
						<strong>5. Product Quality</strong>
					</p>
					<ul>
						<li>Pre-COVID: 95% (high standards)</li>
						<li>COVID Impact: 80% (rushed processing, storage issues)</li>
						<li>Recovery: 90% (standards restored)</li>
					</ul>

					<p>
						<strong>6. Cost Efficiency</strong>
					</p>
					<ul>
						<li>Pre-COVID: 80% (competitive market)</li>
						<li>COVID Impact: 50% (higher logistics, waste costs)</li>
						<li>Recovery: 70% (ongoing challenges)</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>✅ How to Use Actual Data</h3>
					<ol>
						<li>Access CSO Business Impact Survey data portal</li>
						<li>Filter for food sector responses (NACE codes 10-11)</li>
						<li>Extract metrics on supply chain disruptions</li>
						<li>Normalize to 0-100 scale for each dimension</li>
						<li>
							Update <code>public/data/radar-chart-data.csv</code>
						</li>
					</ol>
				</section>

				<button className="back-button bottom" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default RadarChartDataSource;
