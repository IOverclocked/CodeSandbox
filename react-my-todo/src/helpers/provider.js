import { todoItemsApiUrl } from './routes';
import * as api from './api';

export const getAll = () => api.get(todoItemsApiUrl());
export const getOne = (id) => api.get(todoItemsApiUrl(id));
export const add = (params) => api.post(todoItemsApiUrl(), { ...params });
export const del = (id) => api.del(todoItemsApiUrl(id));
export const done = (id, params) => api.done(todoItemsApiUrl(id), { ...params });
export const edit = (id, params) => api.edit(todoItemsApiUrl(id), { ...params });

