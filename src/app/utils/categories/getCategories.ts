export default async function getCategories(url: string) {
    const response = await fetch(url);
    return response.json();
}