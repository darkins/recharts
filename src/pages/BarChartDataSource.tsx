import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const BarChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Irish Supermarket Category Sales</h1>
				<h2>Pre-COVID vs COVID Peak Comparison</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Realistic Estimates)
					</p>
					<p>
						Data reflects realistic trends based on publicly reported patterns
						during Ireland's COVID-19 lockdowns (Feb-Apr 2020).
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>CSO Retail Sales Index</strong> - Product category
							breakdowns
							<br />
							<a
								href="https://www.cso.ie/en/statistics/retailandservices/retailsalesindex/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.cso.ie/en/statistics/retailandservices/retailsalesindex/
							</a>
						</li>
						<li>
							<strong>Supermarket Chains</strong> - Public statements from
							SuperValu, Tesco, Dunnes
						</li>
						<li>
							<strong>Irish Times</strong> - Reporting on panic buying and
							product shortages
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Key Findings</h3>
					<p>
						The data compares sales in <strong>February 2020</strong>{" "}
						(pre-lockdown baseline) versus <strong>April 2020</strong> (peak
						lockdown):
					</p>
					<ul>
						<li>
							<strong>Toilet Paper:</strong> +450% (widely reported shortages)
						</li>
						<li>
							<strong>Baking Supplies:</strong> +383% (sourdough bread trend)
						</li>
						<li>
							<strong>Pasta & Rice:</strong> +383% (long shelf-life stockpiling)
						</li>
						<li>
							<strong>Cleaning Products:</strong> +292% (hygiene concerns)
						</li>
						<li>
							<strong>Canned Goods:</strong> +182% (pantry stocking)
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>✅ How to Use Actual CSO Data</h3>
					<ol>
						<li>
							Visit{" "}
							<a
								href="https://data.cso.ie/"
								target="_blank"
								rel="noopener noreferrer"
							>
								data.cso.ie
							</a>
						</li>
						<li>
							Search for <strong>RSM08</strong> (Retail Sales Index by product
							group)
						</li>
						<li>Select Feb 2020 and Apr 2020</li>
						<li>Download food and household product categories</li>
						<li>
							Update <code>public/data/bar-chart-data.csv</code>
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

export default BarChartDataSource;
