// Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    pesquisa_prontuario(nome) {
        for (let i = 0; i < this.itens.length; i++) {
            if (nome === this.itens[i]) {
                console.log(`${nome} está na pilha de prontuários.`);
                return;
            }
        }
        console.log(`${nome} não está na pilha de prontuários.`);
    }


    empilhar(item) {
      this.itens.push(item); // Adiciona um elemento ao topo da pilha
      console.log(`✔️ Prontuário do/da paciente '${item}' empilhado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha de prontuários atual:', this.itens.slice().reverse().join(' <- '));
    }
  }

  // Fila
  class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    add_paciente(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila de espera.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' foi atendido.`);
      pacientes_removidos = removido;
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('👤 Pacientes a serem atendidos:', this.itens.join(' -> ') || 'vazia');
    }
  }

  // ---------------------------------------------------------------------------------------------------

  // Variável que vai guardar o nome do paciente que foi removido mais recentemente
  var pacientes_removidos = "";

  // Criação dos objetos pilha e fila
  const pilha = new Pilha();
  const fila = new Fila();
  
  // Adicionando 5 pacientes a fila de atendimento
  fila.add_paciente("Mendes");
  fila.add_paciente("Ariela");
  fila.add_paciente("Rafael");
  fila.add_paciente("Tuvalu");
  fila.add_paciente("Pinulo");

  // Exibindo quem será o próximo a ser atendido
  console.log(`O próximo paciente a ser atendido é: ${fila.frente}`);

  // Dois pacientes serão atendidos e seus prontuários serão adicionados à pilha
  fila.desenfileirar();                 // Saída: 🚪 'Mendes' foi atendido.
  pilha.empilhar(pacientes_removidos);  // Saída: ✔️ Prontuário do/da paciente 'Mendes' empilhado.
  fila.desenfileirar();                 // Saída: 🚪 'Ariela' foi atendido.
  pilha.empilhar(pacientes_removidos);  // Saída: ✔️ Prontuário do/da paciente 'Ariela' empilhado.

  // Função que vai pesquisar pacientes na pilha de prontuários
  pilha.pesquisa_prontuario("Mendes");
  pilha.pesquisa_prontuario("Gabriel");
  pilha.pesquisa_prontuario("Ariel");

  // Imprimindo a fila e a pilha atual
  fila.imprimir();                      // Saída: 👤 Pacientes a serem atendidos: Rafael -> Tuvalu -> Pinulo
  pilha.imprimir();                     // Saída: 📦 Pilha de prontuários atual: Ariela <- Mendes
