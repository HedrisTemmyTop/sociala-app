export const calcDate = (date1, date2) => {
  const daysPassed = (date1 - date2) / 1000;
  if (daysPassed < 60) return "now";
  if (daysPassed >= 60 && daysPassed <= 3599)
    return Math.floor(daysPassed / 60) + "minutes ago";
  if (daysPassed >= 3600 && daysPassed <= 86399)
    return `${Math.floor(daysPassed / (60 * 60))} hours ago`;
  if (daysPassed >= 86400 && daysPassed <= 172800) return "Yesterday";
  else {
    const dated = new Date(date2);

    return `${dated.getDate()}/${dated.getMonth() + 1}/${dated.getFullYear()}`;
  }
};
