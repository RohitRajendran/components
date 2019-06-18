import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import ContentSection from './ContentSection';
import ContentSectionReadMe from './ContentSection.md';
import QuestionCard from '../../organisms-simple/QuestionCard/QuestionCard';
import Checkboxes from '../../molecules/Checkboxes/Checkboxes';

const stories = storiesOf('Atoms/ContentSection', module);

stories.addDecorator(withReadme(ContentSectionReadMe));

const defaultProps = () => ({
  heading: 'Current Apartment/Rent',
});

stories.add('default', () => (
  <ContentSection {...defaultProps()}>
    <Checkboxes
      formName="yesNo"
      options={[
        {
          label: <span className="uic--mcg-subhead-2-text">Yes</span>,
          value: 'yes',
        },
        {
          label: <span className="uic--mcg-subhead-2-text">No</span>,
          value: 'no',
        },
        {
          label: <span className="uic--mcg-subhead-2-text">I do not know</span>,
          value: 'idk',
          disabled: true,
        },
      ]}
      onChange={() => true}
    />
  </ContentSection>
));

stories.add('default in QuestionCard', () => (
  <QuestionCard
    title="Which of the following categories would you like to include in your Essentials?"
    shortTitle="Categories"
    onSubmit={() => true}
  >
    <ContentSection {...defaultProps()}>
      <Checkboxes
        formName="yesNo"
        options={[
          {
            label: <span className="uic--mcg-subhead-2-text">Yes</span>,
            value: 'yes',
          },
          {
            label: <span className="uic--mcg-subhead-2-text">No</span>,
            value: 'no',
          },
          {
            label: (
              <span className="uic--mcg-subhead-2-text">I do not know</span>
            ),
            value: 'idk',
            disabled: true,
          },
        ]}
        onChange={() => true}
      />
    </ContentSection>
    <ContentSection {...defaultProps()}>
      <Checkboxes
        formName="yesNo"
        options={[
          {
            label: <span className="uic--mcg-subhead-2-text">Yes</span>,
            value: 'yes',
          },
          {
            label: <span className="uic--mcg-subhead-2-text">No</span>,
            value: 'no',
          },
          {
            label: (
              <span className="uic--mcg-subhead-2-text">I do not know</span>
            ),
            value: 'idk',
            disabled: true,
          },
        ]}
        onChange={() => true}
      />
    </ContentSection>
    <ContentSection {...defaultProps()}>
      <Checkboxes
        formName="yesNo"
        options={[
          {
            label: <span className="uic--mcg-subhead-2-text">Yes</span>,
            value: 'yes',
          },
          {
            label: <span className="uic--mcg-subhead-2-text">No</span>,
            value: 'no',
          },
          {
            label: (
              <span className="uic--mcg-subhead-2-text">I do not know</span>
            ),
            value: 'idk',
            disabled: true,
          },
        ]}
        onChange={() => true}
      />
    </ContentSection>
  </QuestionCard>
));

// Add more stories: https://stackoverflow.com/c/unitedincome/questions/140
