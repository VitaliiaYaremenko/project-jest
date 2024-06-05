import _ from 'lodash';

test('includes', () => {
    const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

    expect(_.includes(coll, 3)).toBe(true);
    expect(_.includes(coll, 11)).toBe(false);
});
