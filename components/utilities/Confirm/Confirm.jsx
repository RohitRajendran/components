import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '~components/atoms/Button/Button';
import Modal from '~components/molecules/Modal/Modal';
import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import './Confirm.scss';

const Confirm = ({name, title, description, okLabel, cancelLabel}) => {
  const wrapper = !isDocumentDefined()
    ? null
    : document.body.appendChild(document.createElement('div'));

  const promise = new Promise((resolve, reject) => {
    ReactDOM.render(
      <Modal name={name} toggle={reject} show className="uic--confirm-modal">
        <h2>{title}</h2>
        {description && <p className="uic--font-italic">{description}</p>}
        <div className="uic--modal-bottom">
          <Button variant="secondary" light onClick={resolve} data-cy="yes">
            {okLabel}
          </Button>
          <Button variant="secondary" light onClick={reject} data-cy="no">
            {cancelLabel}
          </Button>
        </div>
      </Modal>,
      wrapper,
    );
  });

  return promise
    .then((result) => {
      if (isDocumentDefined()) {
        setTimeout(() => document.body.removeChild(wrapper));
      }

      ReactDOM.unmountComponentAtNode(wrapper);
      return result;
    })
    .catch((result) => {
      if (isDocumentDefined()) {
        setTimeout(() => document.body.removeChild(wrapper));
      }

      ReactDOM.unmountComponentAtNode(wrapper);
      return Promise.reject(result);
    });
};

Confirm.propTypes = {
  /** Name of the modal */
  name: PropTypes.string.isRequired,
  /** Title of the dialog box */
  title: PropTypes.string.isRequired,
  /** Body of the text in the dialog box */
  description: PropTypes.string,
  /** Label for the confirm button */
  okLabel: PropTypes.string.isRequired,
  /** Label for the cancel button */
  cancelLabel: PropTypes.string.isRequired,
};

export default Confirm;
