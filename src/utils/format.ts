export const formatDate = (date: string): string => {
  if (!date) return "n.d.";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export const formatVote = (vote: number): string => vote.toFixed(1);

export const formatCount = (count: number): string => count.toLocaleString("it-IT");

export const formatLanguage = (code: string): string => {
  const name = new Intl.DisplayNames(["it"], { type: "language" }).of(code);
  if (!name) return code;
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const STATUS_LABELS: Record<string, string> = {
  Released: "Uscito",
  "Post Production": "Post-produzione",
  "In Production": "In produzione",
  Planned: "In programma",
  Rumored: "Annunciato",
  Canceled: "Cancellato",
};

export const formatStatus = (status: string): string => STATUS_LABELS[status] ?? status;
