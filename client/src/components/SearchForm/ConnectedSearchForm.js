import { connect } from 'react-redux';
import {
  openDisclaimer,
  openSearchGuide,
  searchRequest,
  searchSetResultsPerPage,
} from '../../store/actions';
import { SearchForm } from './SearchForm';

export const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  basicSearchFields:
    ownProps.basicSearchFields || state.search.basicSearchFields,
  tableSelectFields:
    ownProps.tableSelectFields || state.search.tableSelectFields,
  advancedSearchFields:
    ownProps.advancedSearchFields ||
    state.search.advancedSearchFields,
  initialTable: ownProps.initialTable || state.search.initialTable,
});

export const mapDispatchToProps = {
  searchRequest,
  onGuideClick: openSearchGuide,
  onDisclaimerClick: openDisclaimer,
};

export const ConnectedSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
