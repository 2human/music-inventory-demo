import React from 'react';
import { parsedSourceNumber } from './resultTableHelpers';

export const ResultTable = ({
  results,
  dataType,
  columnData,
  sortBy,
  handleHeaderClick,
  handleExpandIconClick,
  handleCellDoubleClick,
  admin,
}) => {
  return (
    <ResultTableContainer>
      <table
        id="resultTable"
        className={`table ${
          dataType === 'sources' ? 'table--sources' : ''
        }`}>
        <ResultTableColGroup
          columnData={columnData}
          dataType={dataType}
        />
        <ResultTableHeader
          columnData={columnData}
          handleHeaderClick={handleHeaderClick}
          sortBy={sortBy}
        />
        <ResultTableBody>
          {results.map((rowData, i) => (
            <ResultTableDataRow
              expandColumnExists={columnData.expand !== undefined}
              rowData={rowData}
              columnData={columnData}
              handleExpandIconClick={handleExpandIconClick}
              handleCellDoubleClick={handleCellDoubleClick}
              key={i}
              admin={admin}
            />
          ))}
        </ResultTableBody>
      </table>
    </ResultTableContainer>
  );
};

const ResultTableContainer = ({ children }) => (
  <div id="resultTable" className="search-results">
    {children}
  </div>
);

const ResultTableColGroup = ({ columnData, dataType }) => (
  <colgroup>
    {Object.keys(columnData).map((columnName) => (
      <col
        key={columnName}
        className={`table__${dataType}-column--${columnData[columnName].classMod}`}
      />
    ))}
  </colgroup>
);

const ResultTableHeader = ({
  columnData,
  sortBy,
  handleHeaderClick,
}) => (
  <ResultTableHeaderContainer>
    {Object.keys(columnData).map((columnName) => (
      <ResultTableHeaderCell
        key={columnName}
        column={{ ...columnData[columnName], name: columnName }}
        handleHeaderClick={handleHeaderClick}
        sortBy={sortBy}
      />
    ))}
  </ResultTableHeaderContainer>
);

const ResultTableHeaderContainer = ({ children }) => (
  <thead>
    <tr id="tableHeaders">{children}</tr>
  </thead>
);

const headerCellClassMods = (columnName) => {
  let mods = [];
  if (columnName === 'isSecular')
    mods.push('table__entry-cell--is-secular'); //centers checkboxes
  return mods.join(' ');
};

const ResultTableHeaderCell = ({
  column,
  sortBy,
  handleHeaderClick,
}) => (
  <th className={`table__header ${headerCellClassMods(column.name)}`}>
    {column.name !== 'expand' && (
      <ResultTableHeaderCellContent
        column={column}
        handleHeaderClick={handleHeaderClick}
        sortBy={sortBy}
      />
    )}
  </th>
);

const ResultTableHeaderCellContent = ({
  column,
  sortBy,
  handleHeaderClick,
}) => {
  return (
    <span
      className={`table__header-text btn-text ${
        column.name === sortBy.column ? 'btn-text--active ' : ''
      }`}
      onClick={() => handleHeaderClick(column.name)}>
      {column.label}
      {column.name === sortBy.column && (
        <SortArrow
          direction={sortBy.order === 'ascending' ? 'down' : 'up'}
        />
      )}
    </span>
  );
};

const SortArrow = ({ direction }) => {
  return (
    <i
      className={`table__header-text ${direction}-arrow ${direction}-arrow--blue`}
    />
  );
};

const ResultTableBody = ({ children }) => <tbody>{children}</tbody>;

const ResultTableDataRow = ({
  rowData,
  expandColumnExists,
  handleExpandIconClick,
  handleCellDoubleClick,
  columnData,
  admin,
}) => (
  <tr className="table__row">
    {expandColumnExists && (
      <ResultTableExpandIconCell
        handleExpandIconClick={handleExpandIconClick}
        rowData={rowData}
      />
    )}
    {Object.keys(columnData).map(
      (columnName) =>
        columnName !== 'id' &&
        columnName !== 'expand' && (
          <ResultTableDataCell
            key={columnName}
            rowData={rowData}
            columnName={columnName}
            handleCellDoubleClick={
              admin ? handleCellDoubleClick : () => {}
            }
            admin={admin}
          />
        )
    )}
  </tr>
);

const ResultTableExpandIconCell = ({
  handleExpandIconClick,
  rowData,
}) => (
  <td className="table__data">
    <ExpandIcon
      handleExpandIconClick={handleExpandIconClick}
      rowData={rowData}
    />
  </td>
);

const ExpandIcon = ({ handleExpandIconClick, rowData }) => (
  <svg
    className="btn-expand"
    onClick={() => handleExpandIconClick(rowData)}>
    <use xlinkHref="images/sprite.svg#icon-magnifying-glass"></use>
  </svg>
);

const cellClassMods = (columnName) => {
  let mods = [];
  if (
    columnName === 'msEntries' ||
    columnName === 'inscription' ||
    columnName === 'description'
  )
    mods.push('u-retain-indentation');
  if (columnName === 'isSecular')
    mods.push('table__entry-cell--is-secular'); //centers checkboxes
  return mods.join(' ');
};

const ResultTableDataCell = ({
  columnName,
  rowData,
  handleCellDoubleClick,
}) => {
  const renderCellContent = () => {
    if (columnName === 'isSecular') {
      return (
        <IsSecularCheckbox checked={rowData[columnName] === 'true'} />
      );
    } else if (columnName === 'sourceNumber') {
      return parsedSourceNumber(rowData[columnName]);
    } else {
      return rowData[columnName];
    }
  };
  return (
    <td
      className={`table__data ${cellClassMods(columnName)}`}
      onDoubleClick={() =>
        handleCellDoubleClick(rowData, columnName)
      }>
      {renderCellContent()}
    </td>
  );
};

const IsSecularCheckbox = ({ checked }) => (
  <input checked={checked} type="checkbox" disabled />
);

ResultTable.defaultProps = {
  columnData: {},
  dataType: '',
  results: [],
  sortBy: { column: '', order: '' },
  handleHeaderClick: () => {},
  handleExpandIconClick: () => {},
  handleCellDoubleClick: () => {},
  admin: false,
};
