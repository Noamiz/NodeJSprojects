//We are creating our own module, so we could include it in our application. This module will return the date and time object

exports.myDateTime = function() {
    return Date();
};

//We use the 'export' keyword to make properties and methods available outside the module file.