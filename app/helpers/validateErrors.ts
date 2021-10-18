import {DATE_PICKER_FIELDS} from '../constants';
import {UseFormClearErrors, UseFormSetError} from 'react-hook-form';
import {RequestFormType} from '../modules/AddContent/RequestFormScreen/RequestForm.screen';

type ValidateErrorsType = {
  fieldName: string;
  date: Date;
  setError: UseFormSetError<RequestFormType> | undefined;
  message: string;
  handleCancel(): void;
  onChange(date: Date): void;
  startDate?: Date;
  clearErrors?: UseFormClearErrors<RequestFormType>;
};

type CheckErrorType = Omit<ValidateErrorsType, 'startDate'> & {
  currentDate: Date;
};

const checkError = ({
  setError,
  message,
  onChange,
  handleCancel,
  date,
  fieldName,
  currentDate,
  clearErrors,
}: CheckErrorType) => {
  const difference = date.getTime() - currentDate.getTime();
  if (difference <= 0 && setError) {
    setError(fieldName, {
      type: 'manual',
      message,
    });
  } else {
    onChange(date);
    if (clearErrors) {
      clearErrors(fieldName);
    }
  }
  handleCancel();
};

const validateErrors = ({
  fieldName,
  date,
  setError,
  message,
  onChange,
  handleCancel,
  startDate,
  clearErrors,
}: ValidateErrorsType) => {
  if (fieldName === DATE_PICKER_FIELDS.START_DATE) {
    const currentDate = new Date();
    currentDate.setHours(23, 59, 59, 59);
    checkError({
      date,
      fieldName,
      currentDate,
      handleCancel,
      onChange,
      message,
      setError,
      clearErrors,
    });
  } else if (fieldName === DATE_PICKER_FIELDS.END_DATE && startDate) {
    checkError({
      date,
      fieldName,
      currentDate: startDate,
      handleCancel,
      onChange,
      message,
      setError,
      clearErrors,
    });
  } else {
    handleCancel();
    onChange(date);
  }
};

export default validateErrors;
