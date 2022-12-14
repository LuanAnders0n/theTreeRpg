import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface BannerProps {
  img: any;
  shadow?: boolean;
  toLink?: string;
  buttonText?: string;
  header?: string;
  principalText: string;
  footer?: string;
}

const Banner = (props: BannerProps) => {
  const { img, toLink, buttonText, header, principalText, footer, shadow } =
    props;

  return (
    <Container>
      <div className="left-text">
        {header && <h3>{header}</h3>}
        <h1>{principalText}</h1>
        {footer && <p>{footer}</p>}
        {toLink && (
          <Link className="button" to={toLink}>
            {buttonText}
          </Link>
        )}
      </div>
      {shadow && <div className="shadow" />}
      <img src={img} alt="banner" />
    </Container>
  );
};

export default Banner;
