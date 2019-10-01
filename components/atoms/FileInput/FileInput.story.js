import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {text, boolean} from '@storybook/addon-knobs';
import FileInputReadme from './FileInput.md';
import FileInput from './FileInput';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/FileInput', module);

const store = new Store({
  errorVal: '',
});

stories
  .addDecorator(withReadme(FileInputReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({
  label,
  name,
  description,
  placeholder,
  buttonText,
  buttonTextWithFile,
  required,
  disableOptionalFlag,
  error,
  validationErrorMsg,
  disabled,
  showRequiredError,
}) => ({
  name,
  label: text('label', label),
  description: text('description', description),
  placeholder: text('placeholder', placeholder),
  buttonText: text('buttonText', buttonText),
  buttonTextWithFile: text('buttonTextWithFile', buttonTextWithFile),
  required: boolean('required', required),
  disableOptionalFlag: boolean('disableOptionalFlag', disableOptionalFlag),
  error: boolean('error', error),
  validationErrorMsg: text('validationErrorMsg', validationErrorMsg),
  disabled: boolean('disabled', disabled),
  onChange: (nm, file) => alert(`onChange('${nm}', ${file.name})`), // eslint-disable-line no-alert
  showRequiredError: boolean('showRequiredError', showRequiredError),
});

const storyStyles = {
  height: '100%',
  maxWidth: '100%',
  width: '80rem',
  paddingTop: '3rem',
};

stories.add('default', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <FileInput
        {...defaultProps({
          name: 'fileInput',
          label: 'File Name',
          description: 'Upload that awesome file!',
          placeholder: 'Drag and Drop, or Click',
        })}
      />
    </div>
  </div>
));
