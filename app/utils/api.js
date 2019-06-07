import axios from 'axios';

const serverData = window.SERVER_DATA;
const baseURL = serverData && serverData.API_URL;

const apiClient = axios.create({
  baseURL: baseURL || 'https://mobille-service-dev.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const API = {
  // Phone
  createPhone: body => apiClient.post('/phone', body),
  fetchPhones: () => apiClient.get('/phone'),
  getPhone: id => apiClient.get(`/phone/${id}`),
  updatePhone: (id, body) => apiClient.post(`/phone/${id}`, body),
  deletePhone: id => apiClient.delete(`/phone/${id}`),
  // Client
  createClient: body => apiClient.post('/client', body),
  fetchClients: () => apiClient.get('/client'),
  getClient: id => apiClient.get(`/client/${id}`),
  updateClient: (id, body) => apiClient.post(`/client/${id}`, body),
  deleteClient: id => apiClient.delete(`/client/${id}`),
  // Tariff
  createTariff: body => apiClient.post('/tariff', body),
  fetchTariffs: () => apiClient.get('/tariff'),
  getTariff: id => apiClient.get(`/tariff/${id}`),
  updateTariff: (id, body) => apiClient.post(`/tariff/${id}`, body),
  deleteTariff: id => apiClient.delete(`/tariff/${id}`),
  // Service
  createService: body => apiClient.post('/service', body),
  fetchServices: () => apiClient.get('/service'),
  getService: id => apiClient.get(`/service/${id}`),
  updateService: (id, body) => apiClient.post(`/service/${id}`, body),
  deleteService: id => apiClient.delete(`/service/${id}`),
  // Model
  createModel: body => apiClient.post('/model', body),
  fetchModels: () => apiClient.get('/model'),
  getModel: id => apiClient.get(`/model/${id}`),
  updateModel: (id, body) => apiClient.post(`/model/${id}`, body),
  deleteModel: id => apiClient.delete(`/model/${id}`),
  // Pay
  createPay: body => apiClient.post('/pay', body),
  fetchPays: () => apiClient.get('/pay'),
  getPay: id => apiClient.get(`/pay/${id}`),
  updatePay: (id, body) => apiClient.post(`/pay/${id}`, body),
  deletePay: id => apiClient.delete(`/pay/${id}`),
};

export default API;
