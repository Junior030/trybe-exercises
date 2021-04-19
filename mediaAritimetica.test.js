const  mediaAritimetica  = require("./mediaAritimetica");

describe('Media aritimetica 1', () => {
    it('A função recebe um array e retorna a media!', () => {
        expect(2.5).toEqual(mediaAritimetica([1,2,3,4]));
    })
});