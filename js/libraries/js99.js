const JS99 = (function () {
    "use strict";
    const alert99 = function (event) {
        alert(event.target.value);
    };
    
    const explode = function (event) {
        alert("boom");
    };
    
    const isGoodPassword = function (event) {
        if (event.target.value.length < 8) {
            alert("this Password is not secure");
        }
        //add more rules here ...
    };
    return Object.freeze({
        "alert": alert99,
        "explode": explode,
        "isGoodPassword": isGoodPassword
    });
}());

/*usage:

*/