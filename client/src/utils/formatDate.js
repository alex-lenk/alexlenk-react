export function formatDate(timestamp) {
  const date = new Date(timestamp ? +timestamp : Date.now());
  return date.toLocaleDateString('ru-RU', { month: '2-digit', year: 'numeric' });
}
