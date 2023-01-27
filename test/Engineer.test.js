const Engineer = require ('../lib/Engineer')
test ('testing Engineer param',()=>{
    let E= new Engineer('john')
    expect(E.name).toBe('john')
})