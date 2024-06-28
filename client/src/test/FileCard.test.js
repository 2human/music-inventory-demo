import React from 'react';
import { FileCard } from '../components/FileCard/FileCard';
import { createContainer } from './test-utils/domManipulators';

describe('Files', () => {
  let render, element, elements;

  beforeEach(() => {
    ({ render, element, elements } = createContainer());
  });

  it('renders the .file-card element', () => {
    render(<FileCard />);
    expect(element('.file-card')).not.toBeNull();
  });

  it('applies the added className to the container', () => {
    const className = 'classname99';
    render(<FileCard className={className} />);
    expect(element('.file-card').classList).toContain(className);
  });

  it('uses the provided image path', () => {
    const imagePath = 'image/path';
    render(<FileCard image={imagePath} />);
    const image = element('.file-card__image');
    expect(image).not.toBeNull();
    expect(image.src).toContain(imagePath);
  });

  it('uses the provided image alt text', () => {
    const altText = 'alttext';
    render(<FileCard alt={altText} />);
    const image = element('.file-card__image');
    expect(image).not.toBeNull();
    expect(image.alt).toContain(altText);
  });

  it('displays the provided title', () => {
    const cardTitle = 'this is the title';
    render(<FileCard title={cardTitle} />);
    const title = element('.file-card__title');
    expect(title).not.toBeNull();
    expect(title.textContent).toEqual(cardTitle);
  });

  it('displays the provided caption', () => {
    const captionText = 'this is the caption';
    render(<FileCard caption={captionText} />);
    const caption = element('.file-card__caption');
    expect(caption).not.toBeNull();
    expect(caption.textContent).toContain(captionText);
  });

  describe('download link', () => {
    it('is displayed', () => {
      render(<FileCard />);
      const downloadLink = element('a.btn.file-card__download-link');
      expect(downloadLink).not.toBeNull();
    });

    it('points to the provided filePath', () => {
      const filePath = 'filepath';
      render(<FileCard filePath={filePath} />);
      const downloadLink = element('a.btn.file-card__download-link');
      expect(downloadLink.href).toContain(filePath);
    });

    it('uses the title as the file name and appends .pdf to it', () => {
      const title = 'title';
      render(<FileCard title={title} />);
      const downloadLink = element('a.btn.file-card__download-link');
      expect(downloadLink.download).toContain(`${title}.pdf`);
    });
  });
});
