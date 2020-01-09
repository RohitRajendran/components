module.exports = {
  prompt: async ({prompter}) => {
    const {name} = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: "What's the name of this flow?",
    });

    const {path} = await prompter.prompt({
      type: 'input',
      name: 'path',
      message:
        'Where do you want to create the related files? (Ex. "example/flows)',
    });

    return {path, name};
  },
};
