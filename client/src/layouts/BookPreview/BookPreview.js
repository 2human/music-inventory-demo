import React from 'react';
import { Center } from '../../components/abstract/Center';
import { HeadingPrimary } from '../../components/abstract/HeadingPrimary';
import { Paragraph } from '../../components/abstract/Paragraph';

export const BookPreview = () => (
  <div id="bookPreview" className="book-preview">
    <BookPreview__BookImage className="u-margin-bottom-small" />
    <HeadingPrimary fontWeight="bold">
      AMERICAN HARMONY
    </HeadingPrimary>
    <Center>
      <Paragraph>
        INSPIRED CHORAL MINIATURES FROM NEW ENGLAND, APPALACHIA, THE
        MID-ATLANTIC, THE SOUTH AND THE MIDWEST
      </Paragraph>
    </Center>
    <Center>
      <Paragraph textSize={'small'} styles={{ marginTop: '-1.5rem' }}>
        <i>Compiled, Edited & Introduced by Nym Cooke</i>
      </Paragraph>
    </Center>
    <Paragraph textSize={'small'} styles={{ textAlign: 'justify' }}>
      This book is a thorough and unprecedented collection of the
      music that was composed for and performed by choral groups since
      1770. The two volumes, presented in a slipcase with a CD,
      comprise 176 tunes and anthems in three- and four-voice
      settings, printed with shaped note-heads, complete with multiple
      stanzas of text. Community choruses, choirs, shape-note singing
      groups, professional vocal ensembles, and amateur performers
      will discover a trove of strong, tuneful and exciting music,
      much of it never before accessible to the general public. Edited
      by scholar and practitioner Nym Cooke from original sources,
      this anthology also contains commentary on the music itself,
      suggestions for performance, six separate indices, composer
      biographies, and 100 rarely-seen illustrations.
    </Paragraph>
    <Center>
      <Paragraph textSize={'small'}>Two softcover volumes</Paragraph>
    </Center>
    <Center>
      <Paragraph textSize={'small'}>
        Printed on acid-free paper & sewn in signatures
      </Paragraph>
    </Center>
    <Center>
      <Paragraph textSize={'small'}>
        Contained in a slipcase with a compact disc containing 35
        songs
      </Paragraph>
    </Center>
    <Center>
      <Paragraph textSize={'small'}>
        Landscape format with 100 half-tone illustrations
      </Paragraph>
    </Center>
    <Center>
      <Paragraph textSize={'small'}>
        439 pages - 12 x 9.5 inches
      </Paragraph>
    </Center>
  </div>
);

const BookPreview__BookImage = ({ className }) => (
  <Center>
    <img
      src={require('../../assets/images/book/book-three-md.jpg')}
      className={`book-preview__book-image ${className}`}
    />
  </Center>
);
