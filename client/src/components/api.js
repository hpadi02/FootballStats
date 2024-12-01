import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

export const fetchPlayers = () => API.get('/players');
export const createPlayer = (newPlayer) => API.post('/players', newPlayer);
export const updatePlayer = (id, updatedPlayer) => API.put(`/players/${id}`, updatedPlayer);
export const deletePlayer = (id) => API.delete(`/players/${id}`);