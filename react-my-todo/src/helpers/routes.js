const url = 'http://localhost:3000';

export const todoItemsApiUrl = (id) => id ? `${url}/todolist/${id}` : `${url}/todolist`;