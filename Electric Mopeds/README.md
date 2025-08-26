# Electric Bike Rating Classification

This project was completed as part of the requirement for the **Associate Data Scientist Certification** on DataCamp. The dataset provided by DataCamp contains ratings and reviews of electric bikes, with the **target objective** being to predict whether a review was written by a bike owner (`owned = 1`) or not (`owned = 0`).  

---

## 📊 Dataset Overview

Each record in the dataset represents a review of an electric bike with details such as the reviewer’s demographics, review content, and rating metrics.  

**Sample Data**:

| owned | make_model   | review_month | web_browser | reviewer_age | primary_use | value_for_money | overall_rating |
|-------|--------------|--------------|-------------|--------------|-------------|-----------------|----------------|
| 1     | Nielah-Eyden | Oct          | Chrome      | 23           | Commuting   | 5/10            | 18.62          |
| 0     | Nielah-Keetra| Jun          | NA          | 24           | Commuting   | 4/10            | 15.55          |
| 0     | Lunna-Keetra | 23-Oct       | Chrome      | 28           | Commuting   | 5/10            | 12.76          |

**Columns**:  
- `owned` → Target (1 = owner, 0 = not owner)  
- `make_model` → Bike model reviewed  
- `review_month` → Month of the review  
- `web_browser` → Reviewer’s browser  
- `reviewer_age` → Age of the reviewer  
- `primary_use` → Main purpose for bike use (e.g., commuting)  
- `value_for_money` → Reviewer’s perceived value (scaled rating)  
- `overall_rating` → Numerical rating given  

---

## 🛠️ Project Workflow

1. **Data Importation & Processing**  
   - Data cleaning (handling missing values, imputation, removing duplicates)  
   - Data type conversions for categorical and numerical features  

2. **Exploratory Data Analysis (EDA)**  

3. **Problem Framing**  
   - Defined as a **binary classification problem** (predicting owner vs. non-owner)  

4. **Model Building**  
   - Applied **Logistic Regression** as the baseline model  
   - Scaled features using **StandardScaler**  
   - Split dataset into **train/test sets**  

5. **Model Justification**  
   - Logistic Regression chosen due to interpretability and suitability for binary classification  
   - Balanced consideration of accuracy, recall, and precision  

6. **Evaluation Metrics**  
   - Accuracy Score  
   - Precision Score  
   - Recall Score  

7. **Key Insights & Reporting**  
   - Insights documented in the project notebook  

---

## ⚙️ Tools & Libraries Used

- **Python**  
- **scikit-learn**  
  - `LogisticRegression`  
  - `StandardScaler`  
  - `train_test_split`  
  - `accuracy_score`, `precision_score`, `recall_score`  
- **pandas**, **numpy** for data handling  
- **matplotlib**, **seaborn** for visualization  

---

## 📈 Results

- Built a logistic regression classifier to distinguish owner vs. non-owner reviews  
- Achieved performance based on multiple metrics (see notebook for detailed results)  
- Delivered actionable insights for businesses to identify authentic owner reviews  

---

