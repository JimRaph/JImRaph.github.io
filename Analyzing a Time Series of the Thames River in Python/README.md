# Analyzing a Time Series of the Thames River in Python  
*Exploring tides, trends, and forecasting with real-world river level data from 1911–1995.*  

---

## 📌 Project Overview  
Time series data is everywhere — from monitoring climate change, to analyzing financial markets, to tracking public health trends.  
In this project, I worked with a dataset tracking **tide levels of the Thames River** (London Bridge station), provided by the **British Oceanographic Data Center (BODC)**.  

The goal was to **explore, visualize, and decompose the time series**, uncover seasonal trends, and get an introduction to **forecasting through autocorrelation**.  

---

## 🎯 Objectives  
The analysis was structured into four main tasks:  

1. **Data Preparation**  
   - Read the raw file format and prepare the data for analysis.  

2. **Exploratory Analysis**  
   - Analyze tide levels at London Bridge to understand general patterns.  

3. **Trend Analysis**  
   - Assess monthly water level trends for the years **1927, 1928, and 1929**.  

4. **Forecasting (Autocorrelation)**  
   - Begin building a forecasting model by examining **autocorrelation** within the time series.  

---

## 🛠️ Tools & Libraries  
- **Python** for data analysis  
- **Pandas** for data manipulation and time series handling  
- **Seaborn** for visualization  
- **Matplotlib** for plotting and customization  

---

## 📊 Key Insights  
- **Data Cleaning & Preparation:** The raw dataset required parsing dates.  
- **Seasonality:** Clear **seasonal fluctuations** in tide levels were observed within each year.  
- **Monthly Trends:** Variations between 1927–1929 revealed noticeable **monthly patterns in water levels**.  
- **Autocorrelation:** Strong autocorrelation patterns indicated that past tide levels are predictive of future levels, high autocorrelation every 15 days.  

---

## 🚀 Skills Demonstrated  
- **Time Series Handling:** Resampling and indexing data with Pandas.  
- **Exploratory Data Analysis:** Using summary statistics and visualizations to detect patterns.  
- **Decomposition:** Breaking down the series into **trend, seasonality**.  
- **Forecasting Foundations:** Applying autocorrelation analysis as a first step toward predictive modeling.  
- **Data Storytelling:** Turning raw data into insights on natural patterns.  

---


The original dataset is available from the British Oceanographic Data Center(https://www.bodc.ac.uk/data/published_data_library/catalogue/10.5285/b66afb2c-cd53-7de9-e053-6c86abc0d251)
NOTE: The project was done entirely on google colabs
Data folder contains more dataset you can explore

