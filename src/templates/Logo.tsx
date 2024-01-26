import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  const router = useRouter();

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src={`${router.basePath}/assets/images/mock-polar.png`}
        className="pr-2"
        width={size}
        height={size}
        alt="Mock Polar Logo"
        loading="lazy"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
