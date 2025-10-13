export async function createProduct(url: string, {arg}: {arg: any}) {
    const response = await fetch(url, {
        method: "POST",
        body: arg
    });

    return response;
}