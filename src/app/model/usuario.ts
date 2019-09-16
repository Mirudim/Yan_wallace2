import { Endereco } from './endereco';

export class Usuario {
    uid: string;
    nome: string;
    email: string;
    pws: string;
    endereco: Endereco = new Endereco;
}