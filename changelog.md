# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.1.0] - 2021-09-08

### Added

- MongoDB connection for accounts

### Changed

- Moved accounts from db.json to mongoDB

### Removed

- Removed CORS as API endpoints are now on mongo
- Removed Profile settings as they're not necessary

## [2.0.0] - 2021-08-20

### Added

- Create build folder

### Changed

- Move to [Heroku](https://rocky-wave-97760.herokuapp.com/)
- Use relative paths in services

## [1.1.1] - 2021-08-20

### Added

- Express now used to handle backend calls

## [1.1.0] - 2021-08-20

### Added

- New styles for app
- Services files for better readability

### Changed

- Separated Profile and Account DBs
- New calls/updates to component state
- Moved budget calculation to StepTwo

## [1.0.0] - 2021-08-19

### Added

- Get starting budget for the month
- Add projects + budget, ensure they match the final amount
- Ask for current spend of each budget
- Calculate days remaining in the month
- Propose new daily budgets