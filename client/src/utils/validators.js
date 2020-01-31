const required = (value) => (value ? undefined : 'Required')

const minLength = (minLength) => (value) =>
  value && value.length < minLength ? `Must be at least ${minLength} symbols` : undefined

const minLength5 = minLength(5)

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export { required, email, minLength5 }
