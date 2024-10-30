const { defineConfig } = require('cypress')

module.exports = defineConfig({
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
        mochaFile: './cypress/reports/junit/test-result-[hash].xml',
    },
})
