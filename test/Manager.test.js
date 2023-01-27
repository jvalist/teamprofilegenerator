const Manager = require ('../lib/Manager')
test ('testing Manager param',()=>{
    let E= new Manager('john')
    expect(E.name).toBe('john')
})