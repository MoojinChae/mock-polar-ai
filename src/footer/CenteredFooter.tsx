import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { ContactUsModal } from '../modal/ContactUsModal';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <div className="mt-4 text-lg">
      <ContactUsModal />
    </div>

    <div className="mt-4 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
