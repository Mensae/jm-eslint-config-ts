/* eslint-env jest */

const nodeConfig = require('../../configs/ts.js');

describe('eslint-config-ts', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
