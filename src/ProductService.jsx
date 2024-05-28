import products from "./products-small"; // Ensure the correct path

export class ProductService {
  getProductsMini() {
    return new Promise((resolve, reject) => {
      try {
        resolve(products.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        reject([]);
      }
    });
  }
}
