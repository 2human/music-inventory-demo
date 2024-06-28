import React from 'react';
import { Center } from '../components/abstract/Center';
import { HeadingPrimary } from '../components/abstract/HeadingPrimary';
import { PageContainer } from '../components/abstract/PageContainer';
import { PageContent } from '../components/abstract/PageContent';
import { Paragraph } from '../components/abstract/Paragraph';
import { Files } from './Files';

export const Transcriptions = ({ transcriptions }) => {
  return (
    <div id="transcriptions">
      <PageContainer>
        <PageContent>
          <HeadingPrimary>Transcriptions</HeadingPrimary>
          <Paragraph>
            <Center>
              <i>
                Links to files containing transcriptions of passages
                on sacred music in ca. 300 New England town and church
                histories, grouped by subject, appear below. There are
                also links to a bibliography of the sources consulted,
                to a list of the towns whose histories were utilized,
                to a comprehensive index of musicians’ names, and to
                an explanation of how dates were sequenced. And
                there’s a link to a huge card-file of events in the
                history of American psalmody, created by Richard
                Crawford in the late 1970s or early 1980s and
                transcribed here in its totality.
              </i>
            </Center>
          </Paragraph>
          <Files files={transcriptions} />
        </PageContent>
      </PageContainer>
    </div>
  );
};
