import React from 'react'
import useForm from './useForm'

const App = () => {
  const [updateValue, submitHandler, errors] = useForm({})

  const onSubmit = values => {
    console.log({ ...values })
  }
  return (
    <div className="App">
      <h2>useForm hook</h2>

      <form onSubmit={(e) => submitHandler(e, onSubmit)}>

        <input name="firstName" placeholder="Your name" onChange={updateValue} />
        {errors && errors.firstName && <p>{errors.firstName}</p>}
        <br />

        <input name="lastName" placeholder="Your last name" onChange={updateValue} />
        {errors && errors.lastName && <p>{errors.lastName}</p>}
        <br />

        <button type="submit">Send</button>

      </form>
    </div>
  )
}

export default App
