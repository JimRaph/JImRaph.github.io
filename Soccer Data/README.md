# ⚽ Soccer Data Project – English Premier League 2018/2019

This project is part of my portfolio work where I analyzed and modeled match data from the 2018–2019 English Premier League season. The dataset contained every game played during that season, with detailed match statistics.

📌 **Source**: Premier League 2018/19 Matches Dataset  

---

## 🔹 Motivation  

The objective was to analyze soccer match data to identify interesting trends and patterns, and then build predictive models for match outcomes. Specifically, the project focused on:  

- Exploring team behaviors such as fouls, red cards.  
- Understanding how halftime results influence full-time outcomes.  
- Building predictive models to estimate whether a team would win, lose, or draw.  

---

## 🔹 Data Analysis  

### Exploratory Questions  
- Which team commits the most fouls?  
- What is the distribution of matches that ended in a draw over time?  
- Does the number of red cards affect a team’s probability of winning?  
- Can we predict the full-time result based on the half-time result?  

### Visualizations & Statistical Analysis  
- Plotted fouls, goals, and draws using **Seaborn** and **Matplotlib**.  
- Applied **Pingouin** for statistical significance testing.  
- Distribution plots and percentage trends helped uncover performance behaviors across different clubs.  

---

## 🔹 Model Development  

I built and compared multiple classification models to predict match results (**Win/Draw/Loss**):  

- **Logistic Regression** (baseline model)  
- **Random Forest Classifier**  
- **Gradient Boosting Classifier**  

Models were evaluated on **accuracy** and ability to generalize to unseen match data.  

Two predictive approaches were developed:  
1. **Full-time result prediction** (based on all match statistics).  
2. **Full-time result prediction based on halftime result** (to test whether halftime strongly dictates final outcomes).  

---

## 🔹 Findings  

- Teams with higher red cards had a **lower probability of winning**, confirming disciplinary issues strongly impact performance.  
- **Halftime results were highly predictive** of full-time outcomes, especially when the leading team had a margin greater than 1 goal.  
- Among models tested, **Random Forest and Gradient Boosting outperformed Logistic Regression**, capturing non-linear relationships better.  

---

## 🔹 Tools & Libraries  

- **Python**  
- **Seaborn, Matplotlib** → Data visualization  
- **Pingouin** → Statistical analysis  
- **Scikit-learn** → Logistic Regression, Random Forest, Gradient Boosting  

---

## 🔹 Conclusion  

The project highlighted key behavioral patterns in EPL 2018/19 matches, such as the impact of red cards and the predictive power of halftime scores. Predictive modeling showed strong potential, especially with ensemble methods like Random Forest and Gradient Boosting.  

This work demonstrates both **data analysis** and **machine learning modeling** skills applied to a real-world sports dataset.  

