import Link from 'next/link';
import * as React from 'react';
import Grid from '@mui/material/Grid';

import { Background } from '../background/Background';
import { HeroTitle } from '../hero/HeroTitle';
import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { CodeSnippet } from './CodeSnippet';
import { ContactUs } from '../layout/ContactUs';
import { CategorySelectionTab } from '@/tab/CategorySelectionTab';
import { blue } from '@mui/material/colors';

type Categories = {
  name: string;
}

const tools: Array<Categories> = [
  {name:"Zendesk"},
  {name:"Intercom"},
  {name:"Email"},
  {name:"Messenger"},
]

const Hero = () => {
  
  const [tool, setTool] = React.useState(0);

  const getCode = () => {
    if (tool == 0)
    {
      const code: any = [{
        "subject": "Booking Confirmation Error",
        "description": "I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.",
        "recipient": "contactus@mockpolar.ai",
        "assignee_id": 1,
        "created_at": "2024-01-02T10:53:19Z",
        "custom_status_id": 123,
        "due_at": null,
        "external_id": "abc123456",
        "group_id": 53132,
        "id": 1,
        "organization_id": 100,
        "priority": "high",
        "requester_id": 1356,
        "satisfaction_rating": {
          "comment": "Really satisfied with response.",
          "id": 15,
          "score": "good"
        },
        "status": "open",
        "submitter_id": 1233,
        "tags": ["enterprise"],
        "type": "incident",
        "updated_at": "2024-01-05T15:02:13Z",
        "url": "https://mockpoloar.zendesk.com/api/v2/tickets/1.json",
        "via": {
          "channel": "app"
        }
      }, {
        "subject": "........",
      }]
      return code
    }
    else if (tool == 1)
    {
      const code: any = [{
        "id": 1,
        "created_at": 1671234580,
        "type": "other",
        "subject": "Booking Confirmation Error",
        "description": "I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.",
        "status": "open",
        "requester_id": 23412342
      }, {
        "id": 2,
        "created_at": 1675321280,
        "type": "account",
        "subject": "........",
      }]
      return code
    }
    else if (tool == 2)
    {
      const code: any = [{
        "headers": {
          "Return-Path": "johnsmith@example.com",
          "Date": "Mon, 1 Jan 2024 17:00:01 +0000",
          "From": "John Smith <johnsmith@example.com>",
          "To": "MockPolar Travel Company<contactus@mockpolar.ai>",
          "Message-ID": "<4F145791.8040802@example.com>",
          "Subject": "Booking Confirmation Error",
          "Mime-Version": "1.0",
          "Content-Type": "multipart/alternative; boundary=------------090409040602000601080801",
          "Delivered-To": "contactus@mockpolar.ai",
          "User-Agent": "Postbox 3.0.2 (Macintosh/20111203)"
        },
        "envelope": {
          "to": "contactus@mockpolar.ai",
          "from": "johnsmith@example.com",
          "helo_domain": "localhost",
          "remote_ip": "127.0.0.1",
          "recipients": [
            "ontactus@mockpolar.ai"
          ],
          "spf": {
            "result": "pass",
            "domain": "example.com"
          },
          "tls": true,
        },
        "plain": "I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.",
        "reply_plain": "",
        "attachments": [
          {
            "content": "dGVzdGZpbGU=",
            "file_name": "screenshot.png",
            "content_type": "image/png",
            "disposition": "attachment"
          },
        ]
      }]
      return code
    }
    else if (tool == 3)
    {
      const code: any = [{
        "participants": [
          {
            "name": "John Smith"
          },
          {
            "name": "MockPolar Customer Service"
          }
        ],
        "messages": [
          {
            "sender_name": "MockPolar Customer Service",
            "timestamp_ms": 1579137103044,
            "content": "Thank you for contacting us. How may I assist you today?",
            "type": "Generic"
          },
          {
            "sender_name": "John Smith",
            "timestamp_ms": 1579137078312,
            "content": "I have booking confirmation error",
            "type": "Generic"
          },
          {
            "sender_name": "MockPolar Customer Service",
            "timestamp_ms": 1579136858575,
            "content": "I apologize for the inconvenience. Can you please provide me with the details of your booking?",
            "type": "Generic"
          },
          {
            "sender_name": "John Smith",
            "timestamp_ms": 1579136847743,
            "content": "I am extremely disappointed with the service provided by your travel agency",
            "type": "Generic"
          },
          {
            "sender_name": "John Smith",
            "timestamp_ms": 1579136839127,
            "content": "I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.",
            "type": "Generic"
          },
          {
            "sender_name": "MockPolar Customer Service",
            "timestamp_ms": 1579136837474,
            "content": "I'm sorry, but it seems that there is an issue with our booking system. I will create a ticket for further investigation.",
            "type": "Generic"
          },
          {
            "sender_name": "John Smith",
            "timestamp_ms": 1579136836700,
            "content": "Thank you.",
            "type": "Generic"
          },
          {
            "sender_name": "MockPolar Customer Service",
            "timestamp_ms": 1579136824886,
            "content": "We will get back to you within 1 business day. Is there anything else we can help?",
            "type": "Generic"
          }
        ],
        "title": "MockPolar Customer Service",
        "is_still_participant": true,
        "thread_type": "Regular",
        "thread_path": "inbox/MockPolarCustomerService_u3hhb2HmZg"
      }]
      return code
    }
    else
    {
      const code: any = {
        "output format": tools[tool]?.name,
      }
      return code
    }
  };

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
                {'Get your "hard-to-get" mock data with\n'}
                <span className="text-primary-500">MockPolar AI</span>
              </>
            }
            description="The data is generated by GenAI."
          />
        </Section>
        <Section>
          <div className="text-center">
            <div className="mb-4 text-xl">Here is the customer service data from travel agent as an example.</div>
            <div className="whitespace-pre-line text-4xl font-bold text-gray-900">
              <Grid container spacing={1}>
                <Grid item xs={3} md={2}>
                  <div className='text-sm flex h-full justify-end items-center pr-2'>Output Format</div>
                </Grid>
                <Grid item xs={9} md={10}>
                  <CategorySelectionTab categories={tools} selectedCategory={tool} setCategory={setTool} color={blue[600]}/>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <CodeSnippet code={getCode()}/>
          </div>
          <div className="text-center">
            <ContactUs />
          </div>
        </Section>
      </Background>
    )
}


export { Hero };
