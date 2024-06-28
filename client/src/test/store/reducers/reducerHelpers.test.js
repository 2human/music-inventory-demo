import {
  sortProperties,
  sortedResults,
  updatedResults,
} from '../../../store/reducers/reducerHelpers';

describe('reducerHelpers', () => {
  describe('sortProperties', () => {
    it('sorts the column in ascending order when oldSortBy is undefined', () => {
      const oldSortBy = undefined;
      const column = 'col1';
      expect(sortProperties(oldSortBy, column)).toMatchObject({
        column,
        order: 'ascending',
      });
    });

    it('sorts the column by descending if sorting by same column', () => {
      const column = 'col1';
      const oldSortBy = { column, order: 'ascending' };
      expect(sortProperties(oldSortBy, column)).toMatchObject({
        column,
        order: 'descending',
      });
    });

    it('sorts the column in ascending order if old column is defined and sorting by new column', () => {
      const column = 'col1';
      const oldSortBy = { column: 'col2', order: 'ascending' };
      expect(sortProperties(oldSortBy, column)).toMatchObject({
        column,
        order: 'ascending',
      });
    });
  });

  describe('sortedResults', () => {
    it('sorts the results in ascending order when sortBy order is ascending', () => {
      const results = [
        { col1: 'data2' },
        { col1: 'data1' },
        { col1: 'data3' },
      ];
      const sortBy = { column: 'col1', order: 'ascending' };
      expect(sortedResults(results, sortBy)[0].col1).toEqual('data1');
      expect(sortedResults(results, sortBy)[2].col1).toEqual('data3');
    });

    it('sorts the results in descending order when sortBy order is descending', () => {
      const results = [
        { col1: 'data2' },
        { col1: 'data1' },
        { col1: 'data3' },
      ];
      const sortBy = { column: 'col1', order: 'descending' };
      expect(sortedResults(results, sortBy)[0].col1).toEqual('data3');
      expect(sortedResults(results, sortBy)[2].col1).toEqual('data1');
    });

    it('sorts results by the collection column second when sortBy columns are equal', () => {
      const resultsWithCollection = [
        { col1: 'data1', collection: 'coll2' },
        { col1: 'data1', collection: 'coll3' },
        { col1: 'data1', collection: 'coll1' },
      ];

      const sortByAsc = { column: 'col1', order: 'ascending' };
      expect(
        sortedResults(resultsWithCollection, sortByAsc)[0].collection
      ).toEqual('coll1');
      expect(
        sortedResults(resultsWithCollection, sortByAsc)[2].collection
      ).toEqual('coll3');

      const sortByDesc = { column: 'col1', order: 'descending' };
      expect(
        sortedResults(resultsWithCollection, sortByDesc)[0].collection
      ).toEqual('coll3');
      expect(
        sortedResults(resultsWithCollection, sortByDesc)[2].collection
      ).toEqual('coll1');
    });

    it('sorts results by the sourceNumber column third when sortBy and collection columns are equal', () => {
      const resultsWithCollectionSourceNum = [
        { col1: 'data1', collection: 'coll1', sourceNumber: 'src2' },
        { col1: 'data1', collection: 'coll1', sourceNumber: 'src3' },
        { col1: 'data1', collection: 'coll1', sourceNumber: 'src1' },
      ];

      const sortByAsc = { column: 'col1', order: 'ascending' };
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByAsc)[0]
          .sourceNumber
      ).toEqual('src1');
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByAsc)[2]
          .sourceNumber
      ).toEqual('src3');

      const sortByDesc = { column: 'col1', order: 'descending' };
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByDesc)[0]
          .sourceNumber
      ).toEqual('src3');
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByDesc)[2]
          .sourceNumber
      ).toEqual('src1');
    });

    it('sorts results by the id column fourth when sortBy, collection, and sourceNumber columns are equal', () => {
      const resultsWithCollectionSourceNum = [
        {
          col1: 'data1',
          collection: 'coll1',
          sourceNumber: 'src1',
          id: 3,
        },
        {
          col1: 'data1',
          collection: 'coll1',
          sourceNumber: 'src1',
          id: 1,
        },
        {
          col1: 'data1',
          collection: 'coll1',
          sourceNumber: 'src1',
          id: 2,
        },
      ];

      const sortByAsc = { column: 'col1', order: 'ascending' };
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByAsc)[0].id
      ).toEqual(1);
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByAsc)[2].id
      ).toEqual(3);

      const sortByDesc = { column: 'col1', order: 'descending' };
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByDesc)[0]
          .id
      ).toEqual(3);
      expect(
        sortedResults(resultsWithCollectionSourceNum, sortByDesc)[2]
          .id
      ).toEqual(1);
    });

    it('sorts the data by the pageAdjuster column second for data with the pageAdjuster property', () => {
      const resultsWithPageAdjuster = [
        {
          col1: 'data1',
          collection: 'col',
          sourceNumber: 1,
          pageAdjuster: 2.5,
        },
        {
          col1: 'data1',
          collection: 'col',
          sourceNumber: 1,
          pageAdjuster: 2.9,
        },
        {
          col1: 'data1',
          collection: 'col',
          sourceNumber: 1,
          pageAdjuster: 2,
        },
      ];

      const sortByAsc = { column: 'col1', order: 'ascending' };
      expect(
        sortedResults(resultsWithPageAdjuster, sortByAsc)[0]
          .pageAdjuster
      ).toEqual(2);
      expect(
        sortedResults(resultsWithPageAdjuster, sortByAsc)[2]
          .pageAdjuster
      ).toEqual(2.9);

      const sortByDesc = { column: 'col1', order: 'descending' };
      expect(
        sortedResults(resultsWithPageAdjuster, sortByDesc)[0]
          .pageAdjuster
      ).toEqual(2.9);
      expect(
        sortedResults(resultsWithPageAdjuster, sortByDesc)[2]
          .pageAdjuster
      ).toEqual(2);
    });
  });

  describe('updatedResults', () => {
    const results = [
      { id: 998, field1: 'fieldvalue1' },
      { id: 999, field1: 'fieldvalue2' },
    ];

    it('returns the original results by default', () => {
      expect(updatedResults('', results)).toEqual([...results]);
    });

    it('returns the updated results when row is edited', () => {
      const editedRow = { id: 999, field1: 'newvalue' };
      expect(updatedResults('edit', results, editedRow)).toEqual([
        { id: 998, field1: 'fieldvalue1' },
        editedRow,
      ]);
    });

    it('returns the updated results when data is deleted', () => {
      const deletedRow = { id: 999, field1: 'newvalue' };
      expect(updatedResults('delete', results, deletedRow)).toEqual([
        { id: 998, field1: 'fieldvalue1' },
      ]);
    });

    it('returns the updated results when data is added', () => {
      const createdRow = { id: 997, field1: 'createdvalue' };
      expect(updatedResults('create', results, createdRow)).toEqual([
        ...results,
        createdRow,
      ]);
    });
  });
});
