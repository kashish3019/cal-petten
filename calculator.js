let data = process.argv;
let opr = data[2];
let a = Number(data[3]); 
let b = Number(data[4]); 

switch (opr) {
  case "add":
    console.log(a + b);
    break;
  case "sub":
    console.log(a - b);
    break;
  case "mul":
    console.log(a * b);
    break;
  case "div":
    console.log(a / b);
    break;
  case "mod":
    console.log(a % b);
    break;
  default:
    console.log("Invalid operator");
}
