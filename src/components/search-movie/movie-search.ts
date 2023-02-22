export interface MovieSearch {
  type: string;
  fiche: string;
  identifiantTitre: {
    identifiant: number;
    titre: string;
  };
  anneeSortie: number;
}
