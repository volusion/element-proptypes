module.exports = {
    coverageReporters: ["text"],
    rootDir: "src",
    testEnvironment: "node",
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    verbose: true,
};
