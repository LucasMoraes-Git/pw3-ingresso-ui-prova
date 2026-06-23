
import { Filme } from "./filme";

export interface Sessao {
    id: number;
    data?: string;
    horario?: string;
    preco?: number;
    sala: string;
    filme?: Filme;
}
