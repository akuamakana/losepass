export const dateCountdown = (date: string) => {
  const now = new Date();
  const end = new Date(date);
  end.setFullYear(now.getFullYear());
  if (now > end) {
    end.setFullYear(now.getFullYear() + 1);
  }
  const diff = end.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};
