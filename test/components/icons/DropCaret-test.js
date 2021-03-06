// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var __path__ = '../../src/js/components/icons/DropCaret';

var GrommetTestUtils = require('../../mocks/GrommetTestUtils');

describe('Grommet DropCaret', function() {
  it('loads an drop-caret icon', function() {
    var Component = GrommetTestUtils.getComponent(__path__);

    GrommetTestUtils.componentShouldExist(Component, 'control-icon-drop-caret');
  });

  it('loads a custom drop-caret icon', function() {
    var Component = GrommetTestUtils.getComponent(__path__, null, { className: 'testing' });

    GrommetTestUtils.componentShouldExist(Component, 'testing');
  });
});
