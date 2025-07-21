'use-client';

import axios from 'axios';

export const baseURL = process.env.API_URL; // Определение базового URL API из переменной окружения

export const baseAPI = axios.create({baseURL}); // Создание экземпляра axios с базовым URL API
