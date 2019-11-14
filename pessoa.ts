class Pessoa {
  private nome: string;
  private idade: number;

  olaMundo(): string {
      return "Olá Mundo!";
  }
}

let p = new Pessoa();

document.getElementById("texto").textContent = p.olaMundo();