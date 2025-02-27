export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type ViaCEPAddressError = {
  error: boolean | string;
};

export type CEP = {
  cep: string;
};

export type AddressByCep = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade?: string;
  cidade?: string;
  uf: string;
};

export type CreatePaymentBody = {
  ticketId: number;
  cardData: {
    issuer: string;
    number: string;
    name: string;
    expirationDate: string;
    cvv: string;
  };
};

export type TicketId = {
  ticketId: string | number;
};
