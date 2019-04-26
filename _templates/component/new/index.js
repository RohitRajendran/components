module.exports = {
  prompt: async ({prompter}) => {
    const {name} = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: 'What is the name of this component?',
    });

    const {description} = await prompter.prompt({
      type: 'input',
      name: 'description',
      message: 'What is the description for this component?',
    });

    const {type} = await prompter.prompt({
      type: 'autocomplete',
      name: 'type',
      message: 'Which level of atomic design does this belong in?',
      choices: [
        'Atoms',
        'Atoms/Icons',
        'Atoms/Illustrations',
        'Molecules',
        'Simple Organisms',
        'Complex Organisms',
        'Templates',
        'Utilities',
      ],
    });

    const {isStateful} = await prompter.prompt({
      type: 'confirm',
      name: 'isStateful',
      message: 'Does it need to be stateful?',
    });

    let compPath;
    switch (type) {
      default:
      case 'Atoms':
        compPath = 'atoms';
        break;
      case 'Atoms/Icons':
        compPath = 'atoms/icons';
        break;
      case 'Atoms/Illustrations':
        compPath = 'atoms/illustrations';
        break;
      case 'Molecules':
        compPath = 'molecules';
        break;
      case 'Simple Organisms':
        compPath = 'organisms-simple';
        break;
      case 'Complex Organisms':
        compPath = 'organisms-complex';
        break;
      case 'Templates':
        compPath = 'templates';
        break;
      case 'Utilities':
        compPath = 'utilities';
        break;
    }

    return {
      compPath,
      description,
      isStateful,
      name,
      storyPath: type,
    };
  },
};
