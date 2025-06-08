// Exercise Database
const exerciseDatabase = {
    lose: [
        {
            name: "High-Intensity Interval Training (HIIT)",
            description: "Alternating periods of intense exercise with recovery periods to maximize calorie burn.",
            duration: "20-30 minutes",
            frequency: "3-4 times/week",
            calories: "300-500 per session"
        },
        {
            name: "Running/Jogging",
            description: "Cardiovascular exercise that burns calories efficiently and improves endurance.",
            duration: "30-45 minutes",
            frequency: "4-5 times/week",
            calories: "400-600 per session"
        },
        {
            name: "Swimming",
            description: "Full-body, low-impact exercise that burns calories while being gentle on joints.",
            duration: "30-45 minutes",
            frequency: "3-4 times/week",
            calories: "350-500 per session"
        },
        {
            name: "Cycling",
            description: "Great cardio workout that can be done indoors or outdoors with adjustable intensity.",
            duration: "45-60 minutes",
            frequency: "4-5 times/week",
            calories: "400-700 per session"
        },
        {
            name: "Circuit Training",
            description: "Combination of strength and cardio exercises performed in sequence with minimal rest.",
            duration: "30-40 minutes",
            frequency: "3-4 times/week",
            calories: "300-450 per session"
        },
        {
            name: "Jump Rope",
            description: "High-intensity cardio exercise that improves coordination and burns calories quickly.",
            duration: "15-25 minutes",
            frequency: "4-5 times/week",
            calories: "200-350 per session"
        }
    ],
    gain: [
        {
            name: "Weight Training",
            description: "Progressive resistance training to build muscle mass and strength.",
            duration: "45-60 minutes",
            frequency: "4-5 times/week",
            focus: "Different muscle groups"
        },
        {
            name: "Compound Movements",
            description: "Multi-joint exercises like squats, deadlifts, and bench press that work multiple muscle groups.",
            duration: "60-75 minutes",
            frequency: "3-4 times/week",
            focus: "Major muscle groups"
        },
        {
            name: "Progressive Overload Training",
            description: "Gradually increasing weight, reps, or sets to continuously challenge muscles.",
            duration: "45-60 minutes",
            frequency: "4-5 times/week",
            focus: "Strength progression"
        },
        {
            name: "Functional Training",
            description: "Exercises that mimic daily activities while building strength and muscle.",
            duration: "30-45 minutes",
            frequency: "3-4 times/week",
            focus: "Practical strength"
        },
        {
            name: "Bodybuilding Split",
            description: "Targeted workouts focusing on specific muscle groups each session.",
            duration: "60-90 minutes",
            frequency: "5-6 times/week",
            focus: "Muscle isolation"
        },
        {
            name: "Powerlifting",
            description: "Focus on the three main lifts: squat, bench press, and deadlift for maximum strength.",
            duration: "60-90 minutes",
            frequency: "3-4 times/week",
            focus: "Maximum strength"
        }
    ],
    maintain: [
        {
            name: "Balanced Cardio",
            description: "Moderate intensity cardiovascular exercise to maintain fitness and heart health.",
            duration: "30-45 minutes",
            frequency: "3-4 times/week",
            intensity: "Moderate"
        },
        {
            name: "Strength Maintenance",
            description: "Regular weight training to maintain muscle mass and bone density.",
            duration: "45-60 minutes",
            frequency: "2-3 times/week",
            intensity: "Moderate"
        },
        {
            name: "Flexibility & Mobility",
            description: "Yoga, stretching, and mobility work to maintain range of motion and prevent injury.",
            duration: "30-45 minutes",
            frequency: "2-3 times/week",
            intensity: "Low to Moderate"
        },
        {
            name: "Recreational Sports",
            description: "Fun activities like tennis, basketball, or soccer that provide exercise and enjoyment.",
            duration: "60-90 minutes",
            frequency: "1-2 times/week",
            intensity: "Variable"
        },
        {
            name: "Walking/Hiking",
            description: "Low-impact activities that maintain cardiovascular health and can be enjoyed outdoors.",
            duration: "45-60 minutes",
            frequency: "4-5 times/week",
            intensity: "Low to Moderate"
        },
        {
            name: "Cross-Training",
            description: "Variety of different exercises to maintain overall fitness and prevent boredom.",
            duration: "30-60 minutes",
            frequency: "3-4 times/week",
            intensity: "Variable"
        }
    ]
};

