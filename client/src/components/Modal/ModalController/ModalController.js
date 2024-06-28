import React from 'react';
import { BookPreview } from '../../../layouts/BookPreview/BookPreview';
import { Citation } from '../../../layouts/Citation/Citation';
import { DataDisclaimer } from '../../../layouts/DataDisclaimer/DataDisclaimer';
import { SearchGuide } from '../../../layouts/SearchGuide/SearchGuide';
import { ConnectedSingleRowForm } from '../../../layouts/SingleRowForm/ConnectedSingleRowForm';
import { ConnectedSingleRowView } from '../../../layouts/SingleRowView/ConnectedSingleRowView';
import Modal from '../Modal';

export const ModalController = ({
  modalOpen,
  modalType,
  onDismiss,
}) => {
  if (modalOpen) {
    let modalContent;
    let classMod = null;
    switch (modalType) {
      case 'searchGuide':
        modalContent = <SearchGuide />;
        classMod = 'text';
        break;
      case 'citation':
        modalContent = <Citation />;
        classMod = 'text';
        break;
      case 'disclaimer':
        modalContent = <DataDisclaimer />;
        classMod = 'text';
        break;
      case 'book':
        modalContent = <BookPreview />;
        classMod = 'text';
        break;
      case 'view':
        modalContent = <ConnectedSingleRowView />;
        classMod = 'text';
        break;
      case 'edit':
      case 'create':
      default:
        modalContent = <ConnectedSingleRowForm />;
        classMod = 'form';
    }

    return (
      <Modal
        content={modalContent}
        onDismiss={onDismiss}
        classMod={classMod}
      />
    );
  } else return <div id="closedModal" />;
};

ModalController.defaultProps = {
  modalOpen: false,
};
