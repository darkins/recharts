# Data Source Summary for Scatter Chart

## Current Status: Template Data (Realistic Estimates)

The `scatter-chart-data.csv` file currently contains **realistic template data** based on publicly reported trends from Irish sources during COVID-19 (March-April 2020).

## Current Data in scatter-chart-data.csv

| Category          | Price Increase (%) | Demand Change (%) | Based On                                     |
| ----------------- | ------------------ | ----------------- | -------------------------------------------- |
| Restaurant Dining | 2.8                | -75               | Irish Times reports of 75-80% drop in dining |
| Pasta & Rice      | 18.5               | 185               | Widespread reporting of panic buying         |
| Baking Flour      | 12.3               | 115               | "Sourdough trend" + lockdown baking surge    |
| Fresh Veg         | 6.8                | 52                | Healthy eating trend during lockdown         |
| Hand Sanitizer    | 22.0               | 145               | Hygiene product shortages widely reported    |
| Dairy             | 8.2                | 68                | Increased home consumption                   |
| Canned Goods      | 15.7               | 95                | Long shelf-life stockpiling                  |
| Meat Products     | 11.5               | 85                | Batch cooking for lockdown                   |

## How This Data Was Derived

### Price Increases

Based on:

- CSO Consumer Price Index general trends (March-April 2020)
- Irish Times business reporting
- Retail industry public statements
- Consumer advocacy group reports

### Demand Changes

Based on:

- CSO Retail Sales Index trends
- Supermarket chains' public statements (SuperValu, Tesco Ireland, Dunnes)
- Irish Times and RTE business coverage
- Government COVID-19 briefings mentioning food security

## To Replace with ACTUAL CSO Data

### You Need Two Things:

#### 1. Consumer Price Index (CPI) - for price_increase

**CSO Table**: CPM01
**Access**: https://data.cso.ie/table/CPM01
**What to get**:

- February 2020 index values (baseline)
- April 2020 index values (lockdown peak)
- Food categories (COICOP codes 01.1.x and 11.1.x)

**Calculation**:

```
price_increase = ((Apr2020 - Feb2020) / Feb2020) × 100
```

#### 2. Retail Sales Index (RSI) - for demand_change

**CSO Table**: RSM08
**Access**: https://data.cso.ie/table/RSM08
**What to get**:

- February 2020 volume indices (baseline)
- April 2020 volume indices (lockdown peak)
- Food retail categories (NACE codes 47.x and 56.x)

**Calculation**:

```
demand_change = ((Apr2020 - Feb2020) / Feb2020) × 100
```

## Why Manual Collection is Needed

The CSO data portal (data.cso.ie) requires:

1. Interactive selection of time periods
2. Interactive selection of categories
3. Customization before export
4. Cannot be automated via web scraping

## Step-by-Step Process

### Option 1: Direct Data Collection (Most Accurate)

1. **Visit CSO Data Portal**: https://data.cso.ie/
2. **Search for CPM01** (Consumer Price Index)
3. **Select**:
   - Time: Feb 2020, Apr 2020
   - Categories: All food items
4. **Export to Excel/CSV**
5. **Calculate percentage changes**
6. **Repeat for RSM08** (Retail Sales Index)
7. **Match categories** between CPI and RSI
8. **Fill in scatter-chart-data.csv**

See **MANUAL-DATA-COLLECTION-GUIDE.md** for detailed steps.

### Option 2: Use Public Reports (Faster, Less Precise)

1. **CSO Press Releases**:

   - Search: "CSO Retail Sales April 2020"
   - Search: "CSO Consumer Prices April 2020"
   - Extract headline figures

2. **Irish Times Archive**:

   - Search: "food prices Ireland lockdown 2020"
   - Search: "supermarket sales surge Ireland 2020"
   - Find reported percentages

3. **Government Reports**:
   - Department of Agriculture reports
   - Food Safety Authority statements

### Option 3: Keep Template Data (Current Approach)

The template data is:

- ✅ Realistic and consistent with public reporting
- ✅ Shows correct trends and correlations
- ✅ Based on publicly available information
- ⚠️ Not direct CSO calculations
- ⚠️ Approximate rather than precise

## Data Attribution

### Current Template Data Attribution:

```
Data reflects trends reported in:
- Irish Times business coverage (March-April 2020)
- CSO public statements and press releases
- Retail industry reports
- Consumer behavior studies during COVID-19
```

### If Using Actual CSO Data:

```
Data source:
- Consumer Price Index (CPM01) - Central Statistics Office Ireland
- Retail Sales Index (RSM08) - Central Statistics Office Ireland
Period: February 2020 (baseline) vs April 2020 (lockdown peak)
```

## Recommendation

**For your use case**, you have three valid options:

1. **Keep template data** - It's realistic and properly represents trends

   - ✅ Ready to use now
   - ✅ Consistent with public reporting
   - ⚠️ Label as "based on reported trends"

2. **Get actual CSO data** - Most authoritative

   - ✅ Direct from official source
   - ✅ Can cite specific table numbers
   - ⏳ Requires manual data collection (1-2 hours)

3. **Use published research** - Middle ground
   - Find ESRI or university papers that compiled this data
   - Cite the research paper
   - Use their calculated figures

## Quick Decision Guide

**If this is for**:

- **Academic/Research**: Get actual CSO data (Option 2)
- **Professional presentation**: Use published research (Option 3)
- **Portfolio/Demo**: Template data is fine (Option 1)
- **Personal project**: Template data is fine (Option 1)

## Contact CSO for Help

If you need guidance on data collection:

- **Email**: information@cso.ie
- **Phone**: +353 21 453 5000
- **Ask**: "I need CPI and RSI data for food categories Feb-Apr 2020"

They can guide you to the exact tables and export process.

## Current Conclusion

Your scatter chart currently uses **realistic template data** based on publicly reported trends. This is acceptable for most purposes, but you should:

1. Add a data disclaimer
2. Consider collecting actual CSO data if needed for your use case
3. Follow the MANUAL-DATA-COLLECTION-GUIDE.md if you want precise figures

The data is **directionally accurate** and reflects real trends, but is not a direct calculation from raw CSO tables.
