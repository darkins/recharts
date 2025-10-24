import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const PieChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Irish Food Delivery Market Share</h1>
				<h2>Platform Competition During COVID-19</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Industry Estimates)
					</p>
					<p>
						Market share estimates based on industry reports, app download data,
						and media coverage during 2020-2021.
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>Irish Times</strong> - Food delivery industry coverage
							<br />
							<a
								href="https://www.irishtimes.com/business"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.irishtimes.com/business
							</a>
						</li>
						<li>
							<strong>App Annie / Sensor Tower</strong> - Mobile app download
							rankings
						</li>
						<li>
							<strong>Company Reports</strong> - Just Eat Takeaway, Deliveroo,
							Uber Eats public statements
						</li>
						<li>
							<strong>Restaurant Association of Ireland</strong> - Industry
							surveys
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Market Distribution</h3>
					<p>
						Estimated market share in Ireland during COVID-19 peak (2020-2021):
					</p>
					<ul>
						<li>
							<strong>Just Eat:</strong> 35% (established market leader)
						</li>
						<li>
							<strong>Deliveroo:</strong> 30% (strong urban presence)
						</li>
						<li>
							<strong>Uber Eats:</strong> 25% (rapid growth)
						</li>
						<li>
							<strong>Others:</strong> 10% (local platforms, direct restaurant
							delivery)
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>⚠️ Data Limitations</h3>
					<p>
						Private companies don't publish exact market share data. These
						figures are estimates based on:
					</p>
					<ul>
						<li>App store rankings and download counts</li>
						<li>Restaurant partnership announcements</li>
						<li>Media reports and industry analysis</li>
						<li>Consumer surveys from RAI and other industry bodies</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>✅ Alternative Data Sources</h3>
					<p>For more authoritative data, consider:</p>
					<ul>
						<li>
							CSO E-Commerce Statistics (includes food delivery categories)
						</li>
						<li>ComReg communications market reports</li>
						<li>Restaurant Association of Ireland member surveys</li>
						<li>Custom consumer surveys or focus groups</li>
					</ul>
				</section>

				<button className="back-button bottom" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default PieChartDataSource;
