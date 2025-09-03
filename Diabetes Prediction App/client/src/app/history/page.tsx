"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllCheckups } from "../../util/indexedDB";


type InputRecord = Record<string, string | number>;

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

   useEffect(() => {
    const fetchHistory = async () => {
      const allCheckups = await getAllCheckups();
      setHistory(allCheckups.reverse()); 
    };
    fetchHistory();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="w-full bg-gradient-to-r from-blue-500
       via-purple-600 to-pink-500 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">MediAI</h1>
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Prediction History</h1>
        {history.length === 0 ? (
          <p className="text-gray-600">No history found. Try the model first!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg overflow-hidden shadow-md
             bg-white">
              <thead className="bg-gradient-to-r from-blue-500
       via-purple-600 to-pink-500 text-white">
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Inputs</th>
                  <th className="p-3 text-left">Prediction</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry, idx) => (
                  <tr key={idx} className="border-b border-gray-500 hover:bg-purple-50">
                    <td className="p-3 text-purple-800">{entry.time}</td>
                   <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(entry.inputs as InputRecord).map(([k, v]) => (
                      <span key={k} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full
                       text-xs font-semibold">
                        {k}: {v}
                      </span>
                    ))}
                  </div>
                </td>

                    <td className="p-3 font-semibold text-purple-600">{entry.prediction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
