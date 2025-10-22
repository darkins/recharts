import { useState, useEffect } from "react";
import { loadAllCSVData } from "../utils/csvLoader";
import * as hardcodedData from "../data/sampleData";

interface DataSet {
	lineChartData: unknown[];
	barChartData: unknown[];
	pieChartData: unknown[];
	areaChartData: unknown[];
	scatterChartData: unknown[];
	radarChartData: unknown[];
}

// Data context for the application
export const useDataSource = () => {
	const [dataSource, setDataSource] = useState<"hardcoded" | "csv">(
		"hardcoded"
	);
	const [csvData, setCsvData] = useState<DataSet | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Load CSV data when switching to CSV mode
	useEffect(() => {
		if (dataSource === "csv" && !csvData) {
			setIsLoading(true);
			setError(null);

			loadAllCSVData()
				.then((data) => {
					if (data) {
						setCsvData(data);
					} else {
						setError("Failed to load CSV data. Using hardcoded data instead.");
						setDataSource("hardcoded");
					}
				})
				.catch((err) => {
					setError(`Error loading CSV: ${err.message}`);
					setDataSource("hardcoded");
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [dataSource, csvData]);

	// Get data based on current source
	const getData = () => {
		if (dataSource === "csv" && csvData) {
			return csvData;
		}
		return hardcodedData;
	};

	return {
		dataSource,
		setDataSource,
		data: getData(),
		isLoading,
		error,
		hasCSVData: !!csvData,
	};
};
