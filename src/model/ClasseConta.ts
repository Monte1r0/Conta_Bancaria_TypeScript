export class Conta{

    //Definir os Atributos da classe (Caracteristicas)

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Definimos o Método construtor, responsável por criar os objetos da classe. 
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    // Definindo cada Atributo
	public get numero(): number {
		return this._numero;
	}
 
	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}
 
	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}
  
	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}
    
	public set saldo(value: number) {
		this._saldo = value;
	}

    // Método para sacar dinheiro da conta

    public sacar(valor: number): boolean{
        if(this._saldo < valor){
            console.log("Saldo Insuficiente!!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    // Método Depositar
    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
        
    }


    //Método para vizualizar todos os dados do Objeto
    public visualizar(): void{
        
        


        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
            break;
            case 2:
                tipo = "Conta Poupança";
            break;
        }
        console.log("\n************************************");
        console.log("\n Dados da conta");
        console.log("\n************************************");
        console.log(`\nNumeroda conta: ${this._numero}`);
        console.log(`\nNumeroda agencia: ${this._agencia}`);
        console.log(`\nTipo da Conta: ${tipo}`);
        console.log(`\nTitular da Contar: ${this._titular}`);
        console.log(`\nSaldo: ${this._saldo.toFixed(2)}`);
    }
}