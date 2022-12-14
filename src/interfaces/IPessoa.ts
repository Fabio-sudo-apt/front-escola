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
  data: {
    name: string;
    email: string;
    idade: string;
    password: string;
    genero: string;
    turma: string;
    turno: string;
  };

  rua: string;
  bairro: string;
  n1: number;
  n2: number;
}
export interface IAlunoCreate {
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
  rua: string;
  bairro: string;
  disciplina: string;
}
export interface IProfessorCreate {
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
  max?: number,
  min?: number
}

export interface IAction {
  type: string;
  doc: {};
}
