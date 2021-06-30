import { getOptions } from 'loader-utils';
import { validate } from 'schema-utils';
import { compileFileClient } from 'rosaenlg';

import schema from './options.json';

export default function loader() {
  const { version, webpack, resourcePath } = this;

  const options = getOptions(this) || {};

  validate(schema, options, { name: 'loader', baseDataPath: 'options' });

  const languages = Array.isArray(options.language) ? options.language : [options.language]
  const compileOptions = options.compileOptions || {};

  const templateSources = languages.map((language) => {
    const source = compileFileClient(resourcePath, Object.assign({
      language,
      embedResources: true,
      compileDebug: false
    }, compileOptions));

    return {
      language,
      source
    }
  });

  const newSource = `
  /**
   * Loader API Version: ${version}
   * Is this in "webpack mode": ${webpack}
   */
  ${templateSources.map(({ language, source }) => `
    function ${language}() {
      ${source};
      return template;
    }
  `).join('\n')}
  export default {
    ${templateSources.map(({ language }) => `${language}: ${language}()`).join(',')}
  };
  `;

  return newSource;
}
