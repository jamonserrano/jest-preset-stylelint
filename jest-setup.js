'use strict';

const getTestRule = require('./getTestRule');

jest.mock('stylelint/lib/utils/getOsEol', () => () => '\n');

global.testRule = getTestRule();
