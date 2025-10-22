// CSV Data Loader Utility
// This file provides functions to load data from CSV files

interface CSVRow {
	[key: string]: string | number;
}

/**
 * Parse CSV text into array of objects
 */
export const parseCSV = (csvText: string): CSVRow[] => {
	const lines = csvText.trim().split("\n");
	const headers = lines[0].split(",").map((h) => h.trim());

	return lines.slice(1).map((line) => {
		const values = line.split(",").map((v) => v.trim());
		const row: CSVRow = {};

		headers.forEach((header, index) => {
			const value = values[index];
			// Try to convert to number if possible
			const numValue = Number(value);
			row[header] = isNaN(numValue) ? value : numValue;
		});

		return row;
	});
};

/**
 * Load CSV file from public/data folder
 */
export const loadCSVData = async (filename: string): Promise<CSVRow[]> => {
	try {
		const response = await fetch(`/data/${filename}`);
		if (!response.ok) {
			throw new Error(`Failed to load ${filename}`);
		}
		const csvText = await response.text();
		return parseCSV(csvText);
	} catch (error) {
		console.error(`Error loading CSV file ${filename}:`, error);
		throw error;
	}
};

/**
 * Load all CSV data files
 */
export const loadAllCSVData = async () => {
	try {
		const [
			lineChartData,
			barChartData,
			pieChartData,
			areaChartData,
			scatterChartData,
			radarChartData,
		] = await Promise.all([
			loadCSVData("line-chart-data.csv"),
			loadCSVData("bar-chart-data.csv"),
			loadCSVData("pie-chart-data.csv"),
			loadCSVData("area-chart-data.csv"),
			loadCSVData("scatter-chart-data.csv"),
			loadCSVData("radar-chart-data.csv"),
		]);

		return {
			lineChartData,
			barChartData,
			pieChartData,
			areaChartData,
			scatterChartData,
			radarChartData,
		};
	} catch (error) {
		console.error("Error loading CSV data:", error);
		return null;
	}
};
