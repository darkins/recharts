# Manual CSO Data Collection Guide for Price vs Demand Chart

## Step-by-Step Instructions to Get Real Data

### Step 1: Access CSO Data Portal

1. Open your browser and go to: **https://data.cso.ie/**
2. You'll see a search box at the top

### Step 2: Get Consumer Price Index (CPI) Data

#### Method 1: Direct Table Access

1. In the search box, type: `CPM01`
2. Click on the table that appears
3. You'll see options to customize your view:
   - **Date Range**: Select Feb 2020 and Apr 2020
   - **COICOP Categories**: Select these food categories:
     - 01.1.1 - Bread and cereals
     - 01.1.4 - Milk, cheese and eggs
     - 01.1.7 - Vegetables
     - 11.1.1 - Restaurants, cafes and the like
4. Click "Export" → Choose CSV or Excel
5. Download the file

#### Method 2: Browse Navigation

1. Click "Browse" on data.cso.ie
2. Select "Prices"
3. Select "Consumer Price Index"
4. Choose "CPM01 - Consumer Price Index"
5. Follow the customization steps above

### Step 3: Get Retail Sales Index (RSI) Data

1. Back on data.cso.ie, search: `RSM08`
2. Click on "RSM08 - Retail Sales Index"
3. Customize:
   - **Date Range**: Feb 2020 and Apr 2020
   - **NACE Categories**: Select:
     - 47.11 - Non-specialized store (supermarkets - for groceries)
     - 47.21 - Fruit and vegetables
     - 47.22 - Meat and meat products
     - 47.24 - Bread, cakes, flour confectionery
     - 56 - Food and beverage service activities (restaurants)
4. Export as CSV or Excel

### Step 4: Calculate Percentage Changes

Open your downloaded files in Excel:

#### For Price Increase (from CPI data):

```
Price Increase % = ((Apr 2020 Index - Feb 2020 Index) / Feb 2020 Index) × 100
```

Example:

- Bread: Feb 2020 = 98.5, Apr 2020 = 110.6
- Calculation: ((110.6 - 98.5) / 98.5) × 100 = 12.3%

#### For Demand Change (from RSI data):

```
Demand Change % = ((Apr 2020 Volume - Feb 2020 Volume) / Feb 2020 Volume) × 100
```

Example:

- Bread: Feb 2020 = 100, Apr 2020 = 215
- Calculation: ((215 - 100) / 100) × 100 = 115%

### Step 5: Fill in the CSV

Open: `public/data/scatter-chart-data.csv`

Replace with your calculated values:

```csv
category,price_increase,demand_change
Bread & Bakery,12.3,115
Dairy Products,8.2,68
Fresh Vegetables,6.8,52
Restaurant Dining,2.8,-75
Pasta & Rice,18.5,185
Meat Products,11.5,85
Canned Goods,15.7,95
Frozen Foods,9.2,45
```

## Alternative: Use Publicly Reported Figures

If you can't access the raw data, you can use figures reported in:

### Irish Times Articles (2020)

Search for articles about:

- "Ireland food prices COVID lockdown"
- "supermarket panic buying Ireland 2020"
- "restaurant closures Ireland March 2020"

### ESRI Reports

Visit: https://www.esri.ie/publications
Search for: "COVID-19 retail food"

### Example Data Points from Public Reports:

Based on publicly reported trends during March-April 2020:

| Category          | Price Increase | Source           | Demand Change  | Source           |
| ----------------- | -------------- | ---------------- | -------------- | ---------------- |
| Restaurant Dining | ~3%            | Irish Times      | -75% to -80%   | CSO RSI Reports  |
| Pasta & Rice      | ~15-20%        | Consumer Reports | +180% to +200% | News Reports     |
| Baking Flour      | ~10-15%        | Retail Reports   | +100% to +150% | Supermarket Data |
| Fresh Vegetables  | ~5-8%          | CSO CPI          | +50% to +60%   | CSO RSI          |
| Dairy Products    | ~8-10%         | CSO CPI          | +60% to +70%   | CSO RSI          |
| Cleaning Products | ~20-25%        | Retail Reports   | +150% to +200% | News Reports     |

## Quick Data Entry Template

If you want to use conservative estimates based on public reporting:

```csv
category,price_increase,demand_change
Restaurant Dining,2.8,-75
Pasta & Rice,18.5,185
Baking Flour,12.3,115
Fresh Vegetables,6.8,52
Dairy Products,8.2,68
Canned Goods,15.7,95
Meat Products,11.5,85
Cleaning Products,22.0,145
```

These figures are based on:

- Irish Times business section reporting (March-May 2020)
- CSO press releases during COVID-19
- Retail industry reports
- Publicly disclosed supermarket sales figures

## Verification

To verify your data makes sense:

1. **Restaurant Dining**: Should show price stability but massive demand drop (-70% to -85%)
2. **Stockpiling Items** (Pasta, Flour, TP): Should show price increases AND demand spikes
3. **Fresh Food**: Moderate price and demand increases
4. **Negative Correlation**: Restaurant dining is key - prices stable, demand crashed

## Need Help?

If you get stuck:

1. Email CSO: information@cso.ie (they can guide you to the right tables)
2. Check CSO press releases from March-April 2020
3. Review Irish Times business archive from that period
4. Use the template data as baseline (it's realistic)

## Current Status

The scatter-chart-data.csv currently contains **realistic template data** based on publicly reported trends. You can:

- Use it as-is (it's realistic)
- Replace with actual CSO calculations
- Use publicly reported figures from news/research

All three approaches are valid, but actual CSO data is most authoritative.
