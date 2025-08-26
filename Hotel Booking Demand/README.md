# Hotel Booking Demand Analysis & Prediction

## 📌 Overview
This project explores the **Hotel Booking Demand** dataset to uncover insights about booking patterns, cancellations, and customer behavior.  
The analysis focuses on factors influencing cancellations and builds a predictive model to estimate the likelihood of a customer canceling their reservation.


---

## 🎯 Motivation
Efficient room allocation is vital for hotel operations.  
By predicting cancellations and understanding customer booking behavior, hotels can:
- Optimize room allocation.  
- Anticipate cancellations before they occur.  
- Improve efficiency in day-to-day operations.  

---

## 🔍 Process

### 1. Data Preprocessing
- Handled missing values.  
- Standardized and scaled features.  
- Prepared data for exploratory analysis and model training.  

### 2. Exploratory Data Analysis (EDA)
- **Family size vs. cancellation rate**  
- **Quarterly cancellation trends**  
- **Lead time vs. likelihood of cancellation**  
- **Monthly and quarterly distributions of bookings**  

### 3. Data Visualization
- Occurrence of each family size.  
- Booking status across months.  
- Canceled bookings across months.  
- Quarterly cancellation distribution.  
- Seasonal cancellation trends.  

### 4. Predictive Modeling
Built and compared machine learning models to predict cancellation likelihood:  
- **Logistic Regression**  
- **XGBoost Classifier**  

**Evaluation:**  
- Cross-validation with K-Fold.  
- Accuracy score used as main metric.  

---

## 🛠️ Tools & Libraries
- **Python**  
- **Pandas**, **NumPy** → Data manipulation & preprocessing  
- **Matplotlib**, **Seaborn** → Visualization  
- **Scikit-learn** → ML models, scaling, cross-validation  
- **XGBoost** → Advanced model training  

---

## 📊 Insights
Key insights are detailed in the notebook, including:  
- Family sizes most likely to cancel.  
- The quarter with the highest cancellation rate.  
- Lead times strongly correlated with cancellation likelihood.  
---

Dataset: [Hotel Booking Demand - Kaggle](https://www.kaggle.com/jessemostipak/hotel-booking-demand)  
License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)


