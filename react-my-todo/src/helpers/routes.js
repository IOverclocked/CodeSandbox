const url = 'http://localhost:3001';

export const todoItemsApiUrl = (id) => id ? `${url}/todolist/${id}` : `${url}/todolist`;