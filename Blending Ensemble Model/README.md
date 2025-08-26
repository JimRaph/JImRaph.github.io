# Ensemble Learning with Blending on Loan Data  
*Using Decision Trees and KNN as base learners with Logistic Regression as the meta learner.*  

---

## 📌 Project Overview  
Ensemble methods often improve model performance by combining multiple learners. In this project, I applied **Blending** — an ensemble learning technique where predictions from base learners are fed into a meta learner to improve accuracy.  

- **Base Learners:** Decision Tree Classifier, K-Nearest Neighbors (KNN)  
- **Meta Learner:** Logistic Regression  

The dataset comes from [Kaggle Loan Data](https://www.kaggle.com/datasets/itssuru/loan-data). The goal was to analyze the dataset, preprocess it, and evaluate how ensemble blending performs compared to individual models.  

---

## 🎯 Objectives  
1. **Exploratory Data Analysis (EDA):**  
   - Investigate purpose of taking loans.  
   - Analyze the **distribution of interest rates** (is it normal?).  
   - Explore distribution of **installment payments**.  
   - Assess the **ratio of clients that meet credit underwriting criteria**.  

2. **Data Preprocessing:**  
   - Handle class imbalance with **undersampling**.  
   - Scale features for model performance.  

3. **Model Building:**  
   - Train base learners (**Decision Tree, KNN**).  
   - Use predictions as inputs for **Logistic Regression (meta learner)**.  

4. **Model Evaluation:**  
   - Generate **classification reports**.  
   - Plot and interpret **confusion matrices**.  

5. **Model Persistence:**  
   - Save trained ensemble model with **pickle** for future use.  

---

## 🛠️ Tools & Libraries  
- **Pandas** for data manipulation  
- **Scikit-learn** for ML models, metrics, preprocessing  
- **Seaborn** & **Matplotlib** for visualization  
- **Pickle** for model persistence  

---

## 📊 Some Key Insights  
- The dataset showed **imbalanced classes**, requiring undersampling to improve training stability.  
- Loan purpose analysis revealed clear patterns in borrower intent (e.g., education, credit card debt, etc.).  
- Interest rate distribution was **not perfectly normal**, skewed toward certain values.  
- Ensemble blending improved performance over individual models by leveraging the strengths of each learner.  
- Evaluation with confusion matrices and classification reports provided detailed performance metrics beyond accuracy.  

---

## 🚀 Skills Demonstrated  
- **Ensemble Learning (Blending):** Combining multiple models to boost predictive power.  
- **Data Preprocessing:** Scaling, handling imbalanced data with undersampling.  
- **Model Evaluation:** Using classification reports and confusion matrices to assess performance.  
- **Model Deployment:** Persisting trained models with **pickle** for reuse.  
- **EDA & Visualization:** Exploring dataset characteristics and communicating findings with plots.  

---


