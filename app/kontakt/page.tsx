import ContactForm from "@/components/ContactForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import ContactSectionKontakt from "@/components/ContactSectionKontakt";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center flex-grow">
        <Card>
          <CardHeader>
            <CardTitle>Formularz kontaktowy</CardTitle>
            <CardDescription>
              Wybierz odpowiedni typ formularza i wyślij nam wiadomość!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
      <ContactSectionKontakt />
    </div>
  );
};

export default Page;
