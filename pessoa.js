var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.olaMundo = function () {
        return "Olá Mundo!";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById("texto").textContent = p.olaMundo();
