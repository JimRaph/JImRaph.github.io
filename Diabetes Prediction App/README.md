# Diabetes Prediction App

A **web application** for predicting the likelihood of diabetes using machine learning models. The project combines a **Flask backend** (Python) with a **Next.js frontend** (TypeScript). Both components are dockerized for development, and the app is deployed on **Fly.io**.

🔗 **Live App:** [Diabetes Prediction App](https://t.co/s2bco4HITb)

---

![ai](https://github.com/user-attachments/assets/e3e581fd-fb80-41c4-9d58-7c267c2326aa)

---

## 📌 Project Overview

- The **frontend** collects user health information such as glucose level, BMI, insulin, etc., and sends it to the backend.  
- The **backend** runs trained ML models on the input data and returns predictions.  
- The **analysis notebook** (inside the backend folder) contains the **data exploration, preprocessing, and model training steps**.

**Dataset:** [Pima Indians Diabetes Database](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database) from Kaggle.

---

## ⚙️ Models Used

- Logistic Regression  
- k-Nearest Neighbors (KNN)  
- Support Vector Machine (SVM) – Linear kernel  
- Support Vector Machine (SVM) – RBF kernel  

✅ Models were evaluated using **`cross_val_score`** and **`cross_validate`** from scikit-learn.

---

## 🛠️ Tools & Technologies

- **Backend:** Flask, Python, Jupyter Notebooks  
- **Frontend:** Next.js, TypeScript  
- **Machine Learning:** scikit-learn, Pandas, NumPy  
- **Containerization:** Docker  
- **Deployment:** Fly.io  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/JimRaph/Data-science-ML.git
cd Diabetes_Prediction_App
```

### 2. Set up Kaggle API credentials

You need the following environment variables:
KAGGLE_USERNAME
KAGGLE_KEY

**To get these:**

Go to your Kaggle Account Settings.
Scroll to API → click Create New API Token.
A file kaggle.json will download. Copy the values into your environment variables.

### 3. Install dependencies
pip install -r requirements.txt

### 4. Run with Docker (development)
docker-compose up --build

---

## 📊 Notebook Analysis

Inside the backend folder, there’s a Jupyter Notebook where:

- Data preprocessing and cleaning are done.
- Models are trained and compared.
- Insights are generated before switching to .py files.

---

## 🌐 Deployment

Both frontend and backend are dockerized.

Production deployment is on Fly.io.

Live link: https://t.co/s2bco4HITb
