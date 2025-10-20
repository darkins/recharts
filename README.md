# COVID-19 Impact on Ireland's Food Industry Dashboard

A modern React TypeScript application visualizing the impact of COVID-19 on Ireland's food industry using data from Irish sources including CSO.ie, ESRI.ie, and Irish Times reporting.

## 🇮🇪 Irish Data Sources

All data in this dashboard is based on **factual Irish sources**:

- **Central Statistics Office (CSO.ie)**
  - [Retail Sales Index](https://www.cso.ie/en/statistics/retailandservices/)
  - [Consumer Price Index](https://www.cso.ie/en/statistics/prices/)
  - [COVID-19 Information Hub](https://www.cso.ie/en/releasesandpublications/ep/p-covid19/covid-19informationhub/)
- **Economic and Social Research Institute (ESRI.ie)**
  - Research on food insecurity and social impacts
  - Economic impact studies
- **Irish Times (IrishTimes.com)**
  - Reporting on food industry trends during lockdowns
  - Coverage of grocery inflation and supply chain issues

## 📊 Features

- **Line Chart** - Irish restaurant vs grocery sales during 2020 lockdowns
- **Bar Chart** - Irish supermarket category sales: Pre-COVID vs Peak
- **Pie Chart** - Irish food delivery platform market share (Just Eat, Deliveroo, Uber Eats)
- **Area Chart** - Food insecurity and Pandemic Unemployment Payment (PUP) recipients
- **Scatter Chart** - Irish food price increases vs demand changes
- **Radar Chart** - Irish food supply chain resilience metrics

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Recharts 3.3** - Accessible charting library with WCAG AA compliant colors
- **Vite 5** - Lightning-fast build tool
- **CSS3** - Modern styling with gradients and animations

## 🎨 Accessibility

All charts use **WCAG AA compliant colors** for better accessibility:

- High contrast ratios for text and data visualization
- Web-safe color palette
- Increased stroke widths for better visibility

## 📦 Getting Started

### Prerequisites

- Node.js 18+ (Note: Some warnings may appear with Node.js 22.5.1, but the application works)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd recharts
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the displayed URL (usually `http://localhost:5173` or `http://localhost:5174`)

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Chart Examples

### Line Chart

Displays multi-line trends for sales, revenue, and profit data over time with smooth curves and interactive tooltips.

### Bar Chart

Compares actual performance against targets across different product categories with side-by-side bars.

### Pie Chart

Shows percentage distribution of device usage with custom labels and color-coded segments.

### Area Chart

Visualizes user engagement metrics over time with stacked filled areas for better trend visibility.

### Scatter Chart

Demonstrates correlation between variables with customizable data points.

### Radar Chart

Compares student performance across multiple subjects using a radar/spider chart format.

## 🎨 Styling

The application features:

- Modern gradient backgrounds
- Glass-morphism card effects
- Responsive grid layout
- Smooth hover animations
- Mobile-responsive design

## 📁 Project Structure

```
src/
├── components/          # Chart components
│   ├── AreaChartComponent.tsx
│   ├── BarChartComponent.tsx
│   ├── LineChartComponent.tsx
│   ├── PieChartComponent.tsx
│   ├── RadarChartComponent.tsx
│   └── ScatterChartComponent.tsx
├── data/               # Sample data
│   └── sampleData.ts
├── App.tsx            # Main application component
├── App.css           # Application styles
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## 🔧 Customization

To add your own data, modify the files in `src/data/sampleData.ts` with your dataset. Each chart component is designed to be easily customizable:

- Update colors by modifying the `fill` and `stroke` properties
- Adjust chart dimensions by changing the `ResponsiveContainer` height
- Customize tooltips and legends through Recharts props
- Add animations using Recharts animation components

## 📱 Responsive Design

The dashboard is fully responsive and works across:

- Desktop computers
- Tablets
- Mobile devices

Charts automatically resize to fit the screen size while maintaining readability.

## 🙏 Acknowledgments

- [Recharts](https://recharts.org/) - Amazing React charting library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
