import React from 'react'
import styled from 'styled-components'

const TodoAdd = ({ title, discription, handleChange, add }) => (
    <form id="form-add">
        <input type="text" name="title" placeholder="Title task..." value={title} onChange={handleChange} />
        <input type="text" name="description" placeholder="discription task..." value={discription} onChange={handleChange} />
        <button onClick={add}>Add to list</button>
    </form>
)

export default TodoAdd
