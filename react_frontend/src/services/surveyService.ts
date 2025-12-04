import axios from 'axios';
import { Survey } from '../models/Survey';

const API_URL = 'http://localhost:8080/api/surveys';

const surveyService = {
  createSurvey: async (survey: Survey): Promise<Survey> => {
    const response = await axios.post<Survey>(API_URL, survey);
    return response.data;
  },

  getAllSurveys: async (): Promise<Survey[]> => {
    const response = await axios.get<Survey[]>(API_URL);
    return response.data;
  },

  getSurveyById: async (id: number): Promise<Survey> => {
    const response = await axios.get<Survey>(`${API_URL}/${id}`);
    return response.data;
  },

  updateSurvey: async (id: number, survey: Survey): Promise<Survey> => {
    const response = await axios.put<Survey>(`${API_URL}/${id}`, survey);
    return response.data;
  },

  deleteSurvey: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
};

export default surveyService;

