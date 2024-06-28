import React from 'react';
import { Card } from '../components/abstract/Card';
import { PageContainer } from '../components/abstract/PageContainer';
import { PageContent } from '../components/abstract/PageContent';
import { HeadingPrimary } from '../components/abstract/HeadingPrimary';
import { Paragraph } from '../components/abstract/Paragraph';
import { LineBreak } from '../components/LineBreak/LineBreak';

export const Home = () => (
  <div id="home">
    <PageContainer>
      <PageContent>
        <Card
          className={'home__canon-card'}
          image={require('../assets/images/logo-large.jpg')}
          alt="Canon"
          caption={
            <>
              Oliver Brownson, <i>Select Harmony</i>, title page
            </>
          }
          borderless
          noPadding
        />
        <HeadingPrimary
          textAlign="left"
          className="u-margin-top-small">
          Early American Sacred Music
        </HeadingPrimary>

        <Paragraph>
          Welcome to the Early American Sacred Music website! This
          site aims to be a central source for information relating to
          the sacred-texted choral music that was composed, copied by
          hand, and published in America—particularly in New
          England—through 1820. As such, it deals only with traditions
          that originated in Europe, and not with Native American (or
          Indigenous) traditions.
        </Paragraph>
        <Paragraph>
          The site contains two noteworthy sections. There is a
          searchable <b>database</b> representing the complete
          holdings of printed tunebooks and manuscripts containing
          sacred-texted choral music in a variety of libraries. And
          there are over 600 pages of searchable <b>transcriptions</b>{' '}
          of passages relating to sacred music in New England town and
          church histories.
        </Paragraph>
        <Paragraph>
          The sources for the database are inventories of 23
          collections made by Nym Cooke since 2014, and updated to no
          earlier than 2019. Over the next couple of years,
          inventories of the following collections, and very likely
          others, will be added: the Beinecke Rare Book and Manuscript
          Library at Yale University, New Haven, CT; the Boston Public
          Library in Boston, MA; the Irving S. Gilmore Music Library
          at Yale University; the New York Public Library in New York,
          NY; the Newberry Library in Chicago, IL; and the William L.
          Clements Library at the University of Michigan in Ann Arbor,
          MI. This is a constantly growing tool.
        </Paragraph>
        {/* <Card
          className={'home__canon-card'}
          image={require('../assets/images/canon-large.jpg')}
          alt="Canon"
          caption="A Canon of 4 in 1 by William Billings--frontispiece, The New-England Psalm-Singer, [1770]"
        /> */}
        <Paragraph>
          The sources for the transcriptions are photocopies made by
          Richard Crawford and Nym Cooke from over 300 secondary
          sources, ranging from Wilkes Allen’s 1820 history of
          Chelmsford, Massachusetts to Jeffrey Fiske’s 1998 history of
          New Braintree in the same state, but with a preponderance of
          books published in the late 19th and early 20th centuries.
        </Paragraph>
        <Paragraph>
          For information on the history of this project and on its
          two collaborators, see the <b>About</b> page. The{' '}
          <b>database</b> includes a drop-down search guide (see link
          immediately below the data entry window) that will help you
          get started in exploring its content, which is divided into
          three areas: the 23 <i>collections</i> currently included,
          the 2,165 qualifying <i>sources</i> contained in those
          collections, and the 10,562+ manuscript music <i>entries</i>{' '}
          copied into those sources.* The <b>transcriptions</b>{' '}
          section of the website includes links to transcriptions in
          23 subject areas, as well as a bibliography of sources, a
          list of towns and cities represented, and an index of
          musicians’ names; there’s also a link to a 142-page Word
          document transcribing Richard Crawford’s card file on the
          history of psalmody. And the <b>inventories</b> section
          presents Nym’s original inventories, where all data from any
          one repository are presented in a single document.
        </Paragraph>
        <Paragraph>
          This site exists for you—scholars, performers, teachers, or
          just lovers of this musical tradition. Your feedback on its
          content, structure, and usability is welcome; please email
          Nym at{' '}
          <a href="mailto: nymcooke@gmail.com ">
            nymcooke@gmail.com{' '}
          </a>
          with any comments. If you wish to contribute to the further
          expansion of the database, please visit our <b>Donate</b>{' '}
          page.
        </Paragraph>
        <Paragraph>
          Finally, everything on this website is protected under U. S.
          copyright. Specific forms of citation for material in the
          Database, Transcriptions, and Inventory sections can be
          found by following the link at the bottom of this page.
          Anyone needing to cite text elsewhere in the site (i.e., on
          the “Home” or “About” pages) should use this form: Cooke,
          Nym, and Andrew Chastney.{' '}
          <i>Early American Sacred Music,</i>{' '}
          www.earlyamericansacredmusic.org. Consulted [date].
        </Paragraph>
        <LineBreak />
        <Paragraph textSize="tiny">
          * The + after 10,562 indicates that many secular manuscript
          music entries in the sources examined—marches, dance tunes,
          vocal melodies—have not been recorded as separate entries,
          but rather have been grouped together in lists of titles.
          Other secular entries have been partially inventoried, and
          still others have been fully inventoried. This project’s
          emphasis on tunes setting sacred texts, and the huge number
          of secular entries encountered, precluded the comprehensive
          treatment of secular material.
        </Paragraph>
      </PageContent>
    </PageContainer>
  </div>
);
