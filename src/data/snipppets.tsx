import {
  industries,
  languages,
  outputFormats,
  timeWindows,
} from './selections';

const GetSnippets = async (
  outputFormat: number,
  industry: number,
  language: number,
  timeWindow: number,
): Promise<any> => {
  // console.log('Selected Output Format:', outputFormat);
  // console.log('Selected Industry:', industry);
  // console.log('Selected Language:', language);
  // console.log('Selected Time Window:', timeWindow);

  if (
    outputFormat < 0 ||
    outputFormat >= outputFormats.length ||
    industry < 0 ||
    industry >= industries.length ||
    language < 0 ||
    language >= languages.length ||
    timeWindow < 0 ||
    timeWindow >= timeWindows.length
  ) {
    return {
      // FIXME: just return default message for now.
      Try: 'Click Generate Data button to get mock data example',
    };
  }

  const fileName = `${outputFormat}_${industry}_${language}_${timeWindow}.json`;
  const url = `./snippets/${fileName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading or parsing file:', error);

    return {
      // FIXME: just return default message for now.
      Try: 'Click Generate Data button to get mock data example',
    };
  }
};

export { GetSnippets };
