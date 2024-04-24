import React from "react";
import ContactForm from "./ContactForm";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const FormDrawer = () => {
  return (
    <div className="mb-4">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="bg-white text-customBlue px-4 py-2 rounded-lg transition duration-300 hover:scale-105">
            NAPISZ DO NAS!
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Formularz kontaktowy</DrawerTitle>
              <DrawerDescription>
                Wybierz odpowiedni rodzaj formularza i napisz swoją wiadomość!
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <ContactForm />
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline" className="w-full mb-3">
                  Anuluj
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FormDrawer;
