export const get = (url) => fetch(url)
    .then(response => {
        if (response.ok) return response.json();
        else throw new Error(response);
    })

const request = (url, method, body) => fetch(url, {
    method: method,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
}).then(response => {
    if (response.ok) return response.json();
    else throw new Error(response.status, response.statusText);
})

export const post = (url, body) => request(url, 'POST', body);

export const del = (url) => fetch(url, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.ok) return response;
    else throw new Error(response);
})
