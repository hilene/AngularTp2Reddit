export class Article {
    title: string;
    link: string;
    votes: number;
    /* Modifier le constructeur pour rendre le parametre vote optionnel */
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
       /*  si vote est indefini, sa valeur est 0  */ 
    }
    voteUp(): void {
        this.votes +=1;
    }
    voteDown(): void {
        this.votes -=1;
    }
}
