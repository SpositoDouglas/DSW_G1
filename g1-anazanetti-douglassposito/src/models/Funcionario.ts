export class Funcionario{
            nome: string;
            tempoDeEmpresa: number;
            cargo: string;
            salario: number;

        constructor(nome:string, tempoDeEmpresa: number, cargo:string, salario: number){
            this.nome= nome;
            this.tempoDeEmpresa=tempoDeEmpresa;
            this.cargo=cargo;
            this.salario=salario;
        }


    calculaBonus():number{
        
        if(this.cargo="Funcionario"){
            return Number(this.salario*0.1);
        }     
        else if(this.cargo="Gerente"){
            return Number(this.salario*0.2);
        }
        else{
            return Number(this.salario*0.3);
        }
    }
}