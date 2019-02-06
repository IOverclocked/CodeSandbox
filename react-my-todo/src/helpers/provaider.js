import { todoItemsApiUrl } from './routes';
import * as api from './api';

export const getAll = () => api.get(todoItemsApiUrl());
export const add = (params) => api.post(todoItemsApiUrl(), { ...params });
export const del = (id) => api.del(todoItemsApiUrl(id));

