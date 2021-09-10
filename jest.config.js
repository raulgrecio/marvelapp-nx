const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    //...getJestProjects(),
    //'<rootDir>/apps/marvel-app',
    '<rootDir>/libs/marvel/models',
    '<rootDir>/libs/marvel/services',
    '<rootDir>/libs/marvel/store',
    '<rootDir>/libs/marvel/ui-app',
  ],
};
