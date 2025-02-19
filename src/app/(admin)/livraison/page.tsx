"use client";
import { Pencil, Plus, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { livraisons } from "@/app/data";

export default function Livraison() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Liste des livraisons</h2>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Ajouter livraison
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Formulaire dajout de livraison</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="remorqueId" className="text-right">
                Remorque
              </Label>
              <Input id="remorqueId" name="remorqueId" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="client" className="text-right">
                Client
              </Label>
              <Input id="client" name="clientId" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="siteLivraison" className="text-right">
                Site de Livraison
              </Label>
              <Input
                id="siteLivraison"
                name="siteLivraisonId"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="produit" className="text-right">
                Produit a livrer
              </Label>
              <Input id="produit" name="produitId" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              <Plus className="w-4 h-4 " /> Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Table className="table-auto">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Remorques</TableHead>
            <TableHead>Produits</TableHead>
            <TableHead>Clients</TableHead>
            <TableHead>Sites de livraisons</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {livraisons.map((livraison, index) => (
            <TableRow key={livraison.id || index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{livraison.remorqueId}</TableCell>
              <TableCell>{livraison.clientId}</TableCell>
              <TableCell>{livraison.siteLivraisonId}</TableCell>
              <TableCell>{livraison.produitId}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => alert(`Modifier ${livraison.id}`)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => alert(`Supprimer ${livraison.id}`)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
