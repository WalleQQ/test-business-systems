export const randomUrl = (min: number, max: number) => {
  return 'https://i.pravatar.cc/300?img=' + Math.random() * (max - min) + min;
};
