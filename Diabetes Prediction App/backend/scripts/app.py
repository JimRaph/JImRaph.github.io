from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
from dotenv import load_dotenv
import os
import logging

load_dotenv()

app = Flask(__name__)
# CORS(app, resources={
#     r"/diabetes/*": {"origins": os.getenv('CLIENT_URL','*')}}, 
#       supports_credentials=True
# )

CORS(app, origins=os.getenv('CLIENT_URL', 'http://localhost:3000'), supports_credentials=True)


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
filename = os.path.join(BASE_DIR, "model", "diabetes.sav")


with open(filename, 'rb') as f:
    loaded_model = pickle.load(f)

# @app.before_request
# def handle_options():
#     if request.method == 'OPTIONS':
#         return app.make_default_options_response()
    
@app.route('/', methods=['GET'])
def home():
    return 'Diabe/AI'

@app.route('/diabetes/v1/predict', methods=['POST'])
def predict():

    try:
        features = request.json 
        if not isinstance(features, list) or len(features) != 8:
            return jsonify({"success": False, "error": "Input must be a list of 8 numeric values"}), 400
        print(features)
        # sample = np.array([features], dtype=float)
        feature_names = [
                            "Pregnancies", "Glucose", "BloodPressure", "SkinThickness",
                            "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"
                        ]
        data = pd.DataFrame([features], columns=feature_names)
        prediction = loaded_model.predict(data)
        confidence = loaded_model.predict_proba(data)

        response = {
            "prediction": int(prediction[0]),
            "confidence": round(np.max(confidence[0]) * 100, 2)
        }

        return jsonify({"success": True, **response})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


