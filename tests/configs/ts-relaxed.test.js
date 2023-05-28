/* eslint-env jest */

const nodeConfig = require('../../configs/ts-relaxed.js');

describe('eslint-config-ts-relaxed', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
