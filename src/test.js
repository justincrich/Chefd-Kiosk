

xdescribe('Environment Variables',function(){
    test('API URL Avaliable',function(){
        expect(process.env.REACT_APP_CORDIAL_API).toBeDefined()
    })
    test('API Token Avaliable',function(){
        expect(process.env.REACT_APP_CORDIAL_TOKEN).toBeDefined()
    })
})