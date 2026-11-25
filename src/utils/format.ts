export const formatDate = (date: string): string => {
  if (!date) return "n.d.";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export const formatVote = (vote: number): string => vote.toFixed(1);
