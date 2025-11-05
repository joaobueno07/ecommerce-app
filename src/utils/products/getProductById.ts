export default async function getProductById(url: string) {
    const response = await fetch(url);
    return response.json();
}