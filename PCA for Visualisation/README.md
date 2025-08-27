## Breast Cancer Dataset Visualization with PCA

### 📌 Overview
In this project, I explored the use of **Principal Component Analysis (PCA)** to visualize datasets with high dimensionality that would otherwise be impossible to represent effectively in 2D or 3D space.  

The dataset contains information about patients diagnosed with breast cancer, where the task is to classify tumors as **malignant** or **benign**. PCA was applied to reduce dimensionality and help in visualizing the separability between these two classes.

---

### 📊 Dataset
- **Source:** [UCI Breast Cancer Wisconsin Diagnostic Dataset](https://archive.ics.uci.edu/dataset/17/breast+cancer+wisconsin+diagnostic)  
- **Classes:**
  - **Malignant:** 212 samples  
  - **Benign:** 357 samples  
- **Features:** 30 numeric attributes (e.g., *radius, texture, perimeter, area, smoothness, fractal dimension, etc.*)

I imported the dataset using the `sklearn.datasets.load_breast_cancer()` API for convenience.

---

### ⚙️ Process
1. **Data Loading**  
   - Used `sklearn.datasets.load_breast_cancer()` to load the dataset.  

2. **Data Preprocessing**  
   - Standardized features using `StandardScaler` for effective PCA transformation.  

3. **Dimensionality Reduction with PCA**  
   - Visualized the transformed data to observe class separability.  

4. **Visualization**  
   - Observed clear separation of classes, demonstrating PCA’s utility for high-dimensional visualization.  

---

### 🛠️ Tools & Libraries
```python
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

