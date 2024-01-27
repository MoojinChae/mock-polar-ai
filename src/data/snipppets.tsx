const GetSnippets = (
  outputFormat: number,
  industry: number,
  language: number,
  timeWindow: number,
) => {
  if (outputFormat === 0) {
    const snippet: any = [
      {
        subject: 'Booking Confirmation Error',
        description:
          'I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.',
        recipient: 'contactus@mockpolar.ai',
        assignee_id: language,
        created_at: '2024-01-02T10:53:19Z',
        custom_status_id: 123,
        due_at: null,
        external_id: 'abc123456',
        group_id: 53132,
        id: timeWindow,
        organization_id: industry,
        priority: 'high',
        requester_id: 1356,
        satisfaction_rating: {
          comment: 'Really satisfied with response.',
          id: 15,
          score: 'good',
        },
        status: 'open',
        submitter_id: 1233,
        tags: ['enterprise'],
        type: 'incident',
        updated_at: '2024-01-05T15:02:13Z',
        url: 'https://mockpoloar.zendesk.com/api/v2/tickets/1.json',
        via: {
          channel: 'app',
        },
      },
      {
        subject: '........',
      },
    ];
    return snippet;
  }
  if (outputFormat === 1) {
    const snippet: any = [
      {
        id: 1,
        created_at: 1671234580,
        type: 'other',
        subject: 'Booking Confirmation Error',
        description:
          'I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.',
        status: 'open',
        requester_id: 23412342,
      },
      {
        id: 2,
        created_at: 1675321280,
        type: 'account',
        subject: '........',
      },
    ];
    return snippet;
  }
  if (outputFormat === 2) {
    const snippet: any = [
      {
        headers: {
          'Return-Path': 'johnsmith@example.com',
          Date: 'Mon, 1 Jan 2024 17:00:01 +0000',
          From: 'John Smith <johnsmith@example.com>',
          To: 'MockPolar Travel Company<contactus@mockpolar.ai>',
          'Message-ID': '<4F145791.8040802@example.com>',
          Subject: 'Booking Confirmation Error',
          'Mime-Version': '1.0',
          'Content-Type':
            'multipart/alternative; boundary=------------090409040602000601080801',
          'Delivered-To': 'contactus@mockpolar.ai',
          'User-Agent': 'Postbox 3.0.2 (Macintosh/20111203)',
        },
        envelope: {
          to: 'contactus@mockpolar.ai',
          from: 'johnsmith@example.com',
          helo_domain: 'localhost',
          remote_ip: '127.0.0.1',
          recipients: ['ontactus@mockpolar.ai'],
          spf: {
            result: 'pass',
            domain: 'example.com',
          },
          tls: true,
        },
        plain:
          'I am extremely disappointed with the service provided by your travel agency. I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.',
        reply_plain: '',
        attachments: [
          {
            content: 'dGVzdGZpbGU=',
            file_name: 'screenshot.png',
            content_type: 'image/png',
            disposition: 'attachment',
          },
        ],
      },
    ];
    return snippet;
  }
  if (outputFormat === 3) {
    const snippet: any = [
      {
        participants: [
          {
            name: 'John Smith',
          },
          {
            name: 'MockPolar Customer Service',
          },
        ],
        messages: [
          {
            sender_name: 'MockPolar Customer Service',
            timestamp_ms: 1579137103044,
            content: 'Thank you for contacting us. How may I assist you today?',
            type: 'Generic',
          },
          {
            sender_name: 'John Smith',
            timestamp_ms: 1579137078312,
            content: 'I have booking confirmation error',
            type: 'Generic',
          },
          {
            sender_name: 'MockPolar Customer Service',
            timestamp_ms: 1579136858575,
            content:
              'I apologize for the inconvenience. Can you please provide me with the details of your booking?',
            type: 'Generic',
          },
          {
            sender_name: 'John Smith',
            timestamp_ms: 1579136847743,
            content:
              'I am extremely disappointed with the service provided by your travel agency',
            type: 'Generic',
          },
          {
            sender_name: 'John Smith',
            timestamp_ms: 1579136839127,
            content:
              'I booked a flight to Paris for my family, but when we arrived at the airport, we were told that our reservation had been canceled. This ruined our entire vacation and caused a lot of stress. I demand immediate action to rectify this situation.',
            type: 'Generic',
          },
          {
            sender_name: 'MockPolar Customer Service',
            timestamp_ms: 1579136837474,
            content:
              "I'm sorry, but it seems that there is an issue with our booking system. I will create a ticket for further investigation.",
            type: 'Generic',
          },
          {
            sender_name: 'John Smith',
            timestamp_ms: 1579136836700,
            content: 'Thank you.',
            type: 'Generic',
          },
          {
            sender_name: 'MockPolar Customer Service',
            timestamp_ms: 1579136824886,
            content:
              'We will get back to you within 1 business day. Is there anything else we can help?',
            type: 'Generic',
          },
        ],
        title: 'MockPolar Customer Service',
        is_still_participant: true,
        thread_type: 'Regular',
        thread_path: 'inbox/MockPolarCustomerService_u3hhb2HmZg',
      },
    ];
    return snippet;
  }
  const snippet: any = {
    action: 'Click Generate Data button to see mock data example',
  };
  return snippet;
};

export { GetSnippets };
