# Point of Sale (POS) Data Analysis: Transactions & Cashier Operations

## 📌 Project Overview
This project analyzes **supermarket Point of Sale (POS) data** from cashier operations and transactions to uncover customer behavior and checkout patterns.  
By combining **SQL for querying** and **Plotly for interactive visualization**, the project explores key business questions that can help retailers optimize operations and increase profitability.

---

## 📂 Dataset
I worked with two datasets:

1. **pos_operator_log**  
   - `id`  
   - `Workstation_Group_ID`  
   - `Workstation_ID`  
   - `begin_date_time`  
   - `operator_id`  

2. **pos_transactions**  
   - `id`  
   - `WorkstationGroupID`  
   - `begin_date_time`  
   - `end_date_time`  
   - `OperatorID`  
   - `basket_size`  
   - `t_cash`  
   - `t_card`  
   - `amount`  

**Source:** [MDPI Dataset](https://www.mdpi.com/2306-5729/4/2/67)

---

## ❓ Some Business Questions Explored
- Do customers spend more with **card** or **cash**?  
- What are the **daily spending trends** across the week?  
- Should supermarkets remain **open on Sundays** considering the restriction placed by government?  

---

## 🛠️ Tools & Techniques
- **SQL**  
- **Plotly** 
- **Python**

---

## Reference
Data from: [MDPI – Point-of-Sale Transaction Dataset](https://www.mdpi.com/2306-5729/4/2/67)
