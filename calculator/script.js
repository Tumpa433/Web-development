let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // for select all buttons

let string = "";
let arr = Array.from(buttons); //its give a arrey of buttons
  // forEach loop on arr
arr.forEach(button => {         //arrow function  =>
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);    // eval is a enbuild function in js...its help to evaluate mathematically
            input.value = string;     // show result in input
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);  // for remove last one
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})