import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'broncochat/models/test';

import 'broncochat/messages/messages-test';

F.attach(QUnit);

QUnit.module('broncochat functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('broncochat main page shows up', function() {
  F('title').text('broncochat', 'Title is set');
});
