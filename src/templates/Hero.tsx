/* eslint-disable react/no-unescaped-entities */
import { AspectRatio, CardOverflow } from '@mui/joy';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
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
import { useRouter } from 'next/router';
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

  const router = useRouter();

  const handleGenerateData = () => {
    // console.log('Selected Output Format:', outputFormat);
    // console.log('Selected Industry:', industry);
    // console.log('Selected Language:', language);
    // console.log('Selected Time Window:', timeWindow);

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

    const newSnippet = GetSnippets(
      outputFormatSelected,
      languageSelected,
      timeWindowSelected,
      industrySelected,
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
      <Section>
        <div className="text-center">
          <div className="mb-3 text-xl text-gray-900">
            You want to build a B2B application MVP. How can you get internal
            company data?
          </div>
          <Grid container spacing={1}>
            <Grid item xs={4} md={4}>
              <Card
                variant="outlined"
                sx={{ height: '100%' }}
                color="neutral"
                invertedColors
              >
                <CardContent>
                  <Typography level="title-lg">Option 1</Typography>
                  <Typography level="title-md">
                    Contact companies and ask them to provide data
                  </Typography>
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src={`${router.basePath}/assets/images/option1.png`}
                        srcSet={`${router.basePath}/assets/images/option1.png`}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography>
                    It will never work unless you were a VP at a famous company
                    before!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card
                variant="outlined"
                sx={{ height: '100%' }}
                color="neutral"
                invertedColors
              >
                <CardContent>
                  <Typography level="title-lg">Option 2</Typography>
                  <Typography level="title-md">
                    Create a few fake accounts and engage in pretend play
                  </Typography>
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src={`${router.basePath}/assets/images/option2.png`}
                        srcSet={`${router.basePath}/assets/images/option2.png`}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography>
                    It's waste of time. Founders have to focus on critical
                    tasks!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card
                variant="soft"
                sx={{ height: '100%' }}
                color="primary"
                invertedColors
              >
                <CardContent>
                  <Typography level="title-lg">Option 3</Typography>
                  <Typography level="title-md">
                    Work with MockPolar AI with just a few clicks
                  </Typography>
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src={`${router.basePath}/assets/images/mock-polar.png`}
                        srcSet={`${router.basePath}/assets/images/mock-polar.png`}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography>
                    We will provide high quality and worry-free data!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <div className="mt-20 text-xl text-gray-900">
            Here is the customer service data from a travel agent as an example.
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
        <div className="my-4">
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
