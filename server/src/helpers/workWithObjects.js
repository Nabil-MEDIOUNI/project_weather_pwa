exports.unnecessaryData = (data, string) => data.filter((o) => !Object.keys(o).some((k) => o[k].includes(string)));

exports.objectIsEmpty = (args) => Object.keys(args).length === 0 && args.constructor === Object;
