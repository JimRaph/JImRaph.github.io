I explore using PCA to aid in the visualisation of dataset with high dimensionality that would otherwise be impossible to visualise.

The dataset consists of two classes, where each class signifies whether a patient has breast cancer or not. The two categories are: malignant and benign.

The malignant class has 212 samples, whereas the benign class has 357 samples.

It has 30 features shared across all classes: radius, texture, perimeter, area, smoothness, fractal dimension, etc.

I imported the dataset using sklearn api directly, however, dataset can be found on https://archive.ics.uci.edu/dataset/17/breast+cancer+wisconsin+diagnostic