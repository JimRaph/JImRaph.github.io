# Recipe Popularity Prediction Project  

## Overview  
This project was part of the **DataCamp Data Scientist Certification**. The goal was to build a machine learning model to help a recipe site company generate more traffic by predicting which recipes are likely to be **high traffic**.  

<img width="702" height="492" alt="Screenshot 2025-08-29 195105" src="https://github.com/user-attachments/assets/16671e87-781b-4226-8112-2f6317432196" />

The dataset contained recipe information with the following columns:  
- `recipe`  
- `calories`  
- `carbohydrate`  
- `sugar`  
- `protein`  
- `category`  
- `servings`  
- `high_traffic` (target variable)  

---

## Instructions  
1. Perform data cleaning to ensure the dataset is usable.  
2. Conduct exploratory data analysis (EDA) to uncover insights about recipes and nutritional distribution.  
3. Build and evaluate machine learning models to predict whether a recipe will be high traffic.  
4. Provide business recommendations based on the model and insights from EDA.  

---

## Data Cleaning  
- Converted columns to have the correct data types.  
- Handled missing values (applied both dropping and imputation where appropriate).  
- Fixed irregularities in some recipe categories.  

---

## Exploratory Data Analysis (EDA)  
The following questions were explored:  
1. What is the distribution of recipes with protein?  
2. What is the relationship between the types of recipes and carbohydrate content?  
3. What type of recipe is the most frequent in the dataset?  
4. Which type of recipe contains the highest **average calories**?  
5. What is the distribution of sugar content across recipes?  
6. What is the relationship between recipe types and servings?  

---

## Model Development  
- **Logistic Regression** was used as the baseline model (evaluated with cross-validation).  
- **Decision Tree Classifier** was also applied (with cross-validation).  

The best performing model achieved an accuracy of **~80%**.  

---

## Recommendations  
- The business should consider **deploying the model** to predict recipe popularity.  
- Maintain nutrition distribution according to the **EDA findings** to maximize engagement.  
- To reduce the chances of showing unpopular recipes:  
  - Increase the threshold above the default **0.5**.  
  - Note that increasing the threshold reduces the risk of showing unpopular recipes but also lowers recall.  
- When new recipes are added, extend the `threshold_df` dataframe to include them. This allows easy selection of popular recipes with a simple query or table lookup.  
- The recipes most likely to generate high traffic are contained in the **`recipes_to_high_traffic`** table.  

---
Dataset is from DataCamp.

