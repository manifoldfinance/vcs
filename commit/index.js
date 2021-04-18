/**
* @file commit types 
* @vcs 
* @version 0.0.0
*/

const types = [
      'patch',
      'chore',
      'contracts',
      'aux',
      'build',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
];

module.exports.rules = {
	'type-enum': [2, 'always', types],
};

module.exports.value = () => types;
/** @export types */
