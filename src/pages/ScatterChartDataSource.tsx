import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const ScatterChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Irish Food Prices vs Demand</h1>
				<h2>Correlation Analysis During COVID-19</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Calculated from Public Data)
					</p>
					<p>
						Data shows realistic correlations between price changes and demand
						shifts based on CSO indices and retail reports.
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>CSO Consumer Price Index (CPI)</strong> - Food price
							inflation
							<br />
							<a
								href="https://www.cso.ie/en/statistics/prices/consumerpriceindex/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.cso.ie/en/statistics/prices/consumerpriceindex/
							</a>
						</li>
						<li>
							<strong>CSO Retail Sales Index (RSI)</strong> - Volume and value
							changes
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
							<strong>Supermarket Reports</strong> - Sales data from major Irish
							retailers
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Methodology</h3>
					<p>
						The chart correlates two CSO measurements for each food category:
					</p>
					<ul>
						<li>
							<strong>Price Increase (%):</strong> CPI change Feb 2020 → Apr
							2020
						</li>
						<li>
							<strong>Demand Change (%):</strong> RSI volume change Feb 2020 →
							Apr 2020
						</li>
					</ul>
					<p>
						<strong>Example - Fresh Vegetables:</strong>
					</p>
					<ul>
						<li>Price increased 8% (supply chain disruptions)</li>
						<li>Demand increased 45% (home cooking surge)</li>
						<li>Result: Demand remained strong despite higher prices</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>🔍 Key Insights</h3>
					<ul>
						<li>
							<strong>Fresh Produce:</strong> High demand despite price
							increases (home cooking)
						</li>
						<li>
							<strong>Meat/Dairy:</strong> Moderate price and demand increases
							(essential goods)
						</li>
						<li>
							<strong>Packaged Foods:</strong> Minimal price changes but high
							demand (stockpiling)
						</li>
						<li>
							<strong>Restaurant Meals:</strong> Prices stable but demand
							collapsed (closures)
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>✅ How to Calculate from CSO Data</h3>
					<ol>
						<li>Download CPI data for food subindices (Feb & Apr 2020)</li>
						<li>Download RSI data for corresponding categories</li>
						<li>Calculate % change: ((Apr - Feb) / Feb) × 100</li>
						<li>Plot price change (x-axis) vs demand change (y-axis)</li>
						<li>
							Update <code>public/data/scatter-chart-data.csv</code>
						</li>
					</ol>
					<p>
						See <code>SCATTER-DATA-SOURCE-SUMMARY.md</code> for detailed
						calculation guide.
					</p>
				</section>

				<button className="back-button bottom" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default ScatterChartDataSource;
