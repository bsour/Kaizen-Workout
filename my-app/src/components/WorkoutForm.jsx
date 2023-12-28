import React, { useState } from "react";

const WorkoutForm = () => {
  // Initial state for the form
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    fitnessGoalPrimary: "",
    fitnessGoalSecondary: "",
    goalTimeFrame: "",
    currentFitnessLevel: "",
    previousWorkoutRegimes: "",
    understandingOfExercisePrinciples: "",
    exerciseHistory: "",
    trainingStyles: "",
    exerciseTypesPreference: "",
    balancePreference: "",
    equipmentAccess: "",
    specializedEquipmentAccess: "",
    currentWarmUpPractices: "",
    dynamicStretchingKnowledge: "",
    currentStretchingRoutine: "",
    mobilityExerciseKnowledge: "",
    injuryHistory: "",
    rehabPrehabRoutines: "",
    specificConcerns: "",
    physiotherapyExperiences: "",
    correctiveExerciseNeeds: "",
    recoveryStrategies: "",
    sleepPatterns: "",
    nutritionalConsiderations: "",
    supplementUse: "",
    progressTrackingWillingness: "",
    feedbackPreference: "",
    psychologicalFactors: "",
    motivationalStrategiesPreference: "",
    personalizationRequests: "",
    lifestyleFactors: "",
    consentForDataUse: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(name, value); // Add this line to check the input values
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  // Handle form submission
const handleSubmit = async (e) => { // Mark this function as async
  e.preventDefault();

  // Check if age is within the valid range
  const age = parseInt(formData.age, 10);
  if (age < 18 || age > 65 || isNaN(age)) {
    alert("Age must be a number between 18 and 65.");
    return;
  }

  // Check if the privacy checkbox is checked
  if (!formData.consentForDataUse) {
    alert("Please agree to the privacy policy.");
    return;
  }



    console.log(formData);
    // Handle success (e.g., show a success message)

};

  return (
    <section className="bg-gray-100">
      <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Personalized Workout Plan
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Name */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>

            {/* Age */}
            <div className="w-full">
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                type="text"
                name="age"
                id="age"
                pattern="\d{1,2}"
                title="Age must be a number between 18 and 65"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your age"
                onChange={handleChange}
                value={formData.age}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>

            {/* Primary Fitness Goal */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fitnessGoalPrimary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primary Fitness Goal
              </label>
              <select
                name="fitnessGoalPrimary"
                id="fitnessGoalPrimary"
                value={formData.fitnessGoalPrimary}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="weightLoss">Weight Loss</option>
                <option value="muscleGain">Muscle Gain</option>
                <option value="strengthImprovement">
                  Strength Improvement
                </option>
                <option value="enduranceBuilding">Endurance Building</option>
                <option value="flexibility">Flexibility</option>
                <option value="generalHealth">General Health</option>
              </select>
            </div>

            {/* Secondary Fitness Goal */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fitnessGoalSecondary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Secondary Fitness Goal
              </label>
              <select
                name="fitnessGoalSecondary"
                id="fitnessGoalSecondary"
                value={formData.fitnessGoalSecondary}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="weightLoss">Weight Loss</option>
                <option value="muscleGain">Muscle Gain</option>
                <option value="strengthImprovement">
                  Strength Improvement
                </option>
                <option value="enduranceBuilding">Endurance Building</option>
                <option value="flexibility">Flexibility</option>
                <option value="generalHealth">General Health</option>
              </select>
            </div>

            {/* Goal Time Frame */}
            <div className="sm:col-span-2">
              <label
                htmlFor="goalTimeFrame"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Desired Time Frame for Achieving Goals
              </label>
              <select
                name="goalTimeFrame"
                id="goalTimeFrame"
                value={formData.goalTimeFrame}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="3Months">3 Months</option>
                <option value="6Months">6 Months</option>
                <option value="1Year">1 Year</option>
                <option value="2Years">2 Years</option>
                <option value="NotSure">Not Sure</option>
              </select>
            </div>

            {/* Current Fitness Level */}
            <div className="sm:col-span-2">
              <label
                htmlFor="currentFitnessLevel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Fitness Level
              </label>
              <select
                name="currentFitnessLevel"
                id="currentFitnessLevel"
                value={formData.currentFitnessLevel}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Previous Workout Regimes */}
            <div className="sm:col-span-2">
              <label
                htmlFor="previousWorkoutRegimes"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Previous Workout Regimes
              </label>
              <select
                name="previousWorkoutRegimes"
                id="previousWorkoutRegimes"
                value={formData.previousWorkoutRegimes}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Strength Training">Strength Training</option>
                <option value="Cardio Workouts">Cardio Workouts</option>
                <option value="Yoga">Yoga</option>
                <option value="CrossFit">CrossFit</option>
                <option value="Pilates">Pilates</option>
                <option value="Bodybuilding">Bodybuilding</option>
                <option value="Powerlifting">Powerlifting</option>
                <option value="Bodyweight Exercises">
                  Bodyweight Exercises
                </option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Understanding of Exercise Principles */}
            <div className="sm:col-span-2">
              <label
                htmlFor="understandingOfExercisePrinciples"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Assess Understanding and Practice of Exercise Principles (e.g.,
                Progressive Overload, Periodization)
              </label>
              <select
                name="understandingOfExercisePrinciples"
                id="understandingOfExercisePrinciples"
                value={formData.understandingOfExercisePrinciples}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Limited">Limited</option>
                <option value="None">None</option>
              </select>
            </div>

            {/* Training Styles */}
            <div className="sm:col-span-2">
              <label
                htmlFor="trainingStyles"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Previous Experiences with Different Training Styles (e.g.,
                CrossFit, Traditional Bodybuilding, Sports-specific Training)
              </label>
              <select
                name="trainingStyles"
                id="trainingStyles"
                value={formData.trainingStyles}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="CrossFit">CrossFit</option>
                <option value="Traditional Bodybuilding">
                  Hypertrophy/Bodybuilding
                </option>
                <option value="Powerlifting">
                  Powerlifting
                </option>
                <option value="Sports-specific Training">
                  Sports-specific Training
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Exercise Types Preference */}
            <div className="sm:col-span-2">
              <label
                htmlFor="exerciseTypesPreference"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Detailed Preference for Types of Exercises (e.g., Free Weights,
                Machines, Bodyweight)
              </label>
              <select
                name="exerciseTypesPreference"
                id="exerciseTypesPreference"
                value={formData.exerciseTypesPreference}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Free Weights">Free Weights</option>
                <option value="Machines">Machines</option>
                <option value="Bodyweight">Bodyweight</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Balance Between Strength, Cardio, and Flexibility Training */}
            <div className="sm:col-span-2">
              <label
                htmlFor="balancePreference"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Preferred Balance Between Strength, Cardio, and Flexibility
                Training
              </label>
              <select
                name="balancePreference"
                id="balancePreference"
                value={formData.balancePreference}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select an option</option>
                <option value="strength">Strength Focused</option>
                <option value="hypertrophy">Hypertrophy Focused</option>
                <option value="cardio">Cardio Focused</option>
                <option value="flexibility">Flexibility Focused</option>
                <option value="balanced">Balanced</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Warm-Up Routines */}
            <div className="sm:col-span-2">
              <label
                htmlFor="currentWarmUpPractices"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Warm-Up Practices
              </label>
              <select
                name="currentWarmUpPractices"
                id="currentWarmUpPractices"
                value={formData.currentWarmUpPractices}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Dynamic Stretching">Dynamic Stretching</option>
                <option value="Static Stretching">Static Stretching</option>
                <option value="Foam Rolling">Foam Rolling</option>
                <option value="Light Cardio">Light Cardio</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Stretching and Mobility */}
            <div className="sm:col-span-2">
              <label
                htmlFor="currentStretchingRoutine"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Stretching Routine
              </label>
              <select
                name="currentStretchingRoutine"
                id="currentStretchingRoutine"
                value={formData.currentStretchingRoutine}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Dynamic Stretching">Dynamic Stretching</option>
                <option value="Static Stretching">Static Stretching</option>
                <option value="PNF Stretching">PNF Stretching</option>
                <option value="Yoga">Yoga</option>
                <option value="No Stretching">No Stretching</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Rehab, Prehab, and Injury History */}
            <div className="sm:col-span-2">
              <label
                htmlFor="injuryHistory"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Detailed History of Past Injuries or Chronic Issues
              </label>
              <select
                name="injuryHistory"
                id="injuryHistory"
                value={formData.injuryHistory}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="No Injuries">No Injuries</option>
                <option value="Muscle Strain">Muscle Strain</option>
                <option value="Joint Injury">Joint Injury</option>
                <option value="Fracture">Fracture</option>
                <option value="Chronic Pain">Chronic Pain</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Physiotherapy and Corrective Exercises */}
            <div className="sm:col-span-2">
              <label
                htmlFor="physiotherapyExperiences"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Experience with Physiotherapy Exercises
              </label>
              <select
                name="physiotherapyExperiences"
                id="physiotherapyExperiences"
                value={formData.physiotherapyExperiences}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="No Experience">No Experience</option>
                <option value="Physiotherapy for Injury Recovery">
                  Physiotherapy for Injury Recovery
                </option>
                <option value="Post-Surgery Rehabilitation">
                  Post-Surgery Rehabilitation
                </option>
                <option value="Chronic Pain Management">
                  Chronic Pain Management
                </option>
                <option value="Improving Mobility and Flexibility">
                  Improving Mobility and Flexibility
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Recovery and Rest Practices */}
            <div className="sm:col-span-2">
              <label
                htmlFor="recoveryStrategies"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Detailed Recovery Strategies Currently in Use
              </label>
              <select
                name="recoveryStrategies"
                id="recoveryStrategies"
                value={formData.recoveryStrategies}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Rest Days">Rest Days</option>
                <option value="Stretching and Mobility Work">
                  Stretching and Mobility Work
                </option>
                <option value="Nutrition and Hydration">
                  Nutrition and Hydration
                </option>
                <option value="Sleep and Recovery Techniques">
                  Sleep and Recovery Techniques
                </option>
                <option value="Cryotherapy">Cryotherapy</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Nutritional Considerations Related to Exercise */}
            <div className="sm:col-span-2">
              <label
                htmlFor="nutritionalConsiderations"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nutritional Considerations Related to Fitness Goals
              </label>
              <select
                name="nutritionalConsiderations"
                id="nutritionalConsiderations"
                value={formData.nutritionalConsiderations}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Gaining">Gaining</option>
                <option value="Loss">Fat Loss</option>
                <option value="Recomp">Body Recomposition</option>
                <option value="Maintain">Maintain</option>
              </select>
            </div>

            {/* Feedback Mechanism */}
            <div className="sm:col-span-2">
              <label
                htmlFor="progressTrackingWillingness"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Willingness to Track and Report Progress
              </label>
              <select
                name="progressTrackingWillingness"
                id="progressTrackingWillingness"
                value={formData.progressTrackingWillingness}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Very Willing">Very Willing</option>
                <option value="Willing">Willing</option>
                <option value="Neutral">Neutral</option>
                <option value="Reluctant">Reluctant</option>
                <option value="Not Willing">Not Willing</option>
              </select>
            </div>

            {/* Psychological Factors */}
            <div className="sm:col-span-2">
              <label
                htmlFor="psychologicalFactors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mental and Emotional Aspects Impacting Exercise
              </label>
              <select
                name="psychologicalFactors"
                id="psychologicalFactors"
                value={formData.psychologicalFactors}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Motivation and Commitment">
                  Motivation and Commitment
                </option>
                <option value="Stress and Anxiety">Stress and Anxiety</option>
                <option value="Mood and Emotional State">
                  Mood and Emotional State
                </option>
                <option value="Body Image and Self-Esteem">
                  Body Image and Self-Esteem
                </option>
                <option value="Mental Resilience">Mental Resilience</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Lifestyle Factors */}
            <div className="sm:col-span-2">
              <label
                htmlFor="lifestyleFactors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Unique Lifestyle Factors Affecting the Workout Plan (e.g., Work
                Schedule, Family Commitments)
              </label>
              <select
                name="lifestyleFactors"
                id="lifestyleFactors"
                value={formData.lifestyleFactors}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="Work Schedule">Work Schedule</option>
                <option value="Family Commitments">Family Commitments</option>
                <option value="Travel Schedule">Travel Schedule</option>
                <option value="Health Conditions">Health Conditions</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Consent and Data Use */}
            <div className="sm:col-span-2">
              <label
                htmlFor="consentForDataUse"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Consent for Data Use
              </label>
              <input
                type="checkbox"
                name="consentForDataUse"
                id="consentForDataUse"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WorkoutForm;