// Tips Database
const tipsDatabase = {
    lose: [
        {
            icon: "fas fa-utensils",
            text: "Create a moderate caloric deficit of 300-500 calories per day through diet and exercise."
        },
        {
            icon: "fas fa-tint",
            text: "Stay hydrated by drinking at least 8 glasses of water daily to support metabolism."
        },
        {
            icon: "fas fa-bed",
            text: "Get 7-9 hours of quality sleep to regulate hunger hormones and recovery."
        },
        {
            icon: "fas fa-chart-line",
            text: "Track your progress with measurements and photos, not just the scale."
        }
    ],
    gain: [
        {
            icon: "fas fa-drumstick-bite",
            text: "Eat in a caloric surplus of 300-500 calories per day with protein-rich foods."
        },
        {
            icon: "fas fa-dumbbell",
            text: "Focus on progressive overload - gradually increase weight, reps, or sets each week."
        },
        {
            icon: "fas fa-clock",
            text: "Allow adequate rest between workouts - muscles grow during recovery, not during exercise."
        },
        {
            icon: "fas fa-apple-alt",
            text: "Consume protein within 30 minutes after workouts to maximize muscle protein synthesis."
        }
    ],
    maintain: [
        {
            icon: "fas fa-balance-scale",
            text: "Maintain a balanced approach with 80% consistency rather than 100% perfection."
        },
        {
            icon: "fas fa-heart",
            text: "Focus on activities you enjoy to make fitness a sustainable part of your lifestyle."
        },
        {
            icon: "fas fa-users",
            text: "Find workout partners or join fitness communities for motivation and accountability."
        },
        {
            icon: "fas fa-calendar-check",
            text: "Schedule regular fitness assessments to adjust your routine as needed."
        }
    ]
};

// Weekly Schedule Templates
const scheduleTemplates = {
    lose: [
        { day: "Monday", activity: "HIIT Training", active: true },
        { day: "Tuesday", activity: "Cardio (Running)", active: true },
        { day: "Wednesday", activity: "Circuit Training", active: true },
        { day: "Thursday", activity: "Active Recovery", active: false },
        { day: "Friday", activity: "Swimming", active: true },
        { day: "Saturday", activity: "Cycling", active: true },
        { day: "Sunday", activity: "Rest Day", active: false }
    ],
    gain: [
        { day: "Monday", activity: "Upper Body Strength", active: true },
        { day: "Tuesday", activity: "Lower Body Strength", active: true },
        { day: "Wednesday", activity: "Push Day", active: true },
        { day: "Thursday", activity: "Pull Day", active: true },
        { day: "Friday", activity: "Leg Day", active: true },
        { day: "Saturday", activity: "Active Recovery", active: false },
        { day: "Sunday", activity: "Rest Day", active: false }
    ],
    maintain: [
        { day: "Monday", activity: "Cardio", active: true },
        { day: "Tuesday", activity: "Strength Training", active: true },
        { day: "Wednesday", activity: "Yoga/Flexibility", active: true },
        { day: "Thursday", activity: "Recreational Sport", active: true },
        { day: "Friday", activity: "Cross Training", active: true },
        { day: "Saturday", activity: "Outdoor Activity", active: false },
        { day: "Sunday", activity: "Rest Day", active: false }
    ]
};

// DOM Elements
const userForm = document.getElementById('user-form');
const resultsSection = document.getElementById('results');
const fitnessForm = document.getElementById('fitness-form');
const backBtn = document.getElementById('back-btn');

// Form inputs
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const goalSelect = document.getElementById('goal');
const activitySelect = document.getElementById('activity-level');

// Result display elements
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');
const goalDisplay = document.getElementById('goal-display');
const caloriesDisplay = document.getElementById('calories-display');
const exerciseList = document.getElementById('exercise-list');
const weeklySchedule = document.getElementById('weekly-schedule');
const tipsList = document.getElementById('tips-list');

// Event Listeners
fitnessForm.addEventListener('submit', handleFormSubmit);
backBtn.addEventListener('click', showForm);

