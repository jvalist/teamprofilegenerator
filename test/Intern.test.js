const Intern = require ('../lib/Intern')
test ('testing Intern param',()=>{
    let E= new Intern('john')
    expect(E.name).toBe('john')
})