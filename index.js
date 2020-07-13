const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iterate) {
      const newCollection = Array.isArray(collection)? collection.slice(): Object.values(collection)

      for(let i = 0; i < newCollection.length; i++){
        iterate(newCollection[i])
      }
      return collection
    },

    map: function(collection, cb) {
      if(!collection instanceof Array){
        collection = Object.values(collection)
      }
      const newArr = []
      for(let i = 0; i < collection.length; i++){
        newArr.push(cb(collection[i]))
      }
      return newArr
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
