import React from 'react';
import { HeadingSecondary } from '../../components/abstract/HeadingSecondary';
import { HeadingTertiary } from '../../components/abstract/HeadingTertiary';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '../../components/abstract/List';
import { Paragraph } from '../../components/abstract/Paragraph';

export const SearchGuide = () => (
  <div
    id="searchGuide"
    className="search-guide"
    style={{ padding: '2rem 3.5rem' }}>
    <HeadingSecondary fontWeight="bold">
      Search Guide
    </HeadingSecondary>
    <Paragraph textSize={'small'}>
      The search engine consists of both basic and advanced search
      features.
    </Paragraph>{' '}
    <Paragraph textSize={'small'}>
      The basic search feature is selected by default. If no fields
      are selected, a basic search will yield any collections,
      sources, or entries (depending on what type of data you are
      searching) that contain occurrences of each individual keyword
      at least once anywhere in that row. When fields are selected, it
      performs the same function but only for the fields selected.
    </Paragraph>{' '}
    <Paragraph textSize={'small'}>
      The advanced search feature replicates the functionality of an
      EXACT search. It provides a user input for each individual
      field. Any text entered must occur in the EXACT order at some
      point within its respective field.
    </Paragraph>
    <HeadingTertiary>Examples</HeadingTertiary>
    <OrderedList textSize="small">
      <ListItem>
        Find all manuscript copies of Timothy Swan’s hymn tune CHINA:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, type <b>china</b> into the Keyword(s) search
            box, check Title, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Identify a tune whose melodic incipit you know but whose title
        you’ve forgotten:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, open Advanced Search, enter as many pitches as
            you’re sure of in Melodic Incipit box (say,{' '}
            <b>533121234551</b>), check Pitches Only, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Identify a tune whose text incipit you know but whose title
        you’ve forgotten:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, type first few words into Keyword(s) search
            box (say, <b>if angels sung</b>), check Text Incipit,
            click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all copies of Amos Bull’s <i>The Responsary</i> (1795) in
        the participating collections:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Sources, type <b>responsary</b> in search box, check
            Title, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all items published before 1811 that are <u>not</u>{' '}
        included in the bibliography{' '}
        <i>American Sacred Music Imprints (ASMI)</i>:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Sources, open Advanced Search, type <b>not in asmi</b>{' '}
            in Description box, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>{' '}
      <ListItem>
        Find all tunes that are apparently not included in the{' '}
        <i>Hymn Tune Index</i> (<i>HTI</i>):
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, type <b>not in hti</b> in search box, check
            Notes, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all items owned and inscribed by Elias Nason:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Sources, type <b>elias nason</b> in search box, check
            Inscriptions, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all secular manuscript music entries that have been
        inventoried here:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, open Advanced Search, select Yes in Secular?,
            click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all tunes attributed or assigned to Daniel Read (NOTE:
        not all unattributed Read tunes have been identified as
        Read’s):
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Entries, type <b>read</b> into Keyword(s) search box,
            check Composer, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all copies of the “Bay Psalm Book” in the Watkinson
        Library:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            Select Collections, check Collection, scroll down to CT
            Hartford, Trinity College, Watkinson Library, scroll
            further to CROSS-REFERENCES, scroll to Bay Psalm Book,
            discover that the Bay Psalm Book is listed in Sources
            under The Psalms, Hymns, and Spiritual Songs, of the Old
            and New-Testament (then, to find all or most copies of
            this book, omit punctuation in Sources search:{' '}
            <b>psalms hymns and spiritual</b>)
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Find all manuscript music books:
        <UnorderedList indent={2} textSize="small">
          <ListItem>
            In Sources, type <b>ms. music book</b> into Keyword(s)
            input, check Title, click Search
          </ListItem>
        </UnorderedList>
      </ListItem>
    </OrderedList>
  </div>
);
