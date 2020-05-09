'use strict';

jest.mock('stylelint/lib/utils/getOsEol', () => () => '\n');

const getTestRule = require('./getTestRule');
const stylelint = require('stylelint');

global.testRule = getTestRule(stylelint);
