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
import DropDown from '~components/atoms/DropDown/DropDown';

const stories = storiesOf('Simple Organisms/QuestionCard', module);

const store = new Store({
  yesNo: '',
  input: '',
  from: 'capitalOne',
  frequency: 'monthly',
  startDate: '05/31/2019',
  endDate: '07/20/202',
  disabled: false,
  interest: '100',
  catTax: '1337',
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

stories.add('active with simple form', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(false)}>
      <DropDown
        name="from"
        options={[
          {
            value: 'capitalOne',
            label: 'Capital One Checking ...7890 ($3,234.567.89)',
          },
          {
            value: 'chase',
            label: 'Chase Savings ...1127 ($999,999.00)',
          },
        ]}
        onChange={(name, value) => store.set({[name]: value})}
        value={store.get('from')}
        label="From"
        required={false}
      />
      <DropDown
        name="to"
        options={[
          {
            value: 'unitedIncome',
            label: 'United Income Brokerage ...5428 ($2,345,678.89)',
          },
          {
            value: 'montezuma',
            label: 'Bank of Montezuma ...1337 ($9,999,999.99)',
          },
        ]}
        value="montezuma"
        disabled={true}
        description="The acount to transfer the money to."
        label="To"
      />

      <div className="uic--row">
        <div className="uic--col-6">
          <Input
            name="interest"
            label="Additional Interest"
            mask="PercentageWithDecimal"
            onChange={(name, value) => store.set({[name]: value})}
            value={store.get('interest')}
            disabled={true}
          />
        </div>

        <div className="uic--col-6">
          <Input
            name="catTax"
            label="Cat Tax"
            mask="Currency"
            onChange={(name, value) => store.set({[name]: value})}
            value={store.get('catTax')}
            disabled={true}
          />
        </div>
      </div>

      <DropDown
        name="frequency"
        options={[
          {
            value: 'monthly',
            label: 'Monthly',
          },
          {
            value: 'yearly',
            label: 'Yearly',
          },
          {
            value: 'quarterly',
            label: 'Quarterly',
          },
        ]}
        onChange={(name, value) => store.set({[name]: value})}
        value={store.get('frequency')}
        label="Frequency"
        required={false}
      />

      <Input
        name="startDate"
        label="Start Date"
        mask="Date"
        value={store.get('startDate')}
        onChange={(name, value) => store.set({[name]: value})}
      />

      <Input
        name="endDate"
        label="End Date"
        mask="Date"
        value={store.get('endDate')}
        validationErrorMsg="Must follow the format mm/dd/yyyy."
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
