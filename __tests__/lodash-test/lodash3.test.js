import _ from 'lodash';

const coll = [1, 2, 3];

test('filter', () => {
    expect(_.filter(coll, (v) => v % 2 === 0)).toEqual([2])
});
