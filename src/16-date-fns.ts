//al hacer el import si el editor no muestra ninguna alerta, es indicador que soprota typescript
import { subDays, format } from "date-fns";

const date = new Date(1998,1,28); //0 = enero, 11 = diciembre
const rta = subDays(date, 30);
const str = format(rta, 'dd/MM/yyyy');

console.log('respuesta', str);