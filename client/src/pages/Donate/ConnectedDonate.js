import { connect } from 'react-redux';
import { openBookPreview } from '../../store/actions';
import { Donate } from './Donate';

export const mapDispatchToProps = {
  openBookPreview: openBookPreview,
};

export const ConnectedDonate = connect(
  null,
  mapDispatchToProps
)(Donate);
