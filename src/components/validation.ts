const REQUIRED_FIELD = 'Required to fill';

export const nameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Validation Error'
        }
        if(value.trim()==='') {
            return 'Validation Error'
        }
        return true;
    }
};

export const usernameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Validation Error'
        }
        if(value.trim()==='') {
            return 'Validation Error'
        }
        return true;
    }
};
