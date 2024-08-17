class Node {
  constructor(data) {
    this.data = data; // Dado
    this.next = null; // Proximo elemento (vazio)
    this.previous = null; // Elemento anterior (vazio)
  }
}

class DoublyLinkedList {
  constructor() { // funcao construtora
    this.head = null; // cabeça (primeiro elemento) vazio
    this.tail = null; // calda (ultimo element) sempre vazio, utilizado para jogar o elemento atual (current)
    this.size = 0; // tamanho da lista, começa sempre em 0
  }

  add(data) {
    let newNode = new Node(data); // declarando newNode como o data do construtor da classe Node

    if (this.head === null) { // verificar se o primeiro elemento está vazio
      this.head = newNode; // head recebe newNode
      this.tail = newNode; // tail recebe newNode também
    } else { // se head nao estiver vazio
      this.tail.next = newNode; // tail se torna o próximo elemento vazio
      newNode.previous = this.tail; 
      this.tail = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Index fora dos limites!");
    }

    let newNode = new Node(data);
    let current = this.head;
    let previous = null;

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current
      newNode.previous = current.previous

      current.previous.next = newNode
      current.previous = newNode
    }

    this.size++
  }
}
