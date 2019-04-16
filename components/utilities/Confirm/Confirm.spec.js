import test from 'tape';
import Confirm from './Confirm';

test('Confirm - user clicks okay', (t) => {
  Confirm({
    name: 'Cancel Changes',
    title: 'Are you sure?',
    description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
    okLabel: 'Confirm',
    cancelLabel: 'Cancel',
  })
    .then(() => {
      t.pass('Confirm resolves');
    })
    .catch((err) => {
      t.fail(err.message);
    })
    .finally(() => {
      t.equals(
        document.body.getElementsByClassName('uic--confirm-modal').length,
        0,
        'Modal goes away'
      );
      t.end();
    });

  t.equals(
    document.body.getElementsByClassName('uic--confirm-modal').length,
    1,
    'Modal appears'
  );
  document.body.getElementsByTagName('Button')[0].click();
});

test('Confirm - user clicks cancel', (t) => {
  Confirm({
    name: 'Cancel Changes',
    title: 'Are you sure?',
    description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
    okLabel: 'Confirm',
    cancelLabel: 'Cancel',
  })
    .then(() => {
      t.fail('Should not have resolved');
    })
    .catch(() => {
      t.pass('Confirm rejects successfully');
    })
    .finally(() => {
      t.equals(
        document.body.getElementsByClassName('uic--confirm-modal').length,
        0,
        'Modal goes away'
      );
      t.end();
    });

  t.equals(
    document.body.getElementsByClassName('uic--confirm-modal').length,
    1,
    'Modal appears'
  );
  document.body.getElementsByTagName('Button')[1].click();
});
