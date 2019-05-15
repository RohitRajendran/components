import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text, object} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import QuestionCard from './QuestionCard';
import RadioButtons from '~components/molecules/RadioButtons/RadioButtons';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import ExpandCollapse from '~components/atoms/ExpandCollapse/ExpandCollapse';
import OptionBox from '~components/atoms/OptionBox/OptionBox';
import QuestionCardReadme from './QuestionCard.md';
import Input from '~components/atoms/Input/Input';

const stories = storiesOf('Simple Organisms/QuestionCard', module);

const store = new Store({
  yesNo: '',
  input: '',
  disabled: false,
});

stories
  .addDecorator(withReadme(QuestionCardReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (
  isCollapsed = false,
  clearFuture = false,
  isLatestCard = false
) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text(
    'description',
    'This is where the optional description goes.'
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hasMadeChanges: boolean('hasMadeChanges', true),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  moreDetails: object('moreDetails', {
    label: 'Show more details',
    cabinetContent: (
      <div>
        <h1>Montezuma is the best</h1>
        <p>Hello this is the cabinet and yes, Montezuma is the best.</p>
      </div>
    ),
    header: 'Montezuma is the best cat',
  }),
  shortTitle: 'Question',
  summary: (
    <SimpleSummary
      shortTitle="Question"
      answers={['This is the answer']}
      editCard={() => true}
    />
  ),
  title: text('title', 'This is where the question goes.'),
  editCard: () => true,
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(false, false, true)}>
      <RadioButtons
        name="yesNo"
        required
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
            followup: (
              <div>
                <Input
                  required
                  name="input"
                  {...{
                    label: 'Date',
                    placeholder: 'MM/DD/YYYY',
                    mask: 'Date',
                    validationErrorMsg: 'Not a valid date range',
                    validateOnBlur: true,
                  }}
                  value={store.get('input')}
                  isValid={() => store.get('input').length === 10}
                />
              </div>
            ),
          },
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ]}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('active with expand/collapse', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(false)}>
      <ExpandCollapse
        label="Current Apartment/Rent"
        disabled={store.get('disabled')}
        aside={
          <div
            className="uic--d-flex"
            role="button"
            tabIndex="0"
            onKeyPress={() => store.set({disabled: !store.get('disabled')})}
            onClick={() => store.set({disabled: !store.get('disabled')})}
          >
            <div>Remove</div>
            <div
              style={{height: '16px', width: '16px', margin: '0 0 .3rem 1rem'}}
              className="uic--position-relative"
            >
              <OptionBox variant="check" checked={store.get('disabled')} />
            </div>
          </div>
        }
      >
        <RadioButtons
          name="yesNo"
          options={[
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
              followup: (
                <Input
                  name="input"
                  value={store.get('input')}
                  label="Date"
                  placeholder="MM/DD/YYYY"
                  validateOnBlur={true}
                  validationErrorMsg="Not a valid date range"
                  mask="Date"
                  required
                  onChange={(name, value) => store.set({[name]: value})}
                  isValid={() => store.get('input').length === 10}
                />
              ),
            },
            {
              label: "I don't know",
              value: 'idk',
              disabled: true,
            },
          ]}
          value={store.get('yesNo')}
          key="yesNo"
          required
        />
      </ExpandCollapse>
    </QuestionCard>
  </MemoryRouter>
));

stories.add('editing and clears future', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(false, true, false)}>
      <RadioButtons
        name="yesNo"
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ]}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(true, false, false)}>
      <RadioButtons
        name="yesNo"
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ]}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(true, false, true)}>
      <RadioButtons
        name="yesNo"
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ]}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));
