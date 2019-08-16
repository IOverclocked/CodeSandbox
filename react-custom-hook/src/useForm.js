import { useState, useEffect } from 'react'

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Please provide first name'
  } else if (values.firstName && values.firstName.length < 3) {
    errors.firstName = 'First name is too short'
  } else if (!values.lastName) {
    errors.lastName = 'Please provide last name'
  } else if (values.lastName && values.lastName.length < 3) {
    errors.lastName = 'Last name is too short'
  }

  return errors
}

const useForm = initial => {
  const [values, setValues] = useState(initial)
  const [isOpenValid, setIsOpenValid] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isOpenValid) {
      setErrors(validate(values))
    }
  }, [values, isOpenValid])

  const updateValue = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setIsOpenValid(true)
  }

  const submitHandler = (e, callbackSumbit) => {
    e.preventDefault()

    if (!errors.length) {
      callbackSumbit({ ...values })
    }
  }

  return [updateValue, submitHandler, errors]
}

export default useForm
