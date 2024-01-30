export type Categories = {
  name: string;
};

export const outputFormats: Array<Categories> = [
  { name: 'Json (Zendesk)' },
  { name: 'Json (Intercom)' },
  { name: 'Email' },
  //{ name: 'Messenger' }, // TODO: add back with the full data snippet.
];

export const industries: Array<Categories> = [
  { name: 'E-Commerce' },
  { name: 'Travel Agent' },
  { name: 'Financial Service' },
  { name: 'SaaS Tool' },
];

export const languages: Array<Categories> = [
  { name: 'English' },
  { name: 'Chinese' },
  { name: 'Spanish' },
  { name: 'Korean' },
];

export const timeWindows: Array<Categories> = [
  { name: '1 Day' },
  { name: '1 Week' },
];
