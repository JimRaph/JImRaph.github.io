# Text Classification with TensorFlow and Gensim

This project is an exploration of **Natural Language Processing (NLP)** techniques using **TensorFlow** and **Gensim**. The focus was on experimenting with text preprocessing, word embeddings, and classification models rather than achieving the highest possible accuracy.

## 📌 Project Overview

The task was to classify movies into genres based on their **synopsis**. To achieve this, I used **Gensim's Word2Vec** for word embeddings and implemented classification models with **TensorFlow**.  

Additionally, I experimented with **NumPy’s vectorize function** as an alternative to standard for loops in certain preprocessing tasks.

## 📂 Dataset

The dataset (located in the `data/` folder) consists of two files:  

- **`train.csv`** – Training data  
- **`test.csv`** – Test data  

Each file contains the following features:  

- `id` – Unique identifier for each movie  
- `movie_name` – The name of the movie  
- `synopsis` – Short description of the movie  
- `genre` – The target label for classification  

## 🛠️ Tools & Libraries

- **Python**  
- **Gensim** – Word2Vec embeddings  
- **NLTK** – Text preprocessing  
- **TensorFlow** – Model building  
- **Keras** – Deep learning API  
- **scikit-learn** – Utilities and evaluation  
- **Pandas** – Data manipulation  

## 🔍 Key Explorations

- Utilized **Gensim Word2Vec** for word embeddings.  
- Applied **NumPy vectorization** for efficiency in preprocessing.  
- Built **classification models with TensorFlow/Keras**.  
- Experimented with different preprocessing and modeling approaches.  

## 📈 Insights

- This project was focused on **learning and experimentation** rather than maximizing performance.  
- Gensim Word2Vec provided meaningful vector representations of words for classification.  
- NumPy’s vectorization improved the efficiency of certain operations compared to loops.  

---
