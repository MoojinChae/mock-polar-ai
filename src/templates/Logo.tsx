import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#000" stroke-width="1"/>
        <circle cx="8" cy="10" r="2" fill="#03A9F4"/>
        <circle cx="16" cy="10" r="2" fill="#03A9F4"/>
        <ellipse cx="12" cy="15" rx="4" ry="3" fill="#03A9F4"/>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
