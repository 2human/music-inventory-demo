import React from 'react';
import { Center } from '../abstract/Center';

export const FileCard = ({
  image,
  title,
  alt,
  caption,
  filePath,
  className,
}) => (
  <div className={`file-card ${className}`}>
    <FileCard__Image
      image={image}
      alt={alt}
      filePath={filePath}
      title={title}
    />
    <FileCard__Title title={title} />
    {caption && <FileCard__Caption>{caption}</FileCard__Caption>}
    <FileCard__DownloadLink filePath={filePath} title={title} />
  </div>
);

const FileCard__Image = ({ image, alt, filePath, title }) => (
  <a href={filePath} download={`${title}.pdf`}>
    <img className="file-card__image" src={image} alt={alt} />
  </a>
);

const FileCard__Title = ({ title }) => (
  <span className="file-card__title">
    <Center>{title}</Center>
  </span>
);

const FileCard__Caption = ({ children }) => (
  <div className="file-card__caption">{children}</div>
);

const FileCard__DownloadLink = ({ filePath, title }) => (
  <Center>
    <a
      href={filePath}
      className="btn file-card__download-link u-margin-bottom-tiny"
      download={`${title}.pdf`}>
      Download PDF
    </a>
  </Center>
);

FileCard.defaultProps = {
  image: null,
  filePath: null,
  caption: '',
  title: '',
  alt: 'Photo',
  className: '',
};
