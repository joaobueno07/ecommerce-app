// definir o tipo do retorno
export default async function getProducts(url: string) {
    const response = await fetch(url);
    return response.json();
}