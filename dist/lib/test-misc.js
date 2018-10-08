

// const st:number = 'hello world'

function testMaybeType(value) {
  if (value) {
    return value * 2;
  }
}

testMaybeType(undefined);

function testObjectType(obj) {
  console.log(obj.anyKey);
}

// Object
function testUnsealedObject(obj) {
  obj.test = 'test';
  return obj;
}