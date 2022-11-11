const REQUIRED_FIELD = 'Required to fill';

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/) != null) {
      return 'Validation Error';
    }
    if (value.trim() === '') {
      return 'Validation Error';
    }
    return false;
  },
};

export const usernameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/) != null) {
      return 'Validation Error';
    }
    if (value.trim() === '') {
      return 'Validation Error';
    }
    return false;
  },
};
