const sources = {
  data: [
    {
      name: 'sourceNumber',
      label: 'Source Number',
      size: 'long',
    },
    { name: 'collection', label: 'Collection', size: 'long' },
    { name: 'callNumber', label: 'Call Number', size: 'long' },
    { name: 'author', label: 'Author', size: 'long' },
    { name: 'title', label: 'Title', size: 'long' },
    { name: 'description', label: 'Description', size: 'long' },
    { name: 'inscription', label: 'Inscriptions', size: 'long' },
    { name: 'msEntries', label: 'MS. Music', size: 'long' },
  ],
  rows: [
    ['collection', 'sourceNumber'],
    ['callNumber', 'author'],
    ['title', 'description'],
    ['inscription', 'msEntries'],
  ],
};

const entries = {
  data: [
    {
      name: 'collection',
      label: 'Collection',
      size: 'long',
    },
    {
      name: 'sourceNumber',
      label: 'Source Number',
      size: 'short',
    },
    {
      name: 'location',
      label: 'Location',
      size: 'short',
    },
    {
      name: 'title',
      label: 'Title',
      size: 'long',
    },
    {
      name: 'composer',
      label: 'Composer',
      size: 'long',
    },
    {
      name: 'vocalPart',
      label: 'Vocal Part/s',
      size: 'long',
    },
    {
      name: 'key',
      label: 'Key/s',
      size: 'long',
    },
    {
      name: 'melodicIncipit',
      label: 'Melodic Incipit',
      size: 'long',
    },
    {
      name: 'textIncipit',
      label: 'Text Incipit',
      size: 'long',
    },
    {
      name: 'isSecular',
      label: 'Secular',
      size: 'short',
    },
    {
      name: 'notes',
      label: 'Notes',
      size: 'long',
    },
  ],
  rows: [
    ['sourceNumber', 'location', 'isSecular'],
    ['collection', 'title'],
    ['composer', 'vocalPart'],
    ['key', 'melodicIncipit'],
    ['textIncipit', 'notes'],
  ],
};

const collections = {
  data: [
    {
      name: 'collection',
      label: 'Collection',
      size: 'long',
    },
    {
      name: 'description',
      label: 'Description',
      size: 'long',
    },
  ],
  rows: [['collection', 'description']],
};

const dataToRows = (fieldData, rowFields) =>
  rowFields.map((row) => [
    ...row.map((fieldName) =>
      fieldData.find((field) => field.name === fieldName)
    ),
  ]);

export const advancedSearchFields = {
  sources: {
    data: [...sources.data],
    rows: dataToRows(sources.data, sources.rows),
  },
  entries: {
    data: [...entries.data],
    rows: dataToRows(entries.data, entries.rows),
  },
  collections: {
    data: [...collections.data],
    rows: dataToRows(collections.data, collections.rows),
  },
};
