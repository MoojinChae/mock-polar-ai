import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <div className="mt-4 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
