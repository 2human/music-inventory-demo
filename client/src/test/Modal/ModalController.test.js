import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../components/Modal/Modal';
import { ModalController } from '../../components/Modal/ModalController/ModalController';
import { ConnectedSingleRowForm } from '../../layouts/SingleRowForm/ConnectedSingleRowForm';
import { ConnectedSingleRowView } from '../../layouts/SingleRowView/ConnectedSingleRowView';
import { SearchGuide } from '../../layouts/SearchGuide/SearchGuide';
import {
  createShallowRenderer,
  id,
  type,
} from '../test-utils/shallowHelpers';
import { DataDisclaimer } from '../../layouts/DataDisclaimer/DataDisclaimer';
import { Citation } from '../../layouts/Citation/Citation';
import { BookPreview } from '../../layouts/BookPreview/BookPreview';

describe('ModalController', () => {
  let shallowRender, elementMatching;

  beforeEach(() => {
    ({ shallowRender, elementMatching } = createShallowRenderer());

    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  it('renders the empty #closedModal div when modalOpen is false', () => {
    shallowRender(<ModalController modalOpen={false} />);
    expect(elementMatching(id('#closedModal'))).not.toBeNull();
  });

  it('renders the Modal component when modalOpen is true', () => {
    shallowRender(<ModalController modalOpen={true} />);
    expect(elementMatching(type(Modal))).not.toBeNull();
  });

  it('renders the Modal component when modalOpen is true', () => {
    shallowRender(<ModalController modalOpen={true} />);
    expect(elementMatching(type(Modal))).not.toBeNull();
  });

  it('passes the ConnectedSingleRowForm component to the Modal as props when modalType is "edit"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'edit'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <ConnectedSingleRowForm />
    );
  });

  it('passes the ConnectedSingleRowForm component to the Modal as props when modalType is "create"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'create'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <ConnectedSingleRowForm />
    );
  });

  it('passes the ConnectedSingleRowView component to the Modal as props when modalType is "create"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'view'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <ConnectedSingleRowView />
    );
  });

  it('passes the ConnectedSingleRowForm component to the Modal as props when modalOpen is true', () => {
    const onDismissSpy = jest.fn();
    shallowRender(
      <ModalController
        modalOpen={true}
        modalType={'create'}
        onDismiss={onDismissSpy}
      />
    );
    expect(elementMatching(type(Modal)).props.onDismiss).toEqual(
      onDismissSpy
    );
  });

  it('passes the SearchGuide component to the Modal as props when modalType is "searchGuide"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'searchGuide'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <SearchGuide />
    );
  });

  it('passes the Disclaimer component to the Modal as props when modalType is "disclaimer"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'citation'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <Citation />
    );
  });

  it('passes the Disclaimer component to the Modal as props when modalType is "disclaimer"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'disclaimer'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <DataDisclaimer />
    );
  });

  it('passes the BookPreview component to the Modal as props when modalType is "book"', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'book'} />
    );
    expect(elementMatching(type(Modal)).props.content).toEqual(
      <BookPreview />
    );
  });

  it('passes the "text" modifier to the modal as props when modal type is "searchGuide', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'searchGuide'} />
    );

    expect(elementMatching(type(Modal)).props.classMod).toEqual(
      'text'
    );
  });

  it('passes the "text" modifier to the modal as props when modal type is "view', () => {
    shallowRender(
      <ModalController modalOpen={true} modalType={'view'} />
    );

    expect(elementMatching(type(Modal)).props.classMod).toEqual(
      'text'
    );
  });
});
