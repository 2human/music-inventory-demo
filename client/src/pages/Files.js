import React, { useState } from 'react';
import { Center } from '../components/abstract/Center';
import { FileCard } from '../components/FileCard/FileCard';

export const Files = ({ files }) => {
  const [searchText, setSearchText] = useState('');

  const matchingFiles = () => {
    if (!searchText)
      return files; //return all files if no search text
    else {
      //otherwise filter files by search text
      return files.filter(
        (file) =>
          file.title //check title
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          (file.caption && //check caption, if it exists
            file.caption
              .toLowerCase()
              .includes(searchText.toLowerCase()))
      );
    }
  };

  const handleTextInput = ({ target }) => {
    setSearchText(target.value);
  };

  return (
    <div className="files">
      <Center>
        <Files__SearchInput
          value={searchText}
          handleTextInput={handleTextInput}
        />
      </Center>
      <Files__Cards>
        {matchingFiles().map((file, index) => (
          <FileCard key={file.caption + '' + index} {...file} />
        ))}
      </Files__Cards>
    </div>
  );
};

const Files__SearchInput = ({ value, handleTextInput }) => (
  <input
    autoFocus="autofocus"
    type="text"
    name="search"
    placeholder="Search"
    size="60"
    maxLength="200"
    className="files__search form__input form__input--long u-margin-bottom-small"
    value={value}
    onChange={handleTextInput}
  />
);

const Files__Cards = ({ children }) => (
  <div className="files__cards">{children}</div>
);

Files.defaultProps = {
  files: [],
};
