function showMessage() {
    let a = "AC () % /";
    let b = "7 8 9 *";
    let c = "4 5 6 -";
    let d = "1 2 3 +";
    let e = "0     =";
    let f = prompt("Калькулятор делает чётное не чётное и в консоли решает примеры!");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    if(f%2 == 0){
        console.log("Четное");
    }
    else if(f%2 != 0){
        console.log("не четное");
    }
    else{
        console.log("Введите корректное число");
    }
  }
  
  showMessage();  