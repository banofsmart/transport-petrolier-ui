// Types de données

export type Utilisateur = {
  id: number;
  nom: string;
  role: "admin" | "chauffeur" | "client" | "autre";
  email: string;
};

export type Produit = {
  id: number;
  nom: string;
  description: string;
};

export type Client = {
  id: number;
  nom: string;
  contact: string;
  adresse: string;
};

export type SiteLivraison = {
  id: number;
  nom: string;
  distance: number; // en km
  prixLivraison: number; // en dollar par exemple
};

export type Chauffeur = {
  id: number;
  nom: string;
  prenom: string;
  contact: string;
  documents: string[];
};

export type Camion = {
  id: number;
  tracteur: {
    id: number;
    chauffeurId: number; // référence à un chauffeur
  };
  remorque: {
    id: number;
    immatriculation: string;
  };
};

export type Livraison = {
  id: number;
  remorqueId: number;
  clientId: number;
  siteLivraisonId: number;
  produitId: number;
};
export type LivraisonP = {
  id: number;
  remorqueId: Camion;
  clientId: Client;
  siteLivraisonId: SiteLivraison;
  produitId: Produit;
};
