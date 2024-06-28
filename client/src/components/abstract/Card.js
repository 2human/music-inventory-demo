import React from 'react';

export const Card = ({
  image,
  alt,
  caption,
  className,
  float,
  textSize,
  borderless,
  noPadding,
}) => (
  <div className={`card ${float ? `card--float-${float}` : ''}`}>
    <CardContainer>
      <CardContent className={className} borderless={borderless}>
        {image && <CardImage image={image} alt={alt} />}
        {caption && (
          <CardCaption
            textSize={textSize}
            caption={caption}
            noPadding={noPadding}
          />
        )}
      </CardContent>
    </CardContainer>
  </div>
);

const CardContainer = ({ children }) => (
  <div className="card__container">{children}</div>
);

const CardContent = ({ children, className, borderless }) => (
  <div
    className={`card__content ${className} ${
      borderless ? 'card__content--borderless' : ''
    }`}>
    {children}
  </div>
);

const CardImage = ({ image, alt }) => (
  <img className="card__image" src={image} alt={alt} />
);

const CardCaption = ({ caption, textSize, noPadding }) => (
  <p
    className={`card__caption ${
      textSize ? `card__caption--${textSize}` : ''
    }`}
    style={noPadding ? { padding: '0' } : {}}>
    {caption}
  </p>
);

Card.defaultProps = {
  image: null,
  alt: 'Photo',
  caption: null,
  className: '',
};
