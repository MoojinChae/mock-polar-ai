import type { ReactNode } from 'react';

type IHeroTitleProps = {
  title: ReactNode;
  description: string;
};

const HeroTitle = (props: IHeroTitleProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="text-xl">{props.description}</div>
  </header>
);

export { HeroTitle };
