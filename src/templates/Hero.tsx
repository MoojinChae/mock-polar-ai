import Link from 'next/link';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { HeroTitle } from '../hero/HeroTitle';
import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { CodeSnippet } from './CodeSnippet';
import { ContactUs } from '../layout/ContactUs';
import { CategorySelectionTab } from '@/tab/CategorySelectionTab';
import { red, blue, orange, green } from '@mui/material/colors';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import { CardOverflow, AspectRatio } from '@mui/joy';
import { GetSnippets } from '@/data/snipppets';

type Categories = {
  name: string;
}

const outputFormats : Array<Categories> = [
  {name:"Json (Zendesk)"},
  {name:"Json (Intercom)"},
  {name:"Email"},
  {name:"Messenger"},
]

const industries : Array<Categories> = [
  {name:"E-Commerce"},
  {name:"Travel Agent"},
  {name:"Financial Service"},
  {name:"SaaS Tool"},
]

const languages : Array<Categories> = [
  {name:"English"},
  {name:"Chinese"},
  {name:"Spanish"},
  {name:"Korean"},
]

const timeWindows : Array<Categories> = [
  {name:"1 Day"},
  {name:"1 Week"},
  {name:"1 Month"},
]

const Hero = () => {
  const [outputFormat, setOutputFormat] = React.useState(0);
  const [industry, setIndustry] = React.useState(0);
  const [language, setLanguage] = React.useState(0);
  const [timeWindow, setTimeWindow] = React.useState(0);

  const router = useRouter();

  return (
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <Link href="/"><Logo xl /></Link>
            </div>
          </div>
        </Section>

        <Section yPadding="pt-20">
          <HeroTitle
            title={
              <>
                {'Effortlessly Get Internal Company Data with\n'}
                <span className="text-primary-500">MockPolar AI</span>
              </>
            }
            description="The data is generated by GenAI."
          />
        </Section>
        <Section>
          <div className="text-center">
            <div className="text-xl mb-3 text-gray-900">You want to build a B2B application MVP. How can you get internal company data?</div>
            <Grid container spacing={1}>
              <Grid item xs={4} md={4}>
                <Card variant="outlined" sx={{ height: '100%' }} color="neutral" invertedColors>
                  <CardContent>
                    <Typography level="title-lg">Option 1</Typography>
                    <Typography level="title-md">Contact companies and ask them to provide data</Typography>
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
                    <Typography>It will never work unless you were a VP at a famous company before!</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} md={4}>
                <Card variant="outlined" sx={{ height: '100%' }} color="neutral" invertedColors>
                  <CardContent>
                    <Typography level="title-lg">Option 2</Typography>
                    <Typography level="title-md">Create a few fake accounts and engage in pretend play</Typography>
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
                    <Typography>It's waste of time. Founders have to focus on critical tasks!</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} md={4}>
                <Card variant="soft" sx={{ height: '100%' }} color="primary" invertedColors>
                  <CardContent>
                    <Typography level="title-lg">Option 3</Typography>
                    <Typography level="title-md">Work with MockPolar AI with just a few clicks</Typography>
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
                    <Typography>We will provide high quality and worry-free data!</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <div className="mt-20 text-xl text-gray-900">Here is the customer service data from a travel agent as an example.</div>
            <div className="mb-4 text-md text-gray-900">Note: This is just a snippet. The actual output could be large.</div>
            <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
              <Grid container spacing={1}>
                <Grid item xs={3} md={2}>
                  <div className='text-sm flex h-full justify-end items-center pr-2'>Output Format</div>
                </Grid>
                <Grid item xs={9} md={10}>
                  <CategorySelectionTab categories={outputFormats} selectedCategory={outputFormat} setCategory={setOutputFormat} color={red[600]}/>
                </Grid>
              </Grid>
            </div>
            <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
              <Grid container spacing={1}>
                <Grid item xs={3} md={2}>
                  <div className='text-sm flex h-full justify-end items-center pr-2'>Industry</div>
                </Grid>
                <Grid item xs={9} md={10}>
                  <CategorySelectionTab categories={industries} selectedCategory={industry} setCategory={setIndustry} color={orange[600]}/>
                </Grid>
              </Grid>
            </div>
            <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
              <Grid container spacing={1}>
                <Grid item xs={3} md={2}>
                  <div className='text-sm flex h-full justify-end items-center pr-2'>Language</div>
                </Grid>
                <Grid item xs={9} md={10}>
                  <CategorySelectionTab categories={languages} selectedCategory={language} setCategory={setLanguage} color={green[600]}/>
                </Grid>
              </Grid>
            </div>
            <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
              <Grid container spacing={1}>
                <Grid item xs={3} md={2}>
                  <div className='text-sm flex h-full justify-end items-center pr-2'>Time Window</div>
                </Grid>
                <Grid item xs={9} md={10}>
                  <CategorySelectionTab categories={timeWindows} selectedCategory={timeWindow} setCategory={setTimeWindow} color={blue[600]}/>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <CodeSnippet code={GetSnippets(outputFormat, language, timeWindow, industry)}/>
          </div>
          <div className="text-center">
            <ContactUs />
          </div>
        </Section>
      </Background>
    )
}


export { Hero };
