module.exports.personPersmissions = (user, positions, functionName) => {
  if (functionName === 'Outgoing Global Talent') {
    user.current_positions.function.function_short_name = 'OGT';
  }
  if (functionName === 'Outgoing Global Vulenteer') {
    user.current_positions.function.function_short_name = 'OGV';
  }
  if (functionName === 'Outgoing Global Entrepreneur') {
    user.current_positions.function.function_short_name = 'OGE';
  }
  if (functionName === 'Incoming Global Vulenteer') {
    user.current_positions.function.function_short_name = 'IGV';
  }
  if (functionName === 'Incoming Global Entrepreneur') {
    user.current_positions.function.function_short_name = 'IGE';
  }
  if (functionName === 'Incoming Global Talent') {
    user.current_positions.function.function_short_name = 'IGT';
  }
  if (functionName === 'Marketing and Communication') {
    user.current_positions.function.function_short_name = 'MKT';
  }
  if (functionName === 'Finance, Legalities and Administration') {
    user.current_positions.function.function_short_name = 'F&L';
  }
  if (functionName === 'Partnership Development') {
    user.current_positions.function.function_short_name = 'PR';
  }
  if (functionName === 'Talent Management') {
    user.current_positions.function.function_short_name = 'TM';
  }

  if (positions === 'Admin') {
    user.is_admin = true;
    user.is_eb = true;
  }

  if (positions === 'Vice President') {
    user.is_eb = true;
  }
};

module.exports.CheckUserDepartment = (user) => {
  if (user.current_positions.function.function_short_name === 'OGT') { return 'oGT CORNER'; }
  if (user.current_positions.function.function_short_name === 'OGE') { return 'oGE CORNER'; }
  if (user.current_positions.function.function_short_name === 'OGV') { return 'oGV 2 CORNER'; }
};

module.exports.setShortName = (funcName) => {
  if (funcName === 'Outgoing Global Talent') return 'OGT';

  if (funcName === 'Outgoing Global Vulenteer') return 'OGV';

  if (funcName === 'Outgoing Global Entrepreneur') return 'OGE';

  if (funcName === 'Incoming Global Vulenteer') return 'IGV';

  if (funcName === 'Incoming Global Entrepreneur') return 'IGE';

  if (funcName === 'Incoming Global Talent') return 'IGT';

  if (funcName === 'Marketing and Communication') return 'MKT';

  if (funcName === 'Finance, Legalities and Administration') return 'F&L';

  if (funcName === 'Partnership Development') return 'PR';

  if (funcName === 'Talent Management') return 'TM';

  return '';
};
