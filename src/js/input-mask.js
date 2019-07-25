// //masked input
// var telInp = $('input[type="tel"]');   
// telInp.each(function(){
// 	$(this).mask("+375(XX)XXX-XX-XX");
// });

// $.fn.setCursorPosition = function(pos) {
// if ($(this).get(0).setSelectionRange) {
// 	$(this).get(0).setSelectionRange(pos, pos);
// } else if ($(this).get(0).createTextRange) {
// 	var range = $(this).get(0).createTextRange();
// 	range.collapse(true);
// 	range.moveEnd('character', pos);
// 	range.moveStart('character', pos);
// 	range.select();
// }
// };
// $('input[type="tel"]').click(function(){
// 	$(this).setCursorPosition(5);  // set position number
// });




// // var Inputmask = require('inputmask');

// // //es6
// // // import Inputmask from "inputmask";

// // require("../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions");
// // var Inputmask = require("../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions");

// // //es6
// // // import "../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions";
// // // import Inputmask from "../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions";

// // var selector = document.querySelectorAll('input[type=tel]');
 
// // var im = new Inputmask("+375  (XX) XXX-XX-XX");
// // im.mask(selector);

// // $(document).ready(function(){
// //   $(selector).inputmask("+375  (XX) XXX-XX-XX");  //static mask
// // });

// // mask
// // let selector = document.querySelectorAll('input[type=tel]');

// // let im = new Inputmask('+375  (XX) XXX-XX-XX');

// // im.mask(selector);



import Inputmask from 'inputmask';

let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+375 (99) 999-99-99');

im.mask(selector);
