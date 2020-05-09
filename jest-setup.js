'use strict';

jest.mock('stylelint/lib/utils/getOsEol', () => () => '\n');

const getTestRule = require('./getTestRule');

global.testRule = getTestRule();
