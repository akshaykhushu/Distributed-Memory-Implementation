unsigned long
    hash(unsigned char *str)
    {
        unsigned long hash = 5381;
        int c;

        while (c = *str++)
            hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

        return hash;
    }
	
	HashTable.prototype.add = function(key, value) {
  var index = key.hashCode();
  var tuple = [key, value];
  var bucket = this._storage.get(index);
  if (bucket) { 
    for (var i = 0; i < bucket.length; i++) {  
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
      } else {
        bucket.push(tuple);
      }
    } 
  } else {
    this._storage.set(index, [tuple]);
  } 
};

HashTable.prototype.retrieve = function(key) {
  var index = key.hashCode();
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }   
  }
};