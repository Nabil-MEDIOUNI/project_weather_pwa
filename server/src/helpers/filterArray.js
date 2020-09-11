const { toLower } = require('lodash');
const getArgumentInput = require('./getArgumentInput');

module.exports.filterArray = (array, filters, people) => array.filter((item) => {
  if (people) {
  // eslint-disable-next-line no-restricted-syntax
    for (const key in filters && getArgumentInput(filters)) {
      if (item.person_profile[key] === undefined || !filters[key].includes(toLower(item.person_profile[key]))) return false;
    }
    return true;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in filters && getArgumentInput(filters)) {
    if (item[key] === undefined || !filters[key].includes(toLower(item[key]))) return false;
  }
  return true;
});
