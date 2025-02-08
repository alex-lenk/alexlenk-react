const handleAxiosError = (error) => {
  const err = error;
  if (err.response) {
    const data = err.response.data;
    if (data && typeof data.message === 'string') {
      if (data.message === 'The session ended. Please reconnect') return 'return';
      return data.message;
    }
  }
  console.error(error);
  return 'Появилась неизвестная ошибка. Пожалуйста свяжитесь с нами!';
};

export default handleAxiosError;
