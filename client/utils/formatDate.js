export default function formatDate(inputDate) {
  const date = new Date(inputDate);

  const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
  return formattedDate;
}