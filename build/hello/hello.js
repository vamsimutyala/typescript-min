/**
 * name
 */
var hello = (function () {
    function hello(a) {
        this.hello = a;
    }
    return hello;
}());
document.body.innerHTML = new hello('hello world').hello;
