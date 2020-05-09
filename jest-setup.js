'use strict';

const getTestRule = require('./getTestRule');
const stylelint = require('stylelint');

jest.mock('stylelint/lib/utils/getOsEol', () => () => '\n');

global.testRule = getTestRule(stylelint);
