import React, { useState } from "react";

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    goalWeight: "",
    bodyFatPercentage: "",
    lifestyle: "",
    workoutIntensity: "",
    fitnessGoal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="bg-gray-100">
      <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Calorie Calculator
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 sm:grid-cols-2 sm:gap-6"
        >
          {/* Age */}
          <div className="w-full">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          {/* Gender */}
          <div className="w-full">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
     
          {/* Height in cm */}
          <div className="w-full">
            <label
              htmlFor="height"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              id="height"
              placeholder="Height in cm"
              value={formData.height}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          {/* Weight in kg */}
          <div className="w-full">
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Weight in kg"
              value={formData.weight}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          {/* Goal Weight */}
          <div className="w-full">
            <label
              htmlFor="goalWeight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Goal Weight (kg)
            </label>
            <input
              type="number"
              name="goalWeight"
              id="goalWeight"
              placeholder="Goal Weight in kg"
              value={formData.goalWeight}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          {/* Body Fat Percentage */}
          <div className="w-full">
            <label
              htmlFor="bodyFatPercentage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Body Fat Percentage (%)
            </label>
            <input
              type="number"
              step="0.1"
              name="bodyFatPercentage"
              id="bodyFatPercentage"
              placeholder="Body Fat Percentage"
              value={formData.bodyFatPercentage}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          {/* Lifestyle */}
          <div className="w-full">
            <label
              htmlFor="lifestyle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lifestyle
            </label>
            <select
              name="lifestyle"
              id="lifestyle"
              value={formData.lifestyle}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Lifestyle</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
          {/* Workout Intensity */}
          <div className="w-full">
            <label
              htmlFor="workoutIntensity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Workout Intensity
            </label>
            <select
              name="workoutIntensity"
              id="workoutIntensity"
              value={formData.workoutIntensity}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Workout Intensity</option>
              <option value="none">None</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>
          {/* Fitness Goal */}
          <div className="w-full">
            <label
              htmlFor="fitnessGoal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fitness Goal
            </label>
            <select
              name="fitnessGoal"
              id="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Fitness Goal</option>
              <option value="fatLoss">Fat Loss</option>
              <option value="muscleGain">Muscle Gain</option>
              <option value="maintenance">Maintenance</option>
              <option value="reverseDieting">Reverse Dieting</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CalorieCalculator;
