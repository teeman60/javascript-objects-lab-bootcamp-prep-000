var recipes = object{}
function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]: value})
    //recipes['key']= value
}
