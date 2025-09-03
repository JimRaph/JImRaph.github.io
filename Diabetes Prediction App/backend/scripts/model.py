# This script loads the dataset, perform imputation, train the model and saves it
# To see actual analysis that lead to using LogisticRegression and imputation choice
# Check the analysis.ipynb file

import pandas as pd
import numpy as np
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer
from sklearn.linear_model import LogisticRegression
import pickle

print('======== loading data ==========')
df = pd.read_csv('../data/diabetes.csv')

print('========== imputating================')
features = ['Glucose', 'BMI', 'Insulin', 'SkinThickness', 'BloodPressure']  
df[features] = df[features].replace(0, np.nan)
mice_inputer = IterativeImputer(max_iter=10, random_state=111)
imputed = mice_inputer.fit_transform(df[features])
df[features] = imputed

print('============== creating training data ===========')
X = df.drop(columns='Outcome')
y = df['Outcome']

print('========== training model =============')
log_reg_balanced = LogisticRegression(class_weight='balanced',max_iter=1000)
log_reg_balanced.fit(X,y)

filename = '../model/diabetes.sav'
with open(filename, 'wb') as f:
    pickle.dump(log_reg_balanced, f)



