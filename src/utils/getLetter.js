const getLetter = number => {
  let letter;

  switch (number) {
    case 0:
      letter = 'أ.';
      break;
    case 1:
      letter = 'ب.';
      break;
    case 2:
      letter = 'ج.';
      break;
    case 3:
      letter = 'د.';
      break;
    default:
      letter = null;
      break;
  }

  return letter;
};

export default getLetter;
