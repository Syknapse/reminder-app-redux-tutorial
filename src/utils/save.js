const save = payload => {
  const [item] = Object.keys(payload)
  const [data] = Object.values(payload)

  return localStorage.setItem(item, JSON.stringify(data))
}

export default save
