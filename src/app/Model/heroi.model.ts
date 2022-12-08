import { Sinergias } from "./sinergias.model"
import { Itens } from "./itens.model"

export class Heroi{
  id?: string
  heroiNome?: string
  foto?: string
  estrela?: number
  sinergias?: Sinergias[]
  itens?: Itens[]
}


