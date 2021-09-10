export const splitCharacterName = (name: string) => {
  const array = name.split(/[()]+/).filter((e) => e);

  return {
    realname: array[0],
    surname: array[1] ?? null,
    others: array.slice(2, array.length) ?? null,
  };
};
