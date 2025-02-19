import { chauffeurs } from "@/app/data";
import { Chauffeur } from "@/app/types";
import { NextResponse } from "next/server";

// recuperer un chauffeur via id
export async function GET(
  request: Request,
  params: { params: { id: string } }
) {
  const chauffeur = chauffeurs.find(
    (chauffeur) => chauffeur.id === parseInt(params.params.id)
  );
  if (!chauffeur) {
    return NextResponse.json(
      { error: "Chauffeur non trouvé" },
      { status: 404 }
    );
  }
  return NextResponse.json(chauffeur);
}
// modifier les informations partielles d'un chauffeur
export async function PATCH(
  request: Request,
  params: { params: { id: string } }
) {
  const body: Chauffeur = await request.json();
  const nom = body.nom;
  const prenom = body.prenom;
  //   const contact = body.contact;
  //   const documents = body.documents;
  const index = chauffeurs.findIndex(
    (chauffeur) => chauffeur.id === parseInt(params.params.id)
  );
  chauffeurs[index].prenom = prenom;
  chauffeurs[index].nom = nom;
  return Response.json(chauffeurs[index]);
}
// supprimer un chauffeur
export async function DELETE(
  request: Request,
  params: { params: { id: string } }
) {
  // recuperer l'index du chauffeur a delete
  const index = chauffeurs.findIndex(
    (chauffeur) => chauffeur.id === parseInt(params.params.id)
  );
  const deletedChauffeur = chauffeurs[index];
  chauffeurs.splice(index, 1);
  return Response.json(deletedChauffeur);
}
