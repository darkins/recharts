# CSV Data Import Guide

## Overview

This application supports importing real data from CSV files stored in the `public/data/` folder. You can replace the template CSV files with your actual data from Irish sources.

## Step-by-Step Instructions

### Step 1: Access Irish Data Sources

#### CSO.ie (Central Statistics Office)

1. Visit https://data.cso.ie/
2. Search for relevant datasets:
   - **Retail Sales Index (RSIM)**: Monthly retail sales data
   - **Consumer Price Index (CPI)**: Price inflation data
   - **Labour Force Survey**: Employment and PUP data
3. Download data in Excel or CSV format
4. Filter for 2020-2021 period (COVID-19 impact)

#### Specific CSO Tables to Download:

- **RSM08**: Retail Sales Volume Index (for food/beverage sales)
- **CPM01**: Consumer Price Index (for food prices)
- **LFM01**: Labour Force (for pandemic unemployment)

#### ESRI.ie

1. Visit https://www.esri.ie/publications
2. Search for COVID-19 economic impact papers
3. Download working papers with datasets

#### Department of Social Protection

1. Visit gov.ie/dsp
2. Search for PUP (Pandemic Unemployment Payment) statistics
3. Download monthly recipient data

### Step 2: Format Your Data

Each CSV file must match the exact column structure:

#### line-chart-data.csv (Irish Food Sales)

```
month,restaurant_sales,supermarket_sales,delivery_sales
Jan 2020,65000,45000,8000
```

- **month**: Format as "MMM YYYY" (e.g., "Jan 2020")
- **restaurant_sales**: Euro thousands (e.g., 65000 = €65 million)
- **supermarket_sales**: Euro thousands
- **delivery_sales**: Euro thousands

**Data Source**: CSO Retail Sales Index - Filter for:

- NACE Code 56: Food and beverage service activities (restaurants)
- NACE Code 47.11: Retail sale in non-specialized stores (supermarkets)

#### bar-chart-data.csv (Supermarket Categories)

```
category,pre_covid,covid_peak
Fresh Produce,42000,58000
```

- **category**: Product category name
- **pre_covid**: Sales in Feb 2020 (pre-lockdown)
- **covid_peak**: Sales in Apr 2020 (lockdown peak)

**Data Source**: CSO Retail Sales Index - Breakdown by product group

#### pie-chart-data.csv (Delivery Market Share)

```
name,value,fill
Just Eat,42,#DC2626
```

- **name**: Company/platform name
- **value**: Market share percentage
- **fill**: Hex color code (keep existing colors or use web-safe colors)

**Data Source**: Industry reports, Irish Times business section, company annual reports

#### area-chart-data.csv (Food Insecurity & Support)

```
month,food_insecure,pandemic_payment,food_banks
Jan 2020,420000,0,85000
```

- **month**: Format as "MMM YYYY"
- **food_insecure**: Number of households
- **pandemic_payment**: Number of PUP recipients
- **food_banks**: Number of users

**Data Sources**:

- CSO Social Conditions surveys
- Department of Social Protection PUP statistics
- Food Cloud/Crosscare food bank reports

#### scatter-chart-data.csv (Price vs Demand)

```
category,price_increase,demand_change
Restaurant Dining,2.8,-75
```

- **category**: Food category
- **price_increase**: Percentage increase (e.g., 2.8 = 2.8%)
- **demand_change**: Percentage change (negative for decrease)

**Data Sources**:

- CSO Consumer Price Index (for price_increase)
- CSO Retail Sales Index (for demand_change)

#### radar-chart-data.csv (Supply Chain Resilience)

```
metric,pre_covid,covid_impact,recovery,fullMark
Supply Availability,92,58,88,100
```

- **metric**: Supply chain metric name
- **pre_covid**: Score before COVID (0-100)
- **covid_impact**: Score during lockdown (0-100)
- **recovery**: Score after restrictions eased (0-100)
- **fullMark**: Always 100 (maximum score)

**Data Source**: CSO Business Impact of COVID-19 surveys, industry reports

### Step 3: Replace Template Files

1. Open the CSV files in Excel or a text editor
2. Replace the template data with your actual data
3. **Important**: Keep the exact same column headers
4. Save as CSV (Comma delimited)
5. Copy to `public/data/` folder in your project

### Step 4: Verify Data Load

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for any CSV loading errors
4. Check that charts display correctly with your data

## Data Validation Checklist

- [ ] All CSV files have correct column headers
- [ ] Date formats are consistent ("MMM YYYY")
- [ ] Numbers don't include commas, currency symbols, or text
- [ ] Color codes in pie-chart-data.csv are valid hex codes
- [ ] No empty cells or missing values
- [ ] File encoding is UTF-8
- [ ] Files are named exactly as shown (case-sensitive)

## Troubleshooting

### Chart shows no data

- Check browser console for CSV loading errors
- Verify CSV files are in `public/data/` folder
- Ensure column names exactly match templates

### Numbers not displaying correctly

- Remove commas from numbers (use 65000 not 65,000)
- Remove currency symbols (use 65000 not €65,000)
- Use periods for decimals (use 2.8 not 2,8)

### Dates not parsing

- Use "MMM YYYY" format: "Jan 2020" not "January 2020"
- Use English month abbreviations

## Example Workflow

1. Download CSO Retail Sales Index data for 2020
2. Open in Excel
3. Filter for food & beverage categories
4. Calculate monthly values in thousands of euros
5. Format month column as "Jan 2020", "Feb 2020", etc.
6. Copy to line-chart-data.csv template
7. Save and reload application

## Need Help?

If you encounter issues:

1. Check the README.md in the `public/data/` folder
2. Verify CSV format matches templates exactly
3. Review browser console for specific error messages
4. Ensure data is from official Irish sources (CSO.ie, ESRI.ie, gov.ie)

## Data Attribution

Remember to cite your data sources:

- CSO.ie: Central Statistics Office of Ireland
- ESRI.ie: Economic and Social Research Institute
- Department of Social Protection
- Other Irish government sources

Add attribution in your application footer or about page.
