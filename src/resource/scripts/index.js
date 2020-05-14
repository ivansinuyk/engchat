export const gradeLevel = (grade) => {
  switch (true) {
    case grade < 2:
      return 'Beginner';
    case grade < 4:
      return 'Elementary';
    case grade < 6:
      return 'Intermediate';
    case grade < 8:
      return 'Advanced';
    case grade >= 10:
      return 'Expert';
  }
};

export const parsePhone = (phone) =>
  `${phone.substr(0, 4)} (${phone.substr(4, 2)}) ${phone.substr(
    7,
    3,
  )} ${phone.substr(10, 2)} ${phone.substr(13, 2)}`;
