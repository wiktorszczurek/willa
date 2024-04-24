"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const formSchema = z.object({
  formType: z.enum(["Wesele", "Klub", "Restauracja", "Menu", "Pokoje", "Inne"]),
  fullName: z.string().min(1).max(50),
  emailAdress: z.string().email(),
  phone: z.string().min(9).max(9),
  subject: z.string().min(1).max(50),
  formContent: z.string().min(1).max(1000),
});

interface ContactFormProps {
  defaultFormType?: z.infer<typeof formSchema.shape.formType>;
  hideTypeSelect?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  defaultFormType,
  hideTypeSelect = false,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formType: defaultFormType || "Inne",
      emailAdress: "",
      fullName: "",
      phone: "",
      subject: "",
      formContent: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        formType: values.formType,
        fullName: values.fullName,
        emailAdress: values.emailAdress,
        phone: values.phone,
        subject: values.subject,
        formContent: values.formContent,
      }),
    });

    if (response.ok) {
      alert("Wiadomość wysłana!");
    } else {
      alert("Wystąpił błąd formularza. Prosimy o kontakt telefoniczny!");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-3"
      >
        {!hideTypeSelect && (
          <FormField
            control={form.control}
            name="formType"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Rodzaj formularza*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={defaultFormType}
                    disabled={hideTypeSelect}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz rodzaj formularza" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Wesele">Wesele</SelectItem>
                      <SelectItem value="Klub">Klub</SelectItem>
                      <SelectItem value="Restauracja">Restauracja</SelectItem>
                      <SelectItem value="Menu">Menu</SelectItem>
                      <SelectItem value="Pokoje">Pokoje</SelectItem>
                      <SelectItem value="Inne">Inne</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}
        <FormField
          control={form.control}
          name="emailAdress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Adres E-Mail*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Wpisz adres E-Mail"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Imię i nazwisko*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Wpisz swoje imię i nazwisko"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Numer telefonu*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Numer telefonu"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Temat*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Wpisz temat wiadomości"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="formContent"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Treść wiadomości*</FormLabel>
                <FormControl>
                  <Textarea placeholder="Wpisz treść wiadomości" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Wyślij
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
