var render_app = function(container){
    var rev_app_container = document.getElementById(container);

    var input_string = document.createElement("input");
    input_string.setAttribute("id", "input_string");
    input_string.setAttribute("class", "form-control");
    input_string.setAttribute("style", "width: 200px");
    input_string.setAttribute("placeholder", "Type Here");
   

    var operate_button = document.createElement("button");
    operate_button.setAttribute("id", "button");
    operate_button.setAttribute("class", "btn btn-success");
    operate_button.setAttribute("type", "button");
    operate_button.innerHTML = "REVERSE";

    var n_c_display = document.createElement("input");
    n_c_display.setAttribute("id", "output");
    n_c_display.setAttribute("class", "form-control");
    n_c_display.setAttribute("style", "width: 200px");
    n_c_display.setAttribute("placeholder", "Result");

    
    rev_app_container.appendChild(input_string);
    rev_app_container.appendChild(operate_button);
    rev_app_container.appendChild(n_c_display);
    


    operate_button.addEventListener('click', string_reverser_handler);

}

render_app("rev_app");