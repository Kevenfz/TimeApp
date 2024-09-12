import { api } from "./api";

export const Cidades = {
  city: (city: string) =>
    api.get(`/weather?q=${city}&appid=0ec83eb50ebad909439b0e06ad5e1532`),
};
