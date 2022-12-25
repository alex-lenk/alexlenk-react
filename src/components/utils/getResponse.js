export const getResponse = async (url)=> {
  const response = await fetch(url)

  if (!response) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
  }

  return response.json()
}
