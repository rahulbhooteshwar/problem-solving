const fs = require('fs');
const { readJsonSync } = require('fs-extra');
const path = require('path');

const assignSupportCasesToAgents = () => {
  const dataFilePath = path.join(__dirname, './data.json');
  const data = readJsonSync(dataFilePath);
  console.log(data);
};

module.exports = {
  assignSupportCasesToAgents,
};
