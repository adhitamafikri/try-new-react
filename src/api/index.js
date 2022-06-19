export function searchItems({ keyword = "" }) {
  return new Promise(async (resolve, reject) => {
    try {
      const timeout = await setTimeout(() => {
        const dummy = [
          { id: 1, name: "Balenciaga Speed Trainer" },
          { id: 2, name: "Balenciaga White" },
          { id: 3, name: "Nike AF 1" },
          { id: 4, name: "Adidas Soft" },
        ];
        const items =
          dummy.filter((x) =>
            x.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
          ) || [];
        const response = {
          data: [...items],
        };
        console.log("from heere", response);
        clearTimeout(timeout);
        resolve(response);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
