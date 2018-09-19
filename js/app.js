$(function(){

    // All DOM code goes in here, so that the DOM is fully loaded - prior to manipulation.
    // Reference to the input from the DOM, cache some DOM element(s)

    // Element Reference

    var $textBox = $('input');
    $textBox.focus();
    var $submitBtn = $('main > button');
    var $ul = $('ul');

    // $naming Useful to know when we are dealing with a jQuery object 

    $submitBtn.on('click', function(e){
        var todoText = $textBox.val(); //store in a variable, just a string not a jQuery object
        var $li = $(`<li>${todoText} <button>X</button></li>`); //pointy brackets CREATES A NEW ELEMENT, $ has nothing to do with jQuery in templit and backticks make template literals
        $ul.append($li);
        $textBox.val("");
        $textBox.focus();
    });

    $ul.on('click', 'li > button', function (e) {
        $(this).closest('li').css({'text-decoration-line':'line-through'});
    });

});