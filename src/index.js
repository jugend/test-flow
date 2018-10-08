// @flow

// const st:number = 'hello world'

function testMaybeType(value: ?number) {
  if (value) {
    return value * 2
  }
}

testMaybeType(undefined)

function testObjectType(obj: {anyKey: string}) {
  console.log(obj.anyKey)
}

// Object
function testUnsealedObject(obj: Object): {} {
  obj.test = 'test'
  return obj
}
