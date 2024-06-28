import React from 'react';
import { Files } from '../../pages/Files';
import {
  createContainer,
  withEvent,
} from '../test-utils/domManipulators';

describe('Files', () => {
  let render, element, elements, change;

  beforeEach(() => {
    ({ render, element, elements, change } = createContainer());
  });

  const captionWithText = (captions, text) =>
    captions.find((cardCaption) =>
      cardCaption.textContent.includes(text)
    );

  const titleWithText = (titles, text) =>
    captions.find((cardCaption) =>
      cardCaption.textContent.includes(text)
    );

  const files = [
    {
      image: 'file1image',
      title: 'file1title',
      filePath: 'file1path',
      alt: 'file1alt',
      caption: 'file1caption',
    },
    {
      image: 'file2image',
      title: 'file2title',
      filePath: 'file2path',
      alt: 'file2alt',
      caption: 'file2caption',
    },
  ];

  it('renders the .files element', () => {
    render(<Files />);
    expect(element('.files')).not.toBeNull();
  });

  it('displays a file card for each file', () => {
    render(<Files files={files} />);
    expect(elements('.file-card').length).toEqual(files.length);
  });

  it('renders each .file-card with the right image', () => {
    render(<Files files={files} />);
    expect(elements('.file-card img')[0].src).toContain(
      files[0].image
    );
    expect(elements('.file-card img')[1].src).toContain(
      files[1].image
    );
  });

  it('renders each .file-card with the right file', () => {
    render(<Files files={files} />);
    expect(elements('.file-card a.btn')[0].href).toContain(
      files[0].filePath
    );
    expect(elements('.file-card a.btn')[1].href).toContain(
      files[1].filePath
    );
  });

  it('renders the keyword text input with the right attributes', () => {
    render(<Files />);
    const searchInput = element('.files__search');
    expect(searchInput.getAttribute('name')).toEqual('search');
    expect(searchInput.getAttribute('placeholder')).toEqual('Search');
    expect(searchInput.getAttribute('maxLength')).toEqual('200');
    expect(searchInput.getAttribute('size')).toEqual('60');
  });

  it('does not show files that do not contain the input text in the caption or title', () => {
    render(<Files files={files} />);

    const searchText = files[0].caption;
    change(
      element('.files__search'),
      withEvent('search', searchText)
    );

    expect(
      captionWithText(
        elements('.file-card__caption'),
        files[1].caption
      )
    ).not.toBeDefined();
  });

  it('does show files that contain the input text in the caption', () => {
    render(<Files files={files} />);

    const searchText = files[0].caption;
    change(
      element('.files__search'),
      withEvent('search', searchText)
    );

    expect(
      captionWithText(elements('.file-card__caption'), searchText)
    ).toBeDefined();
  });

  it('does show files that contain the input text in the caption', () => {
    render(<Files files={files} />);

    const searchText = files[0].title;
    change(
      element('.files__search'),
      withEvent('search', searchText)
    );

    expect(
      captionWithText(elements('.file-card__title'), searchText)
    ).toBeDefined();
  });
});
