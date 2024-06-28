import { connect } from 'react-redux';
import { openCitation, openDisclaimer } from '../../store/actions';
import { Footer } from './Footer';

export const mapDispatchToProps = {
  openDisclaimer: openDisclaimer,
  openCitation: openCitation,
};

export const ConnectedFooter = connect(
  null,
  mapDispatchToProps
)(Footer);
