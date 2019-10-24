import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import FileInput from './FileInput';
import FileInputReadme from './FileInput.mdx';

const stories = storiesOf('Atoms/FileInput', module);

stories.addParameters({
  docs: {
    page: FileInputReadme,
  },
});

const store = new Store({
  errorVal: '',
});

stories.addDecorator(StateDecorator(store));

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
