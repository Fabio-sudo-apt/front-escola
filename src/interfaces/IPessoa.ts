export interface IPessoa {
  data: {
    id: string;
    name: string;
    email: string;
    idade: string;
    password: string;
    genero: string;
    turma: string;
    turno: string;
  };
  disciplina: string;
  rua: string;
  bairro: string;
  n1: number;
  n2: number;
}
type genero = "Masculino" | "Feminino" | "Outros";

export interface IAluno {
  name: string;
  email: string;
  idade: string;
  password: string;
  genero: string;
  turma: string;
  turno: string;
  rua: string;
  bairro: string;
  n1: number;
  n2: number;
}
export interface IProfessor {
  id: string;
  name: string;
  email: string;
  idade: string;
  password: string;
  genero: string;
  turma: string;
  turno: string;

  rua: string;
  bairro: string;
  disciplina: string;
}

export interface IpropsArray {
  dataArray: IPessoa[];
}

export interface InputFrom {
  name: string;
  type?: any;
  placeholder?: string;
  defaultParam?: any;
}

export interface IAction {
  type: string;
  doc: {};
}
