import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal Weight');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return 'text-gray-400';
    if (bmi < 18.5) return 'text-blue-500';
    if (bmi < 25) return 'text-green-500';
    if (bmi < 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            BMI <span className="text-red-600">Calculator</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Calculate your Body Mass Index
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white font-semibold mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Calculator size={20} />
            Calculate BMI
          </button>

          {bmi !== null && (
            <div className="mt-8 text-center">
              <div className="bg-gray-900 p-8 rounded-lg">
                <p className="text-gray-400 mb-2">Your BMI is</p>
                <p className={`text-6xl font-black mb-4 ${getBMIColor()}`}>{bmi}</p>
                <p className={`text-2xl font-bold mb-6 ${getBMIColor()}`}>{category}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-blue-500 font-bold mb-1">&lt; 18.5</p>
                    <p className="text-gray-400 text-sm">Underweight</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-green-500 font-bold mb-1">18.5 - 24.9</p>
                    <p className="text-gray-400 text-sm">Normal</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-yellow-500 font-bold mb-1">25 - 29.9</p>
                    <p className="text-gray-400 text-sm">Overweight</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-red-500 font-bold mb-1">&gt; 30</p>
                    <p className="text-gray-400 text-sm">Obese</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
