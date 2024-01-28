/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import * as React from 'react';

import {
  industries,
  languages,
  outputFormats,
  timeWindows,
} from '@/data/selections';
import { GetSnippets } from '@/data/snipppets';

import { Background } from '../background/Background';
import { HeroTitle } from '../hero/HeroTitle';
import { ContactUs } from '../layout/ContactUs';
import { Section } from '../layout/Section';
import { CodeSnippet } from './CodeSnippet';
import { Logo } from './Logo';

const Hero = () => {
  const [outputFormat, setOutputFormat] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [timeWindow, setTimeWindow] = React.useState('');
  const [codeSnippet, setCodeSnippet] = React.useState({
    Try: 'Click Generate Data button to get mock data example',
  });

  const handleGenerateData = async () => {
    console.log('Selected Output Format:', outputFormat);
    console.log('Selected Industry:', industry);
    console.log('Selected Language:', language);
    console.log('Selected Time Window:', timeWindow);

    const outputFormatSelected = outputFormats.findIndex(
      (format) => format.name === outputFormat,
    );
    const industrySelected = industries.findIndex(
      (industryItem) => industryItem.name === industry,
    );
    const languageSelected = languages.findIndex(
      (languageItem) => languageItem.name === language,
    );
    const timeWindowSelected = timeWindows.findIndex(
      (timeWindowItem) => timeWindowItem.name === timeWindow,
    );

    const newSnippet = await GetSnippets(
      outputFormatSelected,
      industrySelected,
      languageSelected,
      timeWindowSelected,
    );
    setCodeSnippet(newSnippet);
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <Link href="/">
              <Logo xl />
            </Link>
          </div>
        </div>
      </Section>

      <Section yPadding="pt-20">
        <HeroTitle
          title={
            <>
              {'Empower Your Product With Realistic Data\n'}
              <span className="text-primary-500">MockPolar AI</span>
            </>
          }
          description="MockPolar AI generates internal business data powered by Gen AI."
        />
      </Section>
      <Section yPadding="py-3">
        <div className="text-center">
          <div className="mt-20 text-xl text-gray-900">
            Here is the customer service data as an example.
          </div>
          <div className="text-md mb-4 text-gray-900">
            Note: This is just a snippet. The actual output could be large.
          </div>
          <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
            <Grid
              container
              spacing={2}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {' '}
              {/* Grid container */}
              {/* Output Format Dropdown */}
              <Grid item>
                <FormControl style={{ width: '200px' }}>
                  <InputLabel id="output-format-label">
                    Output Format
                  </InputLabel>
                  <Select
                    labelId="output-format-label"
                    id="output-format-select"
                    value={outputFormat}
                    label="Output Format"
                    onChange={(e) => setOutputFormat(e.target.value)}
                    style={{ color: red[600] }}
                  >
                    {outputFormats.map((format) => (
                      <MenuItem key={format.name} value={format.name}>
                        {format.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Industry Dropdown */}
              <Grid item>
                <FormControl style={{ width: '200px' }}>
                  <InputLabel id="industry-label">Industry</InputLabel>
                  <Select
                    labelId="industry-label"
                    id="industry-select"
                    value={industry}
                    label="Industry"
                    onChange={(e) => setIndustry(e.target.value)}
                    style={{ color: orange[600] }}
                  >
                    {industries.map((item) => (
                      <MenuItem key={item.name} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Language Dropdown */}
              <Grid item>
                <FormControl style={{ width: '200px' }}>
                  <InputLabel id="language-label">Language</InputLabel>
                  <Select
                    labelId="language-label"
                    id="language-select"
                    value={language}
                    label="Language"
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ color: green[600] }}
                  >
                    {languages.map((item) => (
                      <MenuItem key={item.name} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Time Window Dropdown */}
              <Grid item>
                <FormControl style={{ width: '200px' }}>
                  <InputLabel id="time-window-label">Time Window</InputLabel>
                  <Select
                    labelId="time-window-label"
                    id="time-window-select"
                    value={timeWindow}
                    label="Time Window"
                    onChange={(e) => setTimeWindow(e.target.value)}
                    style={{ color: blue[600] }}
                  >
                    {timeWindows.map((window) => (
                      <MenuItem key={window.name} value={window.name}>
                        {window.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* Generate Data Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleGenerateData}
                  style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: 'lightblue',
                    color: 'black', // Set text color to white for contrast
                    border: '2px solid black',
                    borderRadius: '4px',
                  }}
                >
                  Generate Data
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="my-12">
          <CodeSnippet code={codeSnippet} />
        </div>
        <div className="text-center">
          <ContactUs />
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
