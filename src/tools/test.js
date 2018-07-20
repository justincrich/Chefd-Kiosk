import validate from './validator';

describe('validator tests',function(){
    test('"" to be invalid',()=>{
        expect(validate('')).toEqual(false);
    })
    test('" " to be invalid',()=>{
        expect(validate(' ')).toEqual(false);
    })
    describe('emails',function(){
        test('"justin@chefd to be invalid',()=>{
            expect(validate('justin','email')).toEqual(false);
        })
        test('"justin@chefd.com" to be valid',()=>{
            expect(validate('justin@chefd.com','email')).toEqual(true);
        })
        test('"justin@chefd.net" to be valid',()=>{
            expect(validate('justin@chefd.net','email')).toEqual(true);
        })
    })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
