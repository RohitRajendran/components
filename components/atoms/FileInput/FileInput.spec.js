import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import FileInput from './FileInput';
import {ButtonInterior} from '../Button/Button';

test('FileInput - renders', (t) => {
  const onChangeSpy = spy();
  try {
    const component = mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        onChange={onChangeSpy}
        required
      />
    );

    const componentInputProps = component.find('input').props();
    t.equal(componentInputProps.name, 'test_file_input');
    t.equal(componentInputProps.type, 'file');
    t.equal(componentInputProps['aria-label'], 'File Name');

    componentInputProps.onChange({
      preventDefault: () => {
        return;
      },
      target: {files: ['cannot', 'handle', 'multiple', 'files']},
    });
    t.equal(onChangeSpy.args.length, 0);

    componentInputProps.onChange({
      preventDefault: () => {
        return;
      },
      target: {files: ['test file!']},
    });
    t.deepEqual(onChangeSpy.args[0], ['test_file_input', 'test file!']);
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - required field error', (t) => {
  try {
    const component = mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        required
        showRequiredError
      />
    );

    t.equal(component.find('.uic--error').length, 1);
    t.equal(component.find('.uic--validation-error').text(), 'Required Field');
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - validation error', (t) => {
  try {
    const component = mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        error
        validationErrorMsg="Hey! You did it wrong!"
      />
    );

    t.equal(component.find('.uic--error').length, 1);
    t.equal(
      component.find('.uic--validation-error').text(),
      'Hey! You did it wrong!'
    );
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - disabled', (t) => {
  try {
    const component = mount(
      <FileInput name="test_file_input" label="File Name" disabled />
    );

    t.equal(component.find('.uic--disabled').length, 2);
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - label, span, button states', (t) => {
  try {
    const component = mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        description="Described!"
        placeholder="Upload the file, fool!"
      />
    );

    t.equal(
      component.find('.uic--description').text(),
      'Described!',
      'Label is empty when no file is present'
    );

    t.equal(
      component.find('label').map((label) => label.text())[1],
      '',
      'Label is empty when no file is present'
    );

    t.equal(
      component.find('span').map((span) => span.text())[0],
      'Upload the file, fool!',
      'Span shows placeholder when no file is present'
    );

    t.equal(
      component.find(ButtonInterior).map((btn) => btn.text())[0],
      'Choose File'
    );

    component.setProps({buttonText: 'Upload It!'});

    t.equal(
      component.find(ButtonInterior).text(),
      'Upload It!',
      'Custom buttonText is shown when no file is present'
    );

    component.setState({file: {name: 'a-file.txt'}});

    t.equal(
      component.find('label').map((label) => label.text())[1],
      'File Name (Optional)',
      'Label is present when file is present'
    );

    t.equal(
      component.find('span').map((span) => span.text())[0],
      'a-file.txt',
      'Span shows file name when file is present'
    );

    t.equal(
      component.find(ButtonInterior).text(),
      'Upload It!',
      'Custom buttonText is shown when file is present and no buttonTextWithFile is present'
    );

    component.setProps({
      disableOptionalFlag: true,
      buttonTextWithFile: 'Upload the Right File!!',
    });

    t.equal(
      component.find('label').map((label) => label.text())[1],
      'File Name',
      'Label is present when file is present'
    );

    t.equal(
      component.find(ButtonInterior).text(),
      'Upload the Right File!!',
      'Custom buttonTextWithFile is shown when file is present and buttonTextWithFile is present'
    );
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - setRef', (t) => {
  const setRefSpy = spy();
  try {
    mount(
      <FileInput name="test_file_input" label="File Name" setRef={setRefSpy} />
    );
    t.equal(setRefSpy.args.length, 1);
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - isValid', (t) => {
  const isValidSpy = spy();
  try {
    mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        isValid={isValidSpy}
      />
    );
    t.equal(isValidSpy.args.length, 1);
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - drag/drop handlers', (t) => {
  const fakeEvent = {preventDefault: spy()};
  const onChangeSpy = spy();
  try {
    const component = mount(
      <FileInput
        name="test_file_input"
        label="File Name"
        onChange={onChangeSpy}
      />
    );

    t.false(component.state('isDraggingOver'));

    component.instance().onDragOver(fakeEvent);

    t.true(component.state('isDraggingOver'));

    component.instance().onDragLeave(fakeEvent);

    t.false(component.state('isDraggingOver'));

    component.instance().onDragOver(fakeEvent);
    component.instance().onDrop({...fakeEvent, dataTransfer: {files: []}});

    t.false(component.state('isDraggingOver'));
    t.equal(onChangeSpy.args.length, 0);

    const mock = {current: {files: []}};
    component.instance().inputElement = mock;
    component
      .instance()
      .onDrop({...fakeEvent, dataTransfer: {files: [{name: 'a-file.txt'}]}});

    t.deepEqual(onChangeSpy.args[0], ['test_file_input', {name: 'a-file.txt'}]);
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});

test('FileInput - focus/blur handlers', (t) => {
  try {
    const component = mount(
      <FileInput name="test_file_input" label="File Name" />
    );
    t.false(component.state('isFocused'));
    component.instance().onFocus();
    t.true(component.state('isFocused'));
    component.instance().onBlur();
    t.false(component.state('isFocused'));
  } catch (err) {
    t.fail(err);
  } finally {
    t.end();
  }
});
