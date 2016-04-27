
/**
 * name
 */
class hello {
    hello : string;
    constructor(a : string) {
       this.hello = a;  
    } 
    
}

document.body.innerHTML = new hello('hello world').hello;