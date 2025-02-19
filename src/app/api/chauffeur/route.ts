import { chauffeurs } from "@/app/data";
import { Chauffeur } from "@/app/types";

// liste des chauffeurs
export async function GET() {
  return Response.json(chauffeurs);
}

// ajouter un chauffeur
export async function POST(request: Request) {
  const chauffeur: Chauffeur = await request.json(); // recuperer le corps de la requete
  const newChauffeur = {
    id: chauffeurs.length + 1,
    nom: chauffeur.nom,
    prenom: chauffeur.prenom,
    contact: chauffeur.contact,
    documents: chauffeur.documents,
  };
  chauffeurs.push(newChauffeur);
  return new Response(JSON.stringify(newChauffeur), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
