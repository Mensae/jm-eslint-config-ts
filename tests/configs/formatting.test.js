/* eslint-env jest */

const nodeConfig = require('../../configs/formatting.js');

describe('eslint-config-ts-formatting', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
