# Data Import Instructions

This folder contains CSV templates for importing actual data from Irish sources.

## Data Sources

### Official Irish Data Sources:

1. **CSO.ie (Central Statistics Office)**

   - Retail Sales Index: https://data.cso.ie/ (search for "RSIM")
   - Consumer Price Index: https://data.cso.ie/ (search for "CPI")
   - Labour Market: https://data.cso.ie/ (search for "LFS")

2. **ESRI.ie (Economic and Social Research Institute)**

   - Research papers and working papers
   - Economic data and analysis

3. **Department of Social Protection**
   - PUP (Pandemic Unemployment Payment) statistics
   - Social welfare data

## CSV File Templates

### 1. line-chart-data.csv

Monthly food sales data for 2020

- Columns: month, restaurant_sales, supermarket_sales, delivery_sales
- Period: January 2020 - December 2020

### 2. bar-chart-data.csv

Supermarket category sales comparison

- Columns: category, pre_covid, covid_peak
- Categories: Various food/grocery items

### 3. pie-chart-data.csv

Food delivery market share

- Columns: name, value, fill
- Platforms: Just Eat, Deliveroo, Uber Eats, Local/Direct, Others

### 4. area-chart-data.csv (Food Insecurity & Support)

Food insecurity and support metrics

- Columns: month, food_insecure, pandemic_payment, food_banks
- Period: January 2020 - December 2020

### 5. scatter-chart-data.csv (Price vs Demand)

Food price increases vs demand changes

- Columns: category, price_increase, demand_change
- Various food categories

### 6. radar-chart-data.csv (Supply Chain Resilience)

Supply chain performance metrics

- Columns: metric, pre_covid, covid_impact, recovery, fullMark
- Metrics: Supply Availability, Delivery Capacity, Price Stability, etc.

## How to Use

1. Download data from CSO.ie or other sources
2. Format your data to match the CSV templates in this folder
3. Replace the template files with your actual data
4. The application will automatically load the new data

## Notes

- Keep column headers exactly as shown
- Use commas as delimiters
- Dates should be in "MMM YYYY" format (e.g., "Jan 2020")
- Numbers should not include currency symbols or commas
- Color codes for pie chart should be in hex format (e.g., #DC2626)
