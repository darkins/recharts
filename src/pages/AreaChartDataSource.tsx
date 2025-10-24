import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataSource.css";

const AreaChartDataSource: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="data-source-page">
			<div className="data-source-container">
				<button className="back-button" onClick={() => navigate("/")}>
					← Back to Dashboard
				</button>

				<h1>Food Insecurity & Support in Ireland</h1>
				<h2>Impact of COVID-19 on Vulnerable Populations</h2>

				<section className="source-section">
					<h3>📊 Current Data Status</h3>
					<p className="status-badge template">
						Template Data (Based on Published Reports)
					</p>
					<p>
						Data reflects trends reported in academic research, government
						statistics, and charity reports during Ireland's COVID-19 emergency
						(2020-2021).
					</p>
				</section>

				<section className="source-section">
					<h3>🇮🇪 Data Based On</h3>
					<ul>
						<li>
							<strong>ESRI Research</strong> - Food insecurity studies
							<br />
							<a
								href="https://www.esri.ie/publications/food-poverty-and-policy-in-ireland"
								target="_blank"
								rel="noopener noreferrer"
							>
								Food Poverty and Policy in Ireland
							</a>
						</li>
						<li>
							<strong>Department of Social Protection</strong> - Pandemic
							Unemployment Payment (PUP) statistics
							<br />
							<a
								href="https://www.gov.ie/en/publication/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.gov.ie/en/publication/
							</a>
						</li>
						<li>
							<strong>SVP & Crosscare</strong> - Food bank usage reports
						</li>
						<li>
							<strong>Irish Times</strong> - Reporting on food poverty during
							pandemic
						</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>📈 Three Key Metrics</h3>
					<p>
						<strong>1. Food Insecure Households (% of population):</strong>
					</p>
					<ul>
						<li>Pre-COVID baseline: ~10% experiencing food poverty</li>
						<li>April 2020 peak: ~18% (lockdown + job losses)</li>
						<li>Recovery phase: Gradual decline to ~12% by late 2021</li>
					</ul>

					<p>
						<strong>
							2. Pandemic Unemployment Payment Recipients (thousands):
						</strong>
					</p>
					<ul>
						<li>March 2020: Rapid surge as lockdowns began</li>
						<li>April-May 2020: Peak at ~600,000 recipients</li>
						<li>
							Gradual decline: As businesses reopened and economy recovered
						</li>
					</ul>

					<p>
						<strong>3. Food Bank Usage (thousands served monthly):</strong>
					</p>
					<ul>
						<li>
							Pre-COVID: ~40,000 people/month (SVP, Crosscare, local charities)
						</li>
						<li>April 2020: Surged to ~90,000 as need increased</li>
						<li>Sustained demand: Remained elevated through 2020-2021</li>
					</ul>
				</section>

				<section className="source-section">
					<h3>✅ How to Use Actual Data</h3>
					<ol>
						<li>
							<strong>PUP Data:</strong> Download from{" "}
							<a
								href="https://www.gov.ie/en/publication/"
								target="_blank"
								rel="noopener noreferrer"
							>
								gov.ie DSP publications
							</a>
						</li>
						<li>
							<strong>Food Insecurity:</strong> ESRI research papers and CSO
							SILC data
						</li>
						<li>
							<strong>Food Banks:</strong> Contact SVP or Crosscare for reports
						</li>
						<li>
							Update <code>public/data/area-chart-data.csv</code> with monthly
							figures
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

export default AreaChartDataSource;
