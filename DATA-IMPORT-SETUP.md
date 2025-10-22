# CSV Data Import System - Setup Complete

## ✅ What's Been Created

### 1. CSV Template Files

Located in: `public/data/`

- **line-chart-data.csv** - Irish Food Sales During COVID-19
- **bar-chart-data.csv** - Supermarket Category Sales
- **pie-chart-data.csv** - Food Delivery Market Share
- **area-chart-data.csv** - Food Insecurity & Support
- **scatter-chart-data.csv** - Price vs Demand Analysis
- **radar-chart-data.csv** - Supply Chain Resilience

Each file contains template data with the correct structure and column headers.

### 2. CSV Loader Utility

Located in: `src/utils/csvLoader.ts`

Functions to:

- Parse CSV files
- Load individual CSV files
- Load all CSV files at once
- Handle errors gracefully

### 3. Data Source Hook

Located in: `src/hooks/useDataSource.ts`

Allows switching between:

- Hardcoded data (current)
- CSV data (your actual data)

### 4. Documentation

- **CSV-IMPORT-GUIDE.md** - Complete step-by-step instructions
- **public/data/README.md** - Quick reference guide

## 📊 How to Use

### Quick Start

1. **Download your data from Irish sources**

   - Visit https://data.cso.ie/
   - Search for Retail Sales Index (RSIM tables)
   - Download 2020-2021 data

2. **Format your data**

   - Open the CSV template files in `public/data/`
   - Replace template data with your actual data
   - Keep column headers exactly as shown
   - Save as CSV

3. **Reload the application**
   - The app will automatically read from CSV files
   - Check browser console for any errors

### Example: Retail Sales Data

To get actual Irish restaurant and supermarket sales:

1. Go to https://data.cso.ie/
2. Search for "RSM08" (Retail Sales Monthly)
3. Filter for:
   - Period: Jan 2020 - Dec 2020
   - NACE 56: Food and beverage services (restaurants)
   - NACE 47.11: Retail in non-specialized stores (supermarkets)
4. Download as CSV or Excel
5. Copy monthly values into `line-chart-data.csv`
6. Convert to thousands (e.g., €65,000,000 → 65000)

## 🔍 Data Sources Reference

### CSO.ie Tables

- **RSM08**: Retail Sales Volume Index
- **CPM01**: Consumer Price Index
- **LFM01**: Labour Force Survey
- **Business Impact Surveys**: COVID-19 specific data

### Finding Data on CSO.ie

1. Visit https://data.cso.ie/
2. Click "Browse" or use search
3. Look for "Retail", "Prices", "Labour"
4. Select relevant table
5. Choose time period (2020-2021)
6. Download CSV or Excel

### Alternative Sources

- **ESRI.ie**: Working papers and research datasets
- **gov.ie/dsp**: PUP (Pandemic Unemployment Payment) statistics
- **Food Cloud**: Food bank usage data
- **Irish Times**: Business reporting and statistics

## ⚠️ Important Notes

### Data Format Requirements

- **Dates**: Must be "MMM YYYY" format (Jan 2020, Feb 2020, etc.)
- **Numbers**: No commas or currency symbols (use 65000 not €65,000)
- **Decimals**: Use period (2.8 not 2,8)
- **Headers**: Must match exactly (case-sensitive)
- **Encoding**: UTF-8

### Common Issues

**Charts not displaying:**

- Check browser console (F12) for errors
- Verify CSV files are in `public/data/` folder
- Ensure column names match templates exactly

**Data looks wrong:**

- Convert large numbers to thousands (millions → thousands)
- Remove all formatting from Excel before saving as CSV
- Check date format matches template

**Colors not showing (pie chart):**

- Use hex format: #DC2626
- Keep the existing colors or use web-safe colors

## 📝 Next Steps

1. Read **CSV-IMPORT-GUIDE.md** for detailed instructions
2. Download data from CSO.ie
3. Fill in the CSV templates
4. Test with your data
5. Update README to document your data sources

## 🎯 Data Validation Checklist

Before using your data:

- [ ] Downloaded from official Irish sources
- [ ] Covers 2020-2021 period (COVID impact)
- [ ] Formatted to match CSV templates
- [ ] Column headers match exactly
- [ ] No empty cells
- [ ] Numbers are in correct scale (thousands)
- [ ] Dates in "MMM YYYY" format
- [ ] Tested in application

## 💡 Tips

1. **Start with one chart** - Test line-chart-data.csv first
2. **Keep backups** - Save original downloaded data
3. **Document sources** - Add comments in CSV files about data origin
4. **Validate numbers** - Compare to published CSO reports
5. **Use Excel** - Easier to manipulate than text editor

## 🆘 Need Help?

If you get stuck:

1. Check the CSV-IMPORT-GUIDE.md
2. Review browser console for specific errors
3. Verify file is saved as CSV (not XLSX)
4. Test with template data first
5. Compare your CSV structure to templates

## 📚 Resources

- CSO Data Portal: https://data.cso.ie/
- CSO Methodology: https://www.cso.ie/en/methods/
- ESRI Publications: https://www.esri.ie/publications
- Irish Times Archive: https://www.irishtimes.com/

Good luck with your data import! 🍀
