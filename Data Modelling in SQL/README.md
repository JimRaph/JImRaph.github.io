# 🗄️ Data Modeling with SQL: Building a Dimensional Data Pipeline  
*Star and Snowflake Schema design for analytics on historical workstation sales data (1980–1996).*  

---

## 📌 Project Overview  
In this project, I designed and implemented a **data transformation pipeline** for analytics using SQL. The focus was on **dimensional data modeling** with both **Star** and **Snowflake schemas**, applied to a dataset of **computer workstation sales**.  

Poorly modeled data can lead to long, expensive queries. By restructuring the dataset into fact and dimension tables, the pipeline improves efficiency, supports historical tracking, and enables robust analytical queries.  

---

## 🎯 Some Actions Taken  
1. **Data Cleaning & Preparation**  
   - Converted columns to proper data types.  
   - Adjusted units of measure (e.g., degrees → radians where appropriate).  

2. **Dimensional Modeling**  
   - Designed **Star and Snowflake schemas** for analytic queries.  
   - Built dimension tables such as:  
     - **Company Dimension**  
     - **Product Offerings Dimension**  
     - **Integration Dimension**  

3. **Slowly Changing Dimensions (SCDs):**  
   - Implemented **Type 2 Dimensions** (track attribute changes over time).  
   - Implemented **Type 4 Dimensions** (manage historical data with separate tables).  

4. **Fact Table Creation**  
   - Built `workstation_sales` fact table.  
   - Distinguished between **additive facts vs. non-additive facts**.  

5. **Performance Optimization**  
   - Leveraged **DuckDB** for efficient querying.  
   - Benchmarked queries with `timeit` to compare performance before and after dimensional modeling.  

---

## 🛠️ Tools & Technologies  
- **DuckDB** for SQL queries and data modeling  
- **Pandas** for data handling  
- **Python (timeit)** for query performance benchmarking  
- **CSV dataset**: [Sorenson Workstation Sales Data (1980–1996)](https://five.dartmouth.edu/datasets)  

---

## 📂 Dataset  
- **File:** `SorensonworkfirmFIVEdata.csv`  
- **Columns:**  
YEAR, FIRMNAME, FIVEFIRMID, FIRMID, CUSIPHEADERID, CUSIPHeaderName,
CUSIPHISTORYID, CUSIPHistoryName, FOUND, FATE, ESTATE, SALES, EMPLOY,
ZIP, LAT, LON, RANDD, PRODUCTS, PTYPES, SYSTEM, GRAPHIC, CEO, OWN,
CPU, OS, APPS, COMM, MONITOR, DISK, MEMORY, BOARD
