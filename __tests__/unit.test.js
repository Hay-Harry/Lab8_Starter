// unit.test.js

const { test, expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('true phone number 651-445-6789', () =>{
    expect(functions.isPhoneNumber("651-445-6789")).toBe(true);
});
test('true phone number 123-456-7890', () =>{
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('false phone number $&(6d@da!~', () =>{
    expect(functions.isPhoneNumber("$&(6d@da!~")).toBe(false);
});
test('false phone number sssa!~', () =>{
    expect(functions.isPhoneNumber("sssa!~")).toBe(false);
});

//isEmail
test('true email iamtheemail@gmail.com', () =>{
    expect(functions.isEmail("iamtheemail@gmail.com")).toBe(true);
});
test('true email abc123@tree.com', () =>{
    expect(functions.isEmail("iamtheemail@gmail.com")).toBe(true);
});
test('false email 138sdfs.com', () =>{
    expect(functions.isEmail("138sdfs.com")).toBe(false);
});
test('false email ff.comgss@com', () =>{
    expect(functions.isEmail("ff.comgss@com")).toBe(false);
});

//isStrongPassword
test('true StrongPassword fg654_r', () =>{
    expect(functions.isStrongPassword("fg654_r")).toBe(true);
});
test('true StrongPassword a5165dsf', () =>{
    expect(functions.isStrongPassword("a5165dsf")).toBe(true);
});
test('false StrongPassword 1as', () =>{
    expect(functions.isStrongPassword("1as")).toBe(false);
});
test('false StrongPassword nszijfjnwdkjfhajkcfhisdfsdf113', () =>{
    expect(functions.isStrongPassword("nszijfjnwdkjfhajkcfhisdfsdf113")).toBe(false);
});

//isDate
test('true isDate 1/2/2077', () =>{
    expect(functions.isDate("1/2/2077")).toBe(true);
});
test('true isDate 11/19/2042', () =>{
    expect(functions.isDate("11/19/2042")).toBe(true);
});
test('false isDate 11/19sd/2042gg', () =>{
    expect(functions.isDate("11/19sd/2042gg")).toBe(false);
});
test('false isDate sd3fg4sd56', () =>{
    expect(functions.isDate("sd3fg4sd56")).toBe(false);
});

//isHexColor
test('true isHexColor #ffffff', () =>{
    expect(functions.isHexColor("#ffffff")).toBe(true);
});
test('true isHexColor #f12fff', () =>{
    expect(functions.isHexColor("#f12fff")).toBe(true);
});
test('false isHexColor #zzzzzz', () =>{
    expect(functions.isHexColor("#zzzzzz")).toBe(false);
});
test('false isHexColor sdvbsdg', () =>{
    expect(functions.isHexColor("sdvbsdg")).toBe(false);
});



