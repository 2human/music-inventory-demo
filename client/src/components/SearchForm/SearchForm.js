import React, { useState, useEffect } from 'react';
import { TableSelectRadios } from './TableSelectRadios/TableSelectRadios';
import { BasicSearchCheckboxes } from './BasicSearchCheckboxes/BasicSearchCheckboxes';
import { AdvancedSearchInputs } from './AdvancedSearchInputs/AdvancedSearchInputs';
import { wasAlreadySelected } from './searchFormHelpers';
import { blankAdvancedInputs } from './searchFormHelpers';

export const SearchForm = ({
  basicSearchFields,
  tableSelectFields,
  advancedSearchFields,
  initialTable,
  searchRequest,
  onGuideClick,
  onDisclaimerClick,
}) => {
  const [formInputs, setFormInputs] = useState({
    searchText: '',
    table: initialTable,
    basicSearchSelection: [],
    advancedSearchInputs: {
      ...blankAdvancedInputs(advancedSearchFields[initialTable].rows),
    },
    advancedSearchOn: false,
  });

  useEffect(() => {});

  const handleSubmit = async (event) => {
    event.preventDefault();
    searchRequest(formInputs);
  };

  const handleKeywordInput = ({ target }) => {
    setFormInputs({
      ...formInputs,
      searchText: target.value,
    });
  };

  const handleTableChange = ({ target }) => {
    const tableSelection = target.value;
    setFormInputs({
      ...formInputs,
      table: tableSelection,
      basicSearchSelection: [],
      advancedSearchInputs: {
        ...blankAdvancedInputs(
          advancedSearchFields[tableSelection].rows
        ),
        collection: formInputs.advancedSearchInputs.collection,
      },
    });
  };

  const resetInputs = () => {
    setFormInputs({
      ...formInputs,
      searchText: '',
      basicSearchSelection: [],
      advancedSearchInputs: {
        ...blankAdvancedInputs(
          advancedSearchFields[formInputs.table].rows
        ),
      },
    });
  };

  const handleCheckboxChange = ({ target }) => {
    const changedCheckbox = target.value;
    if (wasAlreadySelected(changedCheckbox, formInputs)) {
      deselectCheckbox(changedCheckbox);
    } else {
      selectCheckbox(changedCheckbox);
    }
  };

  const deselectCheckbox = (changedCheckbox) => {
    setFormInputs({
      ...formInputs,
      basicSearchSelection: formInputs.basicSearchSelection.filter(
        (field) => field !== changedCheckbox
      ),
    });
  };

  const selectCheckbox = (changedCheckbox) => {
    setFormInputs({
      ...formInputs,
      basicSearchSelection: [
        ...formInputs.basicSearchSelection,
        changedCheckbox,
      ],
    });
  };

  const handleAdvancedSearchToggle = () => {
    setFormInputs({
      ...formInputs,
      searchText: '',
      advancedSearchOn: !formInputs.advancedSearchOn,
    });
  };

  const handleAdvancedInput = ({ target }) => {
    switch (target.name) {
      case 'pitchesOnly':
        togglePitchesOnly();
        break;
      default:
        setFormInputs({
          ...formInputs,
          advancedSearchInputs: {
            ...formInputs.advancedSearchInputs,
            [target.name]: target.value,
          },
        });
    }
  };

  const togglePitchesOnly = () => {
    setFormInputs({
      ...formInputs,
      advancedSearchInputs: {
        ...formInputs.advancedSearchInputs,
        pitchesOnly: !formInputs.advancedSearchInputs.pitchesOnly,
      },
    });
  };

  return (
    <SearchFormContainer
      handleSubmit={handleSubmit}
      advancedSearchOn={formInputs.advancedSearchOn}
      table={formInputs.table}>
      <KeywordInputAndSubmitBtn
        handleKeywordInput={handleKeywordInput}
        inputValue={formInputs.searchText}
      />
      <AdvancedGuideContainer>
        <AdvancedSearchToggle
          advancedSearchOn={formInputs.advancedSearchOn}
          handleAdvancedSearchToggle={handleAdvancedSearchToggle}
        />
        <OpenGuideBtn onGuideClick={onGuideClick} />{' '}
        <OpenDisclaimerBtn onDisclaimerClick={onDisclaimerClick} />
        <ClearFieldsBtn resetInputs={resetInputs} />
      </AdvancedGuideContainer>
      <TableSelectRadios
        fieldData={tableSelectFields}
        selectedTable={formInputs.table}
        handleTableChange={handleTableChange}
      />
      {formInputs.advancedSearchOn ? (
        <AdvancedSearchInputs
          fieldData={advancedSearchFields[formInputs.table]}
          handleInput={handleAdvancedInput}
          inputValues={formInputs.advancedSearchInputs}
        />
      ) : (
        <BasicSearchCheckboxes
          handleFieldChange={handleCheckboxChange}
          fieldData={basicSearchFields[formInputs.table]}
          selectedFields={formInputs.basicSearchSelection}
        />
      )}
    </SearchFormContainer>
  );
};

