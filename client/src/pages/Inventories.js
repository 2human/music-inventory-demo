import React from 'react';
import { transcriptions } from '../assets/transcriptions/transcriptions';
import { Center } from '../components/abstract/Center';
import { HeadingPrimary } from '../components/abstract/HeadingPrimary';
import { PageContainer } from '../components/abstract/PageContainer';
import { PageContent } from '../components/abstract/PageContent';
import { Paragraph } from '../components/abstract/Paragraph';
import { Files } from './Files';

export const Inventories = ({ inventories }) => {
  return (
    <PageContainer>
      <PageContent>
        <HeadingPrimary>Inventories</HeadingPrimary>
        <Paragraph>
          <Center>
            <i>
              Links to files containing the original inventories of
              all the collections represented in this site’s database
              appear below. The inventories allow one to see all the
              information relating to a particular collection—data on
              sources, data on manuscript music entries,
              cross-references from one form of a source title to
              another—all in one place. Visitors are recommended to
              check out the information that’s denoted by pointing
              hands as potentially useful or significant; these
              indicators were not transferred to the database.
            </i>
          </Center>
        </Paragraph>
        <Files files={inventories} />
      </PageContent>
    </PageContainer>
  );
};
