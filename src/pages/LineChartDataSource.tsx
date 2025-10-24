import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const LineChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Irish Food Sales During COVID-19</h1>
				<h2>Data Source Information</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Realistic Estimates)
					</p>
					<p>
						The data currently displayed reflects realistic trends based on
						publicly reported patterns from Irish sources during the COVID-19
						pandemic (2020).
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>CSO Retail Sales Index</strong> - General trends from 2020
							lockdown period
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
							<strong>Irish Times Business Reporting</strong> - Coverage of
							restaurant closures and grocery surges
						</li>
						<li>
							<strong>Industry Reports</strong> - Restaurant Association of
							Ireland and retail sector statements
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Data Series Explained</h3>
					<div className="data-series">
						<h4>Restaurant Sales (Red Line)</h4>
						<p>
							Shows dramatic decline from €580M (Jan 2020) to €120M (Apr 2020) -
							reflecting the closure of restaurants during lockdown. Based on
							publicly reported 70-80% declines in the hospitality sector.
						</p>
					</div>
					<div className="data-series">
						<h4>Supermarket Sales (Green Line)</h4>
						<p>
							Shows surge from €820M (Jan 2020) to €1,280M (Apr 2020) -
							reflecting panic buying and shift from dining out to home cooking.
							Based on CSO reports of 50-60% increases in grocery sales.
						</p>
					</div>
					<div className="data-series">
						<h4>Delivery Orders (Orange Line)</h4>
						<p>
							Shows increase from €45M (Jan 2020) to €295M (Apr 2020) -
							reflecting the surge in food delivery services. Based on industry
							reports from Just Eat, Deliveroo, and other platforms.
						</p>
					</div>
				</section>

				<section className="source-section">
					<h3>✅ How to Use Actual CSO Data</h3>
					<p>To replace this with official CSO data:</p>
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
							Search for table <strong>RSM08</strong> (Retail Sales Monthly)
						</li>
						<li>
							Select NACE categories:
							<ul>
								<li>56 - Food and beverage service activities (restaurants)</li>
								<li>
									47.11 - Retail sale in non-specialized stores (supermarkets)
								</li>
							</ul>
						</li>
						<li>Download data for Jan-Dec 2020</li>
						<li>
							Update <code>public/data/line-chart-data.csv</code>
						</li>
					</ol>
					<p className="guide-link">
						📖 See <strong>CSV-IMPORT-GUIDE.md</strong> for detailed
						instructions
					</p>
				</section>

				<section className="source-section">
					<h3>📝 Data Transparency</h3>
					<p>
						The current data is <strong>illustrative</strong> and based on
						widely reported trends during Ireland's COVID-19 lockdowns. While
						directionally accurate, it is not a direct calculation from raw CSO
						datasets. For academic or official use, we recommend replacing with
						actual CSO Retail Sales Index data.
					</p>
				</section>

				<button className="back-button bottom" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default LineChartDataSource;
