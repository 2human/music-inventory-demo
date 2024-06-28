import React from 'react';
import { HeadingSecondary } from '../../components/abstract/HeadingSecondary';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '../../components/abstract/List';
import { Paragraph } from '../../components/abstract/Paragraph';

export const DataDisclaimer = () => (
  <div
    id="searchGuide"
    className="search-guide"
    style={{ padding: '2rem 3.5rem' }}>
    <HeadingSecondary fontWeight="bold">
      Data Entry Conventions and Inconsistencies
    </HeadingSecondary>
    <Paragraph textSize="small">
      Over almost a decade of inventorying projects, Nym’s standards,
      techniques, and definitions evolved and changed. The recent
      updatings of earlier inventories go a long way toward bringing
      them into conformity with inventories completed more recently.
      But some inconsistencies remain, and will appear in the
      database.
    </Paragraph>
    <UnorderedList textSize="small" indent={2}>
      <ListItem>
        One of the most substantial inconsistencies is the occasional
        omission of German language manuscript sources in earlier
        inventories, and their inclusion in more recent inventories.
        Obviously, further inventorying work will have to be done
        here.
      </ListItem>
      <ListItem>
        Also, Nym’s way of dealing with volumes where several
        different printed items containing sacred music are bound
        together has changed, so that in some earlier inventories each
        item in a “bound-with” conglomerate is listed and described
        fully under its own title, whereas in later inventories all
        items are fully described under the first item in the
        conglomerate, in the order of their occurrence, with
        cross-references to the conglomerate volume from each
        individual title.
      </ListItem>
      <ListItem>
        Another inconsistency is the varying degrees of thoroughness
        with which Nym has dealt with secular manuscript music entries
        (which, after all, are not the emphasis of this project). In
        some cases, only titles are provided; in others, a secular
        tune receives full inventorying treatment.
      </ListItem>
    </UnorderedList>
    <Paragraph textSize="small" className="u-margin-top-tiny">
      Database users should be aware of several other points. First,
      in the Sources part of the database,
    </Paragraph>
    <UnorderedList textSize="small" indent={2}>
      <ListItem>
        The simple presence of manuscript music in a printed source,
        and its location, are noted in the <b>Description</b> column,
        while any generally applicable information about the source’s
        manuscript music appears in the <b>MS. Music</b> column. If
        the <b>MS. Music</b> cell is blank for a particular source,
        that source contains manuscript music, but there was no
        generally applicable information on the manuscript music to be
        recorded.
      </ListItem>
      <ListItem>
        Information handwritten or printed on bookplates is included
        in the <b>Inscriptions</b> column.
      </ListItem>
    </UnorderedList>
    <Paragraph textSize="small" className="u-margin-top-tiny">
      And in the Entries part of the database,
    </Paragraph>
    <UnorderedList textSize="small" indent={2}>
      <ListItem>
        While all <b>Composer</b> attributions written in the sources
        themselves have been faithfully transcribed (within quotes),
        composer attributions have been <u>supplied</u> (within square
        brackets) only when Nym was sure of them; there are no guesses
        here. And while sometimes an effort was made (usually by using
        the <i>Hymn Tune Index</i>) to identify all the known
        composers represented in a particular source, this was done
        only in a relatively small number of cases. Many more
        composers could be identified here, and the{' '}
        <i>Hymn Tune Index</i> is the best resource for making those
        identifications. Note also the use of certain default composer
        surnames: Read is Daniel Read (J. Read is Joel Read), Billings
        is William Billings (N. Billings is Nathaniel Billings), West
        is Elisha West (J. West is J. West), Edson is Lewis Edson, Sr.
        (Edson, Jr. is Lewis Edson, Jr.).
      </ListItem>
      <ListItem>
        Tune <b>Titles</b> have been transcribed verbatim, and when
        necessary, the standard form of a tune’s title is added in
        square backets to facilitate searching (e. g., Bridgewarter
        [Bridgewater]). The standard form for tune titles which
        consist of a psalm or hymn number, and the form which should
        be used for searches, is Psalm [no.] or Hymn [no.].
      </ListItem>
      <ListItem>
        <b>Melodic Incipits</b> and <b>Text Incipits</b> are recorded
        verbatim, usually without “sic”s. If a musical incipit is from
        a vocal part other than the melody, that vocal part is almost
        always specified.
      </ListItem>
    </UnorderedList>
  </div>
);
