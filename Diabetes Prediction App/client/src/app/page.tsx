"use client";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { addCheckup } from "../util/indexedDB";

type FormData = {
  Pregnancies: string;
  Glucose: string;
  BloodPressure: string;
  SkinThickness: string;
  Insulin: string;
  BMI: string;
  DiabetesPedigreeFunction: string;
  Age: string;
};

export interface CheckupEntry {
  id?: number; 
  time: string;
  inputs: Record<string, string | number>; 
  prediction: "Diabetic" | "Non-Diabetic";
  confidence: number;
}


export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [result, setResult] = useState<{ prediction: number; confidence: number } | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(value === ""){
      setFormData({...formData, [name]:""})
      return
    }

    const numValue = parseFloat(value);
    // console.log(numValue)
    if (numValue < 0 || isNaN(numValue)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    if (!Object.values(formData).every(
          value => value !== "" && value !== null && value !== undefined && String(value).trim() !== ""
        )) {
      setResult("error");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diabetes/v1/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.values(formData)), 
      });

      const data = await res.json();
      if (data.success) {
        setResult({ prediction: data.prediction, confidence: data.confidence });

        const newEntry: CheckupEntry = {
            time: new Date().toLocaleString(),
            inputs: { ...formData },
            prediction: data.prediction === 1 ? "Diabetic" : "Non-Diabetic",
            confidence: data.confidence,
        };

        await addCheckup(newEntry);
      } else {
        setResult("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setResult("error");
    } finally {
      setLoading(false);
    }
  };

  const handleTryOut = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const closeModal = () => setResult(null);

  return (
    <main className="mx-auto items-center justify-center relative">

      <nav className="absolute top-9 left-1/2 transform -translate-x-1/2 z-50
       bg-white shadow-md rounded-full">
        <div className="flex justify-between items-center px-5 py-3 space-x-8">
          <h1 className="text-2xl font-bold text-purple-600">Diabe/AI</h1>
          <div className="flex space-x-6 text-gray-700 font-semibold">
            <Link href="/" className="hover:underline text-purple-600
             hover:text-purple-800  transition">Home</Link>
            <Link href="/history" className="hover:underline hover:text-purple-800 
              text-purple-600 transition">History</Link>
          </div>
        </div>
      </nav>


      <section className="h-screen flex justify-center bg-gradient-to-r from-blue-500
       via-purple-600 to-pink-500 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center text-white 
        text-center md:text-left p-8 relative gap-10 max-w-6xl mx-auto pt-48 md:pt-o">
          <div className="flex-1">
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
              className="text-lg md:text-xl max-w-xl mb-8"
            >
              We utilize the power of Artificial Intelligence for early diabetes detection.
              A step towards better healthcare decisions.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTryOut}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold
               shadow-lg hover:bg-gray-100 transition"
            >
              Try Out Model
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/robot.svg"
              alt="AI in Healthcare"
              width={500}
              height={500}
              priority
              className="drop-shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {showForm && (
        <section
          ref={formRef}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-8 flex
           justify-center"
        >
          <div className="max-w-6xl flex flex-col md:flex-row justify-center items-center
           gap-12 mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden md:block flex-1"
            >
              <Image
                src="/doctor.svg"
                alt="Patient Health"
                width={400}
                height={400}
                priority={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 w-full max-w-2xl bg-white rounded-3xl shadow-xl p-10"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-700 text-center">
                Enter Your Details
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(formData).map((key) => (
                  <div key={key} className="flex flex-col ">
                    <label className="mb-2 font-medium text-gray-700">{key}</label>
                    <input
                      type="number"
                      name={key}
                      value={formData[key as keyof FormData]}
                      onChange={handleChange}
                      className="p-3 border  rounded-lg focus:outline-none focus:ring-2
                       focus:ring-purple-400 text-gray-600 border-gray-300"
                      min="0"
                      step='any'
                      required
                    />
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  type="submit"
                  disabled={loading}
                  className={`col-span-full py-3 rounded-xl font-semibold transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {loading ? "Predicting..." : "Predict"}
                </motion.button>
              </form>

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-6"
                >
                  <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {result && result !== "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center 
            justify-center z-50"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full 
              text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Prediction Result</h3>
              <p className="text-xl mb-2">
                {result.prediction === 1 ? (
                  <span className="text-red-600 font-semibold">Diabetic</span>
                ) : (
                  <span className="text-green-600 font-semibold">Non-Diabetic</span>
                )}
              </p>
              <p className="text-gray-700 mb-6">
                Confidence: <span className="font-semibold">{result.confidence}%</span>
              </p>
              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold
                 hover:bg-purple-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {result === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center
             z-50"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">Error</h3>
              <p className="text-gray-700 mb-6">Something went wrong. Please try again.</p>
              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-6 py-3 rounded-full
                 font-semibold hover:bg-purple-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
