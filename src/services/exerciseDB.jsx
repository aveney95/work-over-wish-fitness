// src/services/exerciseDB.js
import axios from 'axios';

const API_BASE_URL = 'https://exercisedb.p.rapidapi.com';
const API_KEY = import.meta.env.VITE_EXERCISEDB_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

// Fetch all exercises
export const fetchAllExercises = async () => {
  const response = await apiClient.get('/exercises');
  return response.data;
};

// Fetch exercises by body part
export const fetchExercisesByBodyPart = async (bodyPart) => {
  const response = await apiClient.get(`/exercises/bodyPart/${bodyPart}`);
  return response.data;
};

// Fetch exercises by equipment
export const fetchExercisesByEquipment = async (equipment) => {
  const response = await apiClient.get(`/exercises/equipment/${equipment}`);
  return response.data;
};

// Fetch exercises by muscle group
export const fetchExercisesByMuscle = async (muscle) => {
  const response = await apiClient.get(`/exercises/target/${muscle}`);
  return response.data;
};
