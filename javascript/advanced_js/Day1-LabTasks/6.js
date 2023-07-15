var myObject = {
    id: 'SD-10',
    location: 'SV',
    addr: '123 st.',
    getSetGen: function(){
        for(key in this){
            if (typeof(this[key]) !== 'function'){
                var getter = ['get' + key.charAt(0).toUpperCase() + key.slice(1)];
                var setter = ['set' + key.charAt(0).toUpperCase() + key.slice(1)];

                var self = this; // store a reference to the current object
                 (function(k){
                    self[getter]= function(){
                        return self[k];
                    }

                    self[setter] = function(newValue){
                        self[k] = newValue;
                        return self[k];
                    }
                })(key)
            }
        }
    }
};


// myObject = {
//     id: 'SD-10',
//     location: 'SV',
//     addr: '123 st.'
// };

// function getSetGen(obj){
//     for(var key in obj){
//         if (typeof(obj[key]) !== 'function'){
//             var getter = ['get' + key.charAt(0).toUpperCase() + key.slice(1)];
//             var setter = ['set' + key.charAt(0).toUpperCase() + key.slice(1)];

//             (function(k){
//                 obj[getter]= function(){
//                     return obj[k];
//                 }

//                 obj[setter] = function(newValue){
//                     obj[k] = newValue;
//                     return obj[k];
//                 }
//             })(key)
//         }
//     }
// }

var user = {
    name: "Ali",
    age: 10
};
        
var o = Object.create(myObject);
o.getSetGen();
console.log(o.getLocation());

var u = Object.create(user);

var borrowFun = myObject.getSetGen.bind(u);
borrowFun();

// myObject.getSetGen.call(u);

u.setName("Ahmed");
console.log(u.getName());