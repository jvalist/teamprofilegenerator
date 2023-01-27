const Employee = require ('../lib/Employee')
test ('testing Employee param',()=>{
    let E= new Employee('john')
    expect(E.name).toBe('john')
})