import React from 'react';
import { HeadingSecondary } from '../../components/abstract/HeadingSecondary';
import { HeadingTertiary } from '../../components/abstract/HeadingTertiary';
import { Paragraph } from '../../components/abstract/Paragraph';

export const Citation = () => (
  <div id="citation" className="citation">
    <HeadingSecondary fontWeight="bold">
      Cite this Site
    </HeadingSecondary>
    <Paragraph textSize={'small'}>
      Everything on this website is protected under U. S. copyright
      law. Any use of material found here should be fully cited, using
      the following forms:
    </Paragraph>

    <HeadingTertiary>Database</HeadingTertiary>
    <Paragraph textSize={'small'}>
      Cooke, Nym, and Andrew Chastney. Database of Printed and
      Manuscript Sources for American Sacred-texted Music through
      1820, on Nym Cooke and Andrew Chastney,{' '}
      <i>Early American Sacred Music</i>,
      www.earlyamericansacredmusic.org. Consulted [date].
    </Paragraph>

    <HeadingTertiary className="u-margin-top-small">
      Transcriptions (Example)
    </HeadingTertiary>
    <Paragraph textSize={'small'}>
      Lincoln, William.{' '}
      <i>
        History of Worcester, Massachusetts, from its Earliest
        Settlement to September, 1836
      </i>{' '}
      (Worcester: M. D. Phillips and Company, 1837), p. 179.
      Transcription on Nym Cooke and Andrew Chastney,{' '}
      <i>Early American Sacred Music</i>,
      www.earlyamericansacredmusic.org. Consulted [date].
    </Paragraph>

    <HeadingTertiary className="u-margin-top-small">
      Inventories (Example)
    </HeadingTertiary>
    <Paragraph textSize={'small'}>
      Cooke, Nym. "Pre-1821 American Sacred Music at the American
      Antiquarian Society as of February 2022." Inventory on Nym Cooke
      and Andrew Chastney, <i>Early American Sacred Music</i>,
      www.earlyamericansacredmusic.org. Consulted [date].
    </Paragraph>
  </div>
);
