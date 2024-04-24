import ContactForm from "./ContactForm";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogFormRestauracja = () => {
  return (
    <Dialog>
      <DialogTrigger>Przejdź do formularza kontaktowego</DialogTrigger>
      <DialogContent>
        <DialogTitle>Formularz kontaktowy</DialogTitle>
        <DialogDescription>
          Wypełnij poniższe pola i czekaj na naszą odpowiedź!
        </DialogDescription>
        <ContactForm defaultFormType="Restauracja" hideTypeSelect={true} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogFormRestauracja;
