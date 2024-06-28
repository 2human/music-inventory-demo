import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../components/Modal/Modal';
import { createContainer } from '../test-utils/domManipulators';

describe('Modal', () => {
  let render, element, click;

  beforeEach(() => {
    ({ render, element, click } = createContainer());

    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('renders the #modalContainer', () => {
    render(<Modal />);
    expect(element('#modalContainer')).not.toBeNull();
  });

  it('calls onDismiss when the area outside of #modalContent is clicked', () => {
    const onDismissSpy = jest.fn();
    render(<Modal onDismiss={onDismissSpy} />);
    const modalContainer = element('#modalContainer');
    click(modalContainer);
    expect(onDismissSpy).toHaveBeenCalled();
  });

  it('does not call onDismiss when the #modalContent is clicked', () => {
    const onDismissSpy = jest.fn();
    render(<Modal onDismiss={onDismissSpy} />);
    const modalContent = element('#modalContent');
    click(modalContent);
    expect(onDismissSpy).not.toHaveBeenCalled();
  });

  it('appends the class modifier to the .modal__content className', () => {
    const classMod = 'classmod';
    render(<Modal classMod={classMod} />);
    expect(element(`.modal__content--${classMod}`)).not.toBeNull();
  });
});
