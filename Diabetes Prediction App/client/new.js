"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.values(formData)),
      });
      const data = await res.json();
      setResult(data.prediction);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTryOut = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-center p-6 relative overflow-hidden">
        {/* Decorative AI + Medical shapes */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full mix-blend-overlay blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          AI-Powered <span className="text-yellow-300">Diabetes Prediction</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Harness the power of Artificial Intelligence for early diabetes detection.
          A step towards better healthcare decisions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTryOut}
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Try Out Model
        </motion.button>
      </section>

      {/* Form Section (only visible after click) */}
      {showForm && (
        <section
          ref={formRef}
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-blue-50 p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-700 text-center">
              Enter Patient Details
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {Object.keys(formData).map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="mb-2 font-medium text-gray-700">{key}</label>
                  <input
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="col-span-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
              >
                Predict
              </motion.button>
            </form>

            {result !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center text-xl font-bold"
              >
                Prediction:{" "}
                <span
                  className={`${
                    result === 1 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {result === 1 ? "Diabetic" : "Non-Diabetic"}
                </span>
              </motion.div>
            )}
          </motion.div>
        </section>
      )}
    </main>
  );
}

<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
<a href="https://storyset.com/work">Work illustrations by Storyset</a>