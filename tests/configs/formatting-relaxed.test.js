/* eslint-env jest */

const nodeConfig = require('../../configs/formatting-relaxed.js');

describe('eslint-config-ts-formatting-relaxed', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
