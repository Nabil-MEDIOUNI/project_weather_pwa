import React from 'react';

const { default: SnackAlert } = require('./SnackAlert');

const Alert = (error, openAlert, setAlert) => {
  if (error) {
    return (
      <SnackAlert
        message={error.message.slice(-26)}
        type="error"
        open={openAlert}
        handleClose={setAlert}
      />
    );
  }
  return '';
};

export default Alert;