const SearchFormContainer = ({
  children,
  handleSubmit,
  advancedSearchOn,
  table,
}) => (
  <form
    id="searchForm"
    className={`search-form ${
      advancedSearchOn
        ? `search-form--advanced-${table}`
        : 'search-form--basic'
    }`}
    onSubmit={handleSubmit}>
    {children}
  </form>
);

const KeywordInputAndSubmitBtn = ({
  handleKeywordInput,
  inputValue,
}) => (
  <KeywordInputAndSubmitContainer>
    <KeywordInput
      handleKeywordInput={handleKeywordInput}
      value={inputValue}
    />
    <SubmitSearchButton />
  </KeywordInputAndSubmitContainer>
);

const AdvancedGuideContainer = ({ children }) => (
  <div className="search-form__advanced-guide-container">
    {children}
  </div>
);

const KeywordInputAndSubmitContainer = ({ children }) => (
  <div className="search-form__keyword-container">{children}</div>
);

const KeywordInput = ({ handleKeywordInput, value }) => (
  <input
    autoFocus="autofocus"
    name="searchText"
    id="keywordInput"
    className="form__input search-form__keyword-input"
    placeholder="Keyword(s)"
    size="60"
    maxLength="200"
    onChange={handleKeywordInput}
    value={value}
  />
);

const SubmitSearchButton = () => (
  <input
    id="submitSearch"
    type="submit"
    className="btn btn--blue"
    value="Search"
  />
);

export const AdvancedSearchToggle = ({
  advancedSearchOn,
  handleAdvancedSearchToggle,
}) => {
  const arrowType = advancedSearchOn ? 'up-arrow' : 'down-arrow';
  const prompt = advancedSearchOn
    ? 'Close Advanced Search'
    : 'Open Advanced Search';
  return (
    <span
      id="advancedSearchToggle"
      className="btn-text"
      onClick={handleAdvancedSearchToggle}>
      {prompt}
      <i className={`${arrowType} btn-text__${arrowType}`}></i>
    </span>
  );
};

AdvancedSearchToggle.defaultProps = {
  advancedSearchOn: false,
};

const OpenGuideBtn = ({ onGuideClick }) => (
  <span
    id="searchGuide"
    className="btn-text"
    onClick={() => onGuideClick()}>
    Search Guide
  </span>
);

const OpenDisclaimerBtn = ({ onDisclaimerClick }) => (
  <span
    id="searchDisclaimerBtn"
    className="btn-text"
    onClick={() => onDisclaimerClick()}>
    Disclaimer
  </span>
);

const ClearFieldsBtn = ({ resetInputs }) => (
  <span
    id="searchGuide"
    className="btn-red-text"
    onClick={() => resetInputs()}>
    Clear Fields
  </span>
);

SearchForm.defaultProps = {
  tableSelectFields: [
    { value: 'table1default', label: 'label1default' },
    { value: 'table2default', label: 'label2default' },
  ],
  basicSearchFields: {
    table1default: [
      {
        value: 'option1',
        label: 'Option11',
      },
      {
        value: 'option2',
        label: 'Option2',
      },
      {
        value: 'option3',
        label: 'Option3',
      },
    ],
  },
  advancedSearchFields: {
    table1default: {
      rows: [
        [
          { name: 'name1', label: 'label1', size: 'short' },
          { name: 'name3', label: 'label3', size: 'long' },
        ],
        [{ name: 'name2', label: 'label2', size: 'long' }],
      ],
    },
  },
  initialTable: 'table1default',
  searchRequest: () => {},
  onGuideClick: () => {},
};
