export class User {
  constructor(
    public name: string,
    public surname: string,
    public patronymic: string,
    public date: string,
    public gender: string,
    public country: string,
    public address?: string,
    public mSurname?: string,
    public codeWord?: string,
    public about?: string,
    public email?: string,
    public friendPhone?: string,
    public extraOpt?: string
  ) {}
}
