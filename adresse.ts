export class Adresse {
    private rue: string;
    private cp: string
    private ville: string;
  
    constructor(rue: string, cp: string, ville: string) {
      this.rue = rue;
      this.cp = cp;
      this.ville = ville;
    }

    public getRue(): string {
        return this.rue;
    }

    public getCp(): string {
        return this.cp;
    }

    public getVille(): string {
        return this.ville;
    }

    public setRue(rue: string): void {
        this.rue = rue;
    }

    public setCp(cp: string): void {
        this.cp = cp;
    }

    public setVille(ville: string): void {
        this.ville = ville;
    }

    public getFullAdresse(): string {
        return this.rue + this.cp + this.ville;
    }
  }
  