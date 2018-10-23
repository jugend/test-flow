// @flow

// const st:number = 'hello world'

function testMaybeType(value: ?number) {
  if (value) {
    return value * 2
  }
}

testMaybeType(undefined)

function testObjectType(obj: {a?: string}): void {
  console.log('>> Test Object Type')
  console.log(obj.a)
  // Throws an error
  // console.log(obj.b)
}

function testEmptyObject(obj: {}) {
  // Unknown key not allowed
  // console.log(obj.anyKey)

  // Throw an error
  // testObjectType(obj)
}

// Usealed object - no type defined
var test = {}
test.hello = 'abc'

function testObjectMap(obj: { [string]: mixed }) {
}

testObjectMap({ a: 'hello', x: 'new' })


// testEmptyObject({ a: 'hello' })
testObjectType({ b: true })

// testObjectType({})

// Object
function testUnsealedObject(obj: Object): {} {
  // Unknown key allowed
  obj.test = 'test'
  return obj
}