// Add real-time validation
heightInput.addEventListener('blur', validateHeight);
weightInput.addEventListener('blur', validateWeight);
goalSelect.addEventListener('change', validateGoal);
activitySelect.addEventListener('change', validateActivity);

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const userData = getUserData();
        displayResults(userData);
        showResults();
    }
}

function validateForm() {
    let isValid = true;
    
    isValid = validateHeight() && isValid;
    isValid = validateWeight() && isValid;
    isValid = validateGoal() && isValid;
    isValid = validateActivity() && isValid;
    
    return isValid;
}

function validateHeight() {
    const height = parseFloat(heightInput.value);
    const errorElement = document.getElementById('height-error');
    
    if (!height || height < 100 || height > 250) {
        errorElement.textContent = 'Please enter a valid height between 100-250 cm';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

function validateWeight() {
    const weight = parseFloat(weightInput.value);
    const errorElement = document.getElementById('weight-error');
    
    if (!weight || weight < 30 || weight > 300) {
        errorElement.textContent = 'Please enter a valid weight between 30-300 kg';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

function validateGoal() {
    const goal = goalSelect.value;
    const errorElement = document.getElementById('goal-error');
    
    if (!goal) {
        errorElement.textContent = 'Please select a fitness goal';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

function validateActivity() {
    const activity = activitySelect.value;
    const errorElement = document.getElementById('activity-error');
    
    if (!activity) {
        errorElement.textContent = 'Please select your activity level';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

function getUserData() {
    return {
        height: parseFloat(heightInput.value),
        weight: parseFloat(weightInput.value),
        goal: goalSelect.value,
        activityLevel: activitySelect.value
    };
}

function calculateBMI(weight, height) {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Math.round(bmi * 10) / 10;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return { category: 'Underweight', class: 'bmi-underweight' };
    if (bmi < 25) return { category: 'Normal weight', class: 'bmi-normal' };
    if (bmi < 30) return { category: 'Overweight', class: 'bmi-overweight' };
    return { category: 'Obese', class: 'bmi-obese' };
}

function calculateCalories(weight, height, activityLevel, goal) {
    // Basic Metabolic Rate (BMR) calculation using Mifflin-St Jeor Equation
    // This is simplified - in reality, we'd need age and gender
    const bmr = 10 * weight + 6.25 * height - 5 * 30 + 5; // Assuming age 30, male
    
    // Activity multipliers
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        extra: 1.9
    };
    
    const maintenanceCalories = bmr * activityMultipliers[activityLevel];
    
    // Adjust based on goal
    let targetCalories;
    switch (goal) {
        case 'lose':
            targetCalories = maintenanceCalories - 400;
            break;
        case 'gain':
            targetCalories = maintenanceCalories + 400;
            break;
        default:
            targetCalories = maintenanceCalories;
    }
    
    return Math.round(targetCalories);
}

function getGoalDisplayText(goal) {
    const goalTexts = {
        lose: 'Lose Weight',
        gain: 'Gain Weight',
        maintain: 'Maintain Weight'
    };
    return goalTexts[goal];
}

function displayResults(userData) {
    const bmi = calculateBMI(userData.weight, userData.height);
    const bmiInfo = getBMICategory(bmi);
    const calories = calculateCalories(userData.weight, userData.height, userData.activityLevel, userData.goal);
    
    // Display basic stats
    bmiValue.textContent = bmi;
    bmiCategory.textContent = bmiInfo.category;
    bmiCategory.className = `stat-category ${bmiInfo.class}`;
    goalDisplay.textContent = getGoalDisplayText(userData.goal);
    caloriesDisplay.textContent = `${calories} kcal`;
    
    // Display exercise recommendations
    displayExercises(userData.goal);
    
    // Display weekly schedule
    displaySchedule(userData.goal);
    
    // Display tips
    displayTips(userData.goal);
}

function displayExercises(goal) {
    const exercises = exerciseDatabase[goal];
    exerciseList.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'exercise-card fade-in-up';
        exerciseCard.style.animationDelay = `${index * 0.1}s`;
        
        const detailsHtml = exercise.calories ? 
            `<div class="exercise-detail"><i class="fas fa-clock"></i> ${exercise.duration}</div>
             <div class="exercise-detail"><i class="fas fa-calendar"></i> ${exercise.frequency}</div>
             <div class="exercise-detail"><i class="fas fa-fire"></i> ${exercise.calories}</div>` :
            `<div class="exercise-detail"><i class="fas fa-clock"></i> ${exercise.duration}</div>
             <div class="exercise-detail"><i class="fas fa-calendar"></i> ${exercise.frequency}</div>
             <div class="exercise-detail"><i class="fas fa-target"></i> ${exercise.focus || exercise.intensity}</div>`;
        
        exerciseCard.innerHTML = `
            <div class="exercise-name">${exercise.name}</div>
            <div class="exercise-description">${exercise.description}</div>
            <div class="exercise-details">
                ${detailsHtml}
            </div>
        `;
        
        exerciseList.appendChild(exerciseCard);
    });
}

function displaySchedule(goal) {
    const schedule = scheduleTemplates[goal];
    weeklySchedule.innerHTML = '';
    
    schedule.forEach((day, index) => {
        const scheduleDay = document.createElement('div');
        scheduleDay.className = `schedule-day ${day.active ? 'active' : ''} fade-in-up`;
        scheduleDay.style.animationDelay = `${index * 0.05}s`;
        
        scheduleDay.innerHTML = `
            <div class="day-name">${day.day}</div>
            <div class="day-activity">${day.activity}</div>
        `;
        
        weeklySchedule.appendChild(scheduleDay);
    });
}

function displayTips(goal) {
    const tips = tipsDatabase[goal];
    tipsList.innerHTML = '';
    
    tips.forEach((tip, index) => {
        const tipCard = document.createElement('div');
        tipCard.className = 'tip-card fade-in-up';
        tipCard.style.animationDelay = `${index * 0.1}s`;
        
        tipCard.innerHTML = `
            <div class="tip-icon">
                <i class="${tip.icon}"></i>
            </div>
            <div class="tip-text">${tip.text}</div>
        `;
        
        tipsList.appendChild(tipCard);
    });
}

function showResults() {
    userForm.classList.remove('active');
    resultsSection.classList.add('active');
    
    // Scroll to top of results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showForm() {
    resultsSection.classList.remove('active');
    userForm.classList.add('active');
    
    // Clear any error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Scroll to top of form
    userForm.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Show the form by default
    userForm.classList.add('active');
    
    // Add some entrance animations
    setTimeout(() => {
        document.querySelector('header').classList.add('fade-in-up');
        document.querySelector('.form-section').classList.add('fade-in-up');
    }, 100);
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to form inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading effect to submit button
    const submitBtn = document.querySelector('.btn-primary');
    fitnessForm.addEventListener('submit', function(e) {
        if (validateForm()) {
            submitBtn.innerHTML = '<div class="loading"></div> Processing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Get My Recommendations';
                submitBtn.disabled = false;
            }, 1000);
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && resultsSection.classList.contains('active')) {
        showForm();
    }
    
    if (e.key === 'Enter' && e.target.tagName === 'SELECT') {
        e.preventDefault();
        const nextInput = e.target.parentElement.nextElementSibling?.querySelector('input, select');
        if (nextInput) {
            nextInput.focus();
        }
    }
});

// Add form auto-save to localStorage (optional enhancement)
function saveFormData() {
    const formData = {
        height: heightInput.value,
        weight: weightInput.value,
        goal: goalSelect.value,
        activityLevel: activitySelect.value
    };
    localStorage.setItem('fitnessTrackerData', JSON.stringify(formData));
}

function loadFormData() {
    const saved = localStorage.getItem('fitnessTrackerData');
    if (saved) {
        const data = JSON.parse(saved);
        heightInput.value = data.height || '';
        weightInput.value = data.weight || '';
        goalSelect.value = data.goal || '';
        activitySelect.value = data.activityLevel || '';
    }
}

// Auto-save form data on input
[heightInput, weightInput, goalSelect, activitySelect].forEach(input => {
    input.addEventListener('change', saveFormData);
});

// Load saved data on page load
document.addEventListener('DOMContentLoaded', loadFormData);
