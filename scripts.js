window.onload = function () {
    // window          - The window object,
    // .onload         - Adds the onLoad event to 'window', this makes the following function run when the window loads,
    // = function () { - This anonymous function holds all of the other javascript. This allows the javascript to run before the HTML, declaring the variables before they are called,
    // NOTE:           - Without this the console would return "null".

    /*    var userName = prompt("Please enter your name", "John Smith");
        if (userName != null) {
            document.getElementById("userName").innerHTML =
            "Hello, " + userName + ".";
        }*/
    // var userName =                                   - Creates a variable called 'userName',
    // prompt("Please enter your name", "Gabe Newell"); - Creates a prompt with the placeholder text of Gabe Newell,
    // if (userName != null) {                          - Begins an IF statement with the condition '.checked'. IF the box is checked then:,
    // document.getElementById("userName").innerHTML =  - 
    // "Hello, " + userName + ".";                      - 

    "use strict";
    var numpad = [
        "kp_slash",
        "kp_multiply",
        "kp_minus",
        "kp_home",
        "kp_uparrow",
        "kp_pgup",
        "kp_plus",
        "kp_leftarrow",
        "kp_five",
        "kp_rightarrow",
        "kp_end",
        "kp_downarrow",
        "kp_pgdn",
        "kp_enter",
        "kp_ins",
        "kp_del"
    ];
    // var numpad = [ - Creates a variable called 'numpad' and begins an array,
    // kp_slash       - The array holds 16 strings such as this,
    // NOTE:          - The strings represent the code Counterstrike has for each numpad button.

    document.getElementById("kp_slash").addEventListener('click', function () {
        document.getElementById("key").value = numpad[0];
    });

    document.getElementById("kp_multiply").addEventListener('click', function () {
        document.getElementById("key").value = numpad[1];
    });

    document.getElementById("kp_minus").addEventListener('click', function () {
        document.getElementById("key").value = numpad[2];
    });

    document.getElementById("kp_home").addEventListener('click', function () {
        document.getElementById("key").value = numpad[3];
    });

    document.getElementById("kp_uparrow").addEventListener('click', function () {
        document.getElementById("key").value = numpad[4];
    });

    document.getElementById("kp_pgup").addEventListener('click', function () {
        document.getElementById("key").value = numpad[5];
    });

    document.getElementById("kp_plus").addEventListener('click', function () {
        document.getElementById("key").value = numpad[6];
    });

    document.getElementById("kp_leftarrow").addEventListener('click', function () {
        document.getElementById("key").value = numpad[7];
    });

    document.getElementById("kp_five").addEventListener('click', function () {
        document.getElementById("key").value = numpad[8];
    });

    document.getElementById("kp_rightarrow").addEventListener('click', function () {
        document.getElementById("key").value = numpad[9];
    });

    document.getElementById("kp_end").addEventListener('click', function () {
        document.getElementById("key").value = numpad[10];
    });

    document.getElementById("kp_downarrow").addEventListener('click', function () {
        document.getElementById("key").value = numpad[11];
    });

    document.getElementById("kp_pgdn").addEventListener('click', function () {
        document.getElementById("key").value = numpad[12];
    });

    document.getElementById("kp_enter").addEventListener('click', function () {
        document.getElementById("key").value = numpad[13];
    });

    document.getElementById("kp_ins").addEventListener('click', function () {
        document.getElementById("key").value = numpad[14];
    });

    document.getElementById("kp_del").addEventListener('click', function () {
        document.getElementById("key").value = numpad[15];
    });
    // document.getElementById("kp_slash") - Searches the document for an element with the id 'kp_slash' which in this instance is a button,
    // .addEventListener('click',          - Adds an event listener that activates onclick (the on is removed in this instance),
    // function () {                        - Creates an anonymous function,
    // .value = numpad[0];                 - After getting the 'key' element this sets the 'keys' value to the string in numpad[0](kp_slash),
    // NOTE:                               - This allows the user to click the buttons instead of having to know the values as they are not what you would expect.

    var chk_kevlar = document.getElementById("kevlar");
    chk_kevlar.addEventListener('change', function () {
        if (chk_kevlar.checked) {
            document.getElementById("kevlar").setAttribute("value", "buy vest; ");
        } else {
            document.getElementById("kevlar").setAttribute("value", "");
        }
    });

    var chk_helmet = document.getElementById("helmet");
    chk_helmet.addEventListener('change', function () {
        if (chk_helmet.checked) {
            document.getElementById("helmet").setAttribute("value", "buy vesthelm; ");
        } else {
            document.getElementById("helmet").setAttribute("value", "");
        }
    });

    var chk_zeus = document.getElementById("zeus");
    chk_zeus.addEventListener('change', function () {
        if (chk_zeus.checked) {
            document.getElementById("zeus").setAttribute("value", "buy taser; ");
        } else {
            document.getElementById("zeus").setAttribute("value", "");
        }
    });

    var chk_defuser = document.getElementById("defuser");
    chk_defuser.addEventListener('change', function () {
        if (chk_defuser.checked) {
            document.getElementById("defuser").setAttribute("value", "buy defuser; ");
        } else {
            document.getElementById("defuser").setAttribute("value", "");
        }
    });

    var chk_molly = document.getElementById("molly");
    chk_molly.addEventListener('change', function () {
        if (chk_molly.checked) {
            document.getElementById("molly").setAttribute("value", "buy molotov; buy incgrenade; ");
        } else {
            document.getElementById("molly").setAttribute("value", "");
        }
    });

    var chk_decoy = document.getElementById("decoy");
    chk_decoy.addEventListener('change', function () {
        if (chk_decoy.checked) {
            document.getElementById("decoy").setAttribute("value", "buy decoy; ");
        } else {
            document.getElementById("decoy").setAttribute("value", "");
        }
    });

    var chk_he = document.getElementById("he");
    chk_he.addEventListener('change', function () {
        if (chk_he.checked) {
            document.getElementById("he").setAttribute("value", "buy hegrenade; ");
        } else {
            document.getElementById("he").setAttribute("value", "");
        }
    });

    var chk_smoke = document.getElementById("smoke");
    chk_smoke.addEventListener('change', function () {
        if (chk_smoke.checked) {
            document.getElementById("smoke").setAttribute("value", "buy smokegrenade; ");
        } else {
            document.getElementById("smoke").setAttribute("value", "");
        }
    });
    // var chk_kevlar =                                                       - Creates a variable called 'chk_kevlar' (chk = checkbox),
    // document.getElemebtById("kevlar");                                     - Searches the document for an element with the id 'kevlar', which in this instance is a checkbox,
    // chk_kevlar.addEventListener('change',                                  - Takes the variable 'chk_kevlar' and adds an event listener that activates onchange (the on is removed in this instance),
    // function () {                                                          - Creates an anonymous function,
    // if (chk_kevlar.checked) {                                              - Begins an IF statement with the condition '.checked'. IF the box is checked then:,
    // document.getElementById("kevlar").setAttribute("value", "buy vest; "); - Search the document for the 'kevlar' element and set the value attribute to 'buy vest',
    // } else {"                                                              - IF the box is NOT checked then:,
    // document.getElementById("kevlar").setAttribute("value", "");           - Search the document for the 'kevlar' element and set the value attribute to "", this is here because without this the generator will output 'undefined',
    // NOTE:                                                                  - For some reason the event listener had to be added separately and could not be bundled in with the variable assignment and grabbing of the element. This worked with the buttons but would give me random errors when tried with the checkboxes.

    var chk_flash = document.getElementById("flash");
    chk_flash.addEventListener('change', function () {
        if (chk_flash.checked) {
            document.getElementById("flash").setAttribute("value", "buy flashbang; ");
            document.getElementById("flashx2").setAttribute("disabled", "");
        } else {
            document.getElementById("flash").setAttribute("value", "");
            document.getElementById("flashx2").removeAttribute("disabled");
        }
    });

    var chk_flashx2 = document.getElementById("flashx2");
    chk_flashx2.addEventListener('change', function () {
        if (chk_flashx2.checked) {
            document.getElementById("flashx2").setAttribute("value", "buy flashbang; buy flashbang; ");
            document.getElementById("flash").setAttribute("disabled", "");
        } else {
            document.getElementById("flashx2").setAttribute("value", "");
            document.getElementById("flash").removeAttribute("disabled");
        }
    });
    // NOTE:                                                           - These checkboxes follow the same code as the ones above but with one extra line of code,
    // document.getElementById("flashx2").setAttribute("disabled",""); - When the 'flash' checkbox is checked the 'flashx2' checkbox becomes disabled.
    // NOTE:                                                           - This is due to the way Counterstrike works. The maximum number of flashes a person can have is 2. So by disabling one box when the other is ticked, It stops the user from creating a bind that attempts to buy three flashes.


    document.getElementById("update").addEventListener('click', function () {
        document.getElementById("output").appendChild(document.createTextNode("bind \"" + key.value + "\" \"" + helmet.value + kevlar.value + primary.value + secondary.value + smoke.value + flashx2.value + flash.value + defuser.value + he.value + molly.value + zeus.value + decoy.value + "\"" + "\r"));
    });
    // document.getElementById("update")     - Searches the document for an element with the id 'update', which in this instance is a button,
    // .addEventListener('click',            - Adds an event listener that activates onclick (the on is removed in this instance),
    // function () {                         - Creates an anonymous function,
    // document.getElementById("output")     - Searches the document for an element with the id 'output', which in this instance is a textarea,
    // .appendChild(document.createTextNode( - This appends a child onto the textarea and specifies it as a text node. As I have not created an element node for the text to go into, the text behaves just like the user has entered it,
    // NOTE:                                 - The information inside the text node could have been looped out rather than hand written but, due to the nature of Counterstrike, this is the most optimum was of buying, you always buy armor>weapon>nades>gear so I have manually set them in the correct order,
    // NOTE:                                 - I used the \" because I could not find a way to put speechmarks inside an array, I tried a few different methods but only managed to find luck with this.

    document.getElementById("formClear").addEventListener('click', function () {
        document.getElementById("generator").reset();
        document.getElementById("flash").removeAttribute("disabled");
        document.getElementById("flashx2").removeAttribute("disabled");
    });
    // document.getElementById("formClear")                                         - Searches the document for an element with the id 'formClear', which in this instance is a button,
    // .addEventListener('click',                                                   - Adds an event listener that activates onclick (the on is removed in this instance),
    // function () {                                                                - Creates an anonymous function,
    // document.getElementById("generator").reset();                                - When the button is clicked it resets the form with the id 'generator',
    // document.getElementById("flash").removeAttribute("disabled");                - Resets the 'flash' check box by removing the disabled attribute,
    // document.getElementById("flashx2").removeAttribute("disabled");              - And resets the 'flashx2' check box by removing the disabled attribute,
    // NOTE:                                                                        - After sending it to some friends to test, they found that filling in the form, ticking a flashbang and then clearing the form permanantly locked the flashbang box in its 'disabled' state.

    document.getElementById("outputClear").addEventListener('click', function () {
        document.getElementById("output").innerHTML = "";
        document.getElementById("flash").removeAttribute("disabled");
        document.getElementById("flash").checked = false;
        document.getElementById("flashx2").removeAttribute("disabled");
        document.getElementById("flashx2").checked = false;
    });
    // document.getElementById("outputClear")                        - Searches the document for an element with the id 'outputClear', which in this instance is a button,
    // .addEventListener('click',                                    - Adds an event listener that activates onclick (the on is removed in this instance),
    // function () {                                                 - Creates an anonymous function,
    // document.getElementById("output").innerHTML = "";             - Uses the .innerHTML property to overwrite the information within the textarea by writing an empty string,
    // document.getElementById("flash").removeAttribute("disabled"); - Resets the 'flash' check box by removing the disabled attribute,
    // document.getElementById("flash").checked = false;             - Resets the 'flash' check box by unchecking the box, it also does the same for the 'flashx2' box,
    // NOTE:                                                         - This both clears the form AND the output box for a complete reset of the page.


    // ====================================
    //             Clipboard.js
    // ====================================
    var btn = document.getElementById("copy");
    var clipboard = new Clipboard(btn);
    clipboard.on('success', function (e) {
        console.log(e);
    });
    clipboard.on('error', function (e) {
        console.log(e);
    });
    // Source: https://clipboardjs.com/
    // NOTE: I tried a lot of methods to get a button to copy the text when clicked, after some research it seems that a lot of browsers block this kind of functionality for security purposes.

    document.getElementById("date").innerHTML = String(Date());
    // document.getElementById("date") - Searches the document for an element with the id 'outputClear', which in this instance is a paragraph,
    // .innerHTML =                    - Writes the following code into the HTML,
    // String(Date());                 - Converts the information that the Date() function retrieves into a string.


    // =====================
    //        Logging
    // =====================

    console.log("Numpad is an " + typeof (numpad) + " with " + numpad.length + " " + typeof (numpad[0]) + "'s");
    // Logs information using the 'typeof' operator , measures the object with '.length' and gets the 'typeof' numpads contents.

    var i = "";
    for (i = numpad.length - 1; i >= 0; i--) {
        console.log(numpad[i]);
    }
    // var i = "";                                - 
    // for (i = numpad.length - 1; i >= 0; i--) { - 
    // console.log(numpad[i]);                    - 

    console.log("");
    // Places line space in the console


};
// Terminates the onload function

// ===============================
//            References
// ===============================

// http://makeagreatsite.com/javascript/how-execute-javascript-when-document-ready
// https://www.w3schools.com/jsref/obj_window.asp
// https://www.w3schools.com/jsref/event_onload.asp
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/js/js_if_else.asp
// https://www.w3schools.com/jsref/met_element_setattribute.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// https://www.w3schools.com/jsref/met_document_createtextnode.asp
// https://www.w3schools.com/js/js_strings.asp
// https://www.w3schools.com/jsref/met_form_reset.asp
// https://www.w3schools.com/jsref/met_node_removechild.asp
// https://www.w3schools.com/jsref/dom_obj_document.asp
// https://clipboardjs.com/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// https://www.w3schools.com/js/js_type_conversion.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/jsref/met_win_prompt.asp
// 

// ===============================
//            Dirty Links
// ===============================
// http://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent
// http://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-onclick-fu
// http://www.perlmonks.org/?node_id=85452
// These references are strange ones. I couldn't get the <br> tag to work at the end of my output function. It just wrote it as plain text. \r fixed this.
// W3c's explained nothing to me, reading the w3c then the stack overflow made what .appendchild does make sense.
// Same as the <br> tag, &quot; would also write in plain text so \" allowed this to work.