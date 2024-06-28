import React from 'react';
import { Card } from '../components/abstract/Card';
import { Center } from '../components/abstract/Center';
import { HeadingPrimary } from '../components/abstract/HeadingPrimary';
import { HeadingSecondary } from '../components/abstract/HeadingSecondary';
import { PageContainer } from '../components/abstract/PageContainer';
import { PageContent } from '../components/abstract/PageContent';
import { Paragraph } from '../components/abstract/Paragraph';

export const About = () => (
  <div id="about">
    <PageContainer>
      <PageContent>
        <HeadingPrimary
          textAlign="left"
          styles={{ marginBottom: '1rem' }}>
          About this site
        </HeadingPrimary>
        <HeadingSecondary textAlign="left">
          I. THE INVENTORIES
        </HeadingSecondary>
        <Paragraph>
          Nym Cooke has been systematically recording information on
          early American sacred music in manuscript since the summer
          of 1981, when as a graduate student at the University of
          Michigan in Ann Arbor he compiled an “Index of Sacred Music
          in Manuscript at the William L. Clements Library,” with most
          of its content pre-dating 1821. This was followed by “A
          Catalogue of Pre-1821 Anglo-American Sacred Music in
          Manuscript at the American Antiquarian Society,” completed
          in 1984.
        </Paragraph>
        <Card
          float="right"
          className={'about__read-card'}
          image={require('../assets/images/daniel-read-mortality.jpg')}
          alt="Daniel Read"
          caption="Daniel Read"
          borderless
          noPadding
        />
        <Paragraph>
          In the meantime, Nym had been briefly engaged by Nicholas
          Temperley to collect data on handwritten copies of tunes and
          vocal parts in a number of libraries. Temperley and his
          assistants at the University of Illinois had begun indexing
          English-language hymn tunes in printed sources dating from
          1535 to 1820 for the monumental <i>Hymn Tune Index</i>,
          which would be published in four volumes by Clarendon Press
          Oxford in 1998, and which is now on the web at
          https:://hymntune.library.uiuc.edu/. They initially intended
          to include manuscript sources, but early on decided this
          would be impracticable. After Nym was dismissed from the{' '}
          <i>HTI</i> project, and although Temperley would write in
          the <i>HTI’s</i> introduction, correctly, that “the task of
          finding and indexing [all tunes in manuscript copies]…would
          be virtually endless” (Temperley 1998 I/76), Nym determined
          to forge on with this task nevertheless.
        </Paragraph>
        <Paragraph>
          Other projects (including completing a doctoral
          dissertation, teaching at various institutions, and raising
          a family) caused a thirty-year hiatus, but Nym returned to
          sacred music inventorying—now both manuscript and printed
          sources—with an “Inventory of American Sacred Tunebooks
          through 1820” completed in May 2014 for the Olin Memorial
          Library at Wesleyan University in Middletown, Connecticut.
          Two years later came an inventory of the tunebooks and
          manuscripts at the Peabody Essex Museum’s Phillips Library,
          then in temporary headquarters in Peabody, Massachusetts.
        </Paragraph>
        <Card
          className={'about__crucifixion-card'}
          image={require('../assets/images/crucifixion-cropped.jpg')}
          alt="Crucifixion"
          borderless
          noPadding
          caption={
            <>
              McKyes, CRUCIFIXION,{' '}
              <i>Asahel Benham's Social Harmony</i>, 1798
            </>
          }
        />
        <Paragraph>
          Things started heating up in 2019, with inventories being
          completed for Trinity College’s Watkinson Library and the
          Connecticut Historical Society, both in Hartford; the Boston
          Athenæum, and the Congregational Library and Archives next
          door; the Andover [Mass.] Center for History and Culture;
          and Nym’s own collection. 2020 brought the pandemic, but
          also two substantial fellowships for Nym to continue his
          work: one from the American Antiquarian Society and one from
          the New England Research Fellowship Consortium. Thanks to
          this generous support, in 2021 Nym completed inventories for
          the Massachusetts Historical Society in Boston and for five
          Harvard libraries, including Houghton Library, the Eda Kuhn
          Loeb Music Library, and the Divinity School Library. And
          2022 was a banner year, with Nym finally completing his
          inventory of the American Antiquarian Society’s extensive
          holdings (over 600 sources); inventorying the collections of
          the John Hay and John Carter Brown Libraries at Brown
          University, the Rhode Island Historical Society, and the
          Providence Athenæum; finishing up an inventory of the
          Harvard Musical Association’s holdings (Boston); and
          updating the Olin Memorial Library and Phillips Library
          inventories.
        </Paragraph>
        <Card
          float="right"
          className={'about__montague-card'}
          image={require('../assets/images/montague.jpg')}
          alt="Timothy Swan"
          caption="Timothy Swan"
          borderless
          noPadding
        />
        <HeadingSecondary textAlign="left">
          II. THE DATABASE
        </HeadingSecondary>
        <Paragraph>
          In early 2020, Nym approached the American Antiquarian
          Society with the suggestion that they host on their website
          a database comprised of the information in all of Nym’s
          sacred music inventories, but the time was not right for
          that to happen. Then in 2021 Nym had the good fortune to
          meet Andrew Chastney. Andrew happened to be wrapping up a
          degree in Computer Information Systems at the time. He was
          looking for projects to work on, and based on what Nym told
          him about the data he was recording in his inventories, he
          saw the potential for parsing this data into a database.
        </Paragraph>
        <Paragraph>
          Over the coming months, Nym and Andrew began working
          together to construct the database. Andrew wrote a Java
          program that iterated through the Word documents containing
          the original data Nym had recorded. He deciphered the
          patterns and syntax that Nym used while making his
          inventories, parsing the data into separate tables
          (Collections, Sources, Entries), and the tables into
          separate fields. Eventually, Andrew successfully parsed the
          existing inventories into a MySQL database.
        </Paragraph>
        <Card
          className={'about__pennsylvania-card'}
          image={require('../assets/images/pennsylvania.jpg')}
          alt="Pennsylvania"
          caption={
            <>
              Joseph Stone, PENNSYLVANIA, "Columbian Harmony"
              manuscript, Charles E. Young Research Library, UCLA
            </>
          }
          borderless
          noPadding
        />
        <HeadingSecondary textAlign="left">
          III. THE WEBSITE
        </HeadingSecondary>
        <Paragraph>
          Once the initial database was compiled, Andrew began
          prototyping a web application which would allow its users to
          search and view the contents of the database. As time went
          by, Nym and Andrew saw its potential, making the decision to
          build it into a full-fledged website to be released to the
          public.
        </Paragraph>
        <Paragraph>
          Over the next couple of years, Nym and Andrew continued to
          collaborate on the project: new inventories were parsed and
          added to the database as Nym recorded them, Nym polished the
          data within the database, and Andrew continued to work on
          the website. The result is what you see before you.
        </Paragraph>
        <Card
          float="left"
          className={'about__stone-card'}
          image={require('../assets/images/stone.jpg')}
          alt="Joseph Stone"
          caption="Joseph Stone"
          borderless
          noPadding
        />
        <HeadingSecondary textAlign="left">
          IV. THE TRANSCRIPTIONS
        </HeadingSecondary>
        <Paragraph>
          Another feature of this website is a set of 23 searchable
          Word documents, created by Nym Cooke in 2019 by transcribing
          all the passages relating to early sacred music in over 300
          New England town and church histories.
        </Paragraph>
        {/* <Card
          className={'about__watts-card'}
          image={require('../assets/images/Isaac Watts, portrait.jpg')}
          alt="Isaac Watts"
          caption="Isaac Watts"
        /> */}
        <Paragraph>
          The documents address a variety of topics: chanting; choir
          size and notes on individual vocal sections; discord at
          meeting; financial support for music in church; instruments
          and pitch pipes; lining out, musical illiteracy, and textual
          literacy; major church-music changes; meetinghouses; music
          in the meetinghouse; musical families; musical repertory and
          general comments on psalmody; musical societies
          (occasionally the same as church choirs); the order of
          service; reading scriptures including the psalms in the
          worship service; references to psalmodists and other
          creative people; regular singing, and the old way of
          singing; the seating of choirs and other choir-related
          matters; singers in church; singing leaders: choristers and
          choir directors; singing outside of church; singing masters
          and singing schools; systems of musical notation; and text
          versions / psalms vs. hymns. Some transcribed passages touch
          on several of these topics, and thus the same passage may
          appear in three or four different documents. The
          Transcriptions section of the website also includes a list
          of the sources from which these passages were taken, a list
          of the 205 towns and cities whose published histories and
          historical documents were consulted, and an index of the ca.
          1,138 musicians who are mentioned in the various transcribed
          documents.
        </Paragraph>
        <Card
          className={'about__salisbury-card'}
          image={require('../assets/images/salisbury.jpg')}
          alt="A New Collection of Sacred Harmony"
          caption={
            <>
              Oliver Brownson,{' '}
              <i>A New Collection of Sacred Harmony</i>, [after 1797],
              p. [2]
            </>
          }
          borderless
          noPadding
        />

        <Paragraph>
          The towns and cities whose histories are canvassed here were
          selected by a combination of method and circumstance.
          Researching tunebook compilers for{' '}
          <i>
            American Sacred Music Imprints, 1698-1810: A Bibliography
          </i>
          , published by the American Antiquarian Society in 1990,
          Richard Crawford searched the histories of these men’s towns
          and churches for mentions of the musicians and likely also
          to enrich his sense of the immediate contexts in which they
          lived and worked. He also made a huge chronological card
          file of excerpts from those histories and other sources,
          which Nym has transcribed and which is available to search
          here. Crawford’s local-history photocopies were the
          foundation for Nym’s collection, which was then augmented by
          a variety of needs that brought Nym to additional town
          histories. The town and church histories consulted were
          published between 1820 and 1998, with the great majority
          appearing between 1870 and 1930—clearly a heyday for
          retrospective celebration of the past, at least in the New
          England states.
        </Paragraph>

        <Paragraph>
          All of Nym's work described here--the library inventories,
          the database created from those inventories, and the town
          history transcriptions--will supply material for a major
          work in progress, the book{' '}
          <i>
            A Joyful Noise: Protestant Sacred Music in New England,
            1720-1820
          </i>
          .
        </Paragraph>

        <HeadingSecondary textAlign="left">
          V. THANKS from Nym
        </HeadingSecondary>
        <Paragraph>
          I’d like to thank, first, the gracious, patient, and
          resourceful librarians who have helped me in so many ways:
          Peter Accardo (Houghton Library), Peggy Bendroth
          (Congregational Library and Archives), Christina Bleyer
          (Watkinson Library), James Capobianco (Houghton Library),
          Nell Carlson (Harvard Divinity School Library), Ashley
          Cataldo (American Antiquarian Society), Anna
          Clutterbuck-Cooke (Massachusetts Historical Society), Alan
          Degutis (American Antiquarian Society), Sierra Dixon
          (Connecticut Historical Society), Karen Eberhart (John Hay
          Library), Lee Eiseman (Harvard Musical Association),
          Jennifer Galpern (Robinson Research Center, Rhode Island
          Historical Society), Elaine Heavey (Massachusetts Historical
          Society), Amy Hietala (Old Sturbridge Village Research
          Library), Jennifer Hornsby (Phillips Library), Maureen
          Jennings (Harvard Divinity School Library), Eric
          Johnson-DeBaufre (Watkinson Library), Gloria Korsman
          (Harvard Divinity School Library), Christina Linklater (Loeb
          Music Library), Maggie Long (Olin Library Special
          Collections), Barbara Mathews (Massachusetts Historical
          Society, then Historic Deerfield), Angela McBrien (Andover
          Center for History and Culture), Billy McCarthy
          (Congregational Library and Archives), Jim McDonald (Harvard
          Musical Association), Kim Nusco (John Carter Brown Library),
          Elizabeth Pope (American Antiquarian Society), Jeanne
          Solensky (Henry N. Flynt Library, Pocumtuck Valley Memorial
          Association Library), Jasmine Sykes-Kunk (John Hay Library),
          Emily Walhout (Houghton Library), Mary Warnement (Boston
          Athenæum), and Kid Wongsrichanalai (Massachusetts Historical
          Society). My sincere apologies to anyone I may have missed.
        </Paragraph>
        <Paragraph>
          Many thanks also to the New England Research Fellowship
          Consortium, and to the American Antiquarian Society—my
          research home away from home—for generous grants that
          supported my inventorying project.
        </Paragraph>
        <Paragraph>
          Special thanks to the two giants in my field, Richard
          Crawford and (in memoriam) Nicholas Temperley, for their
          astounding work, which has been so firm a foundation for my
          own efforts.
        </Paragraph>
        <Paragraph>
          And lastly, very special thanks to my most excellent
          collaborator, Andrew Chastney. My gratitude to Andrew knows
          no bounds. How lucky I am that a chance conversation in the
          Petersham, Massachusetts Post Office led to our partnership,
          and all that has transpired in the two-plus years since!
        </Paragraph>
      </PageContent>
    </PageContainer>
  </div>
);
