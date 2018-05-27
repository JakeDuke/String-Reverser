function string_reverser_handler() {
    var a;
    var pre_a = document.getElementById("input_string").value;
    if (pre_a == '') {
        a = undefined; 
    } else {
        a = pre_a;
    }

    var result = reversed_strings(a);

    var outputbox = document.getElementById("output")
    outputbox.value = result;

    
}