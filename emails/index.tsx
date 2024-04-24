import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WillaKontaktProps {
    formType: string;
    name: string;
    emailAdress: string;
    phone: string;
    subject: string;
    formContent: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const WillaKontaktEmail = ({
    formType, name, emailAdress, phone, subject, formContent
  }: WillaKontaktProps) => (
    <Html>
      <Head />
      <Preview>
        Wiadomość kontaktowa.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://i.imgur.com/mUreWd5.png`}
            width="99"
            height="81"
            alt="Logo Willa"
            style={logo}
          />
          <Text style={paragraph}>
            Witaj! Otrzymałeś wiadomość
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Willa Poprad, Rytro 306, 33-343 Rytro, tel. 18 44 002 11
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default WillaKontaktEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  