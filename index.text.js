import { sum } from "./index.js";

/*
test with throw 

const actual = sum(2, 1);
const expected = 3;

if (actual !== expected) {
    throw new Error(`${actual} was not equal to ${expected}`);
}*/


 function test(title, cb) {
     try {
         cb();
         console.log(`ok ${title}`);
     } catch (err) {
         console.log(`not ok ${title}`);
     }
}
    
test("1 +2 should equal 3", function () {
    const actual = sum(2, 1);
    const expected = 4;
   
    expect(actual).toBe(expected);
});

test("150 + 200 should equal 350", function () {
    const actual = sum(150, 200);
    const expected =350;
    expect(actual).toBe(expected);
});


function expect(actual) {
    return {
     toBe: function (expected) {
        if (actual !== expected) {
             throw new Error(`${actual} was not equal to ${expected}`);
                
            }
        }
    };
}
