import QUnit from 'steal-qunit';
import { ViewModel } from './messages';

// ViewModel unit tests
QUnit.module('broncochat/messages');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the chat-messages component');
});
