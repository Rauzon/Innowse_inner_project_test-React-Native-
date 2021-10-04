const errorHandler = (err: unknown): string => {
  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return 'Something is wrong!';
  }
};

export default errorHandler;
