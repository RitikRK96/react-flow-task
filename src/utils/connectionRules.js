export const isValidConnection = (source, target) => {
  return source?.customType === 'blockA' && target?.customType === 'blockB';
};