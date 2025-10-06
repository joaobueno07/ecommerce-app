import { MercadoPagoConfig } from 'mercadopago';

export const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_TOKEN!,
    options: {timeout: 10000}
});
