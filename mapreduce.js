// mapper should return an array of [{key:'somekey', value:'somevalue'}]
// reducer should return a single {key:'somekey', value:'somevalue'}
function mapReduce(i, mapper, reducer) {
 var intermediate = [];
 var output = [];
 for(var key in i) {
  var value = i[key];
  intermediate = intermediate.concat(mapper(key, value)); // adds to array
 }

 var groups = groupBy(intermediate);
 for(var key in groups) {
  var values = groups[key];
  output.push(reducer(key, values));
 }

 return output;
}

// list should be [{key:k, value:v}, ....] where key may be repeated.
// returns [{key, [v1, v2, v3...]}, ...] where key is *not* repeated.
function groupBy(list) {
 var ret = {};
 for (var i=0; i<list.length; i++) {
  var key = list[i].key;
  var value = list[i].value;
  if (!ret[key]) {
   ret[key] = [];
  }

  ret[key].push(value);
 }
 return ret;
}




function myMapper(key, value) {
 var ret = [];
 var words = normalizeText(value).split(' ');
 for (var i=0; i<words.length; i++) {
  ret.push({key:words[i], value:1});
 }
 return ret;
}

function myReducer(intermediateKey, values) {
 var sum = 0;
 for (var i=0; i<values.length; i++) {
  sum += values[i];
 }
 return {key:intermediateKey, value:sum};
}

function normalizeText(s) {
 s = s.toLowerCase();
 s = s.replace(/[^a-z]+/g, ' ');
 return s;
}

var i = {};
i.atxt = "The quick brown fox jumped over the lazy grey dogs.";
i.btxt = "Thats one small step for a man, one giant leap for mankind.";
i.ctxt = "Mary had a little lamb, Its fleece was white as snow; And everywhere that Mary went, The lamb was sure to go.";

var out = mapReduce(i, myMapper, myReducer);
