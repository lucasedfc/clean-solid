(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Product: ", {
        id,
        name: "OLED TV",
      });
    }

    saveProduct(product: Product) {
      console.log("Saving on database", product);
    }
  }

  class Mailer {
    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Sending email to clients", template, emailList);
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }
    loadProduct(id: number) {
      return this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      return this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['test@test.com'], 'to-admins');
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log("Adding to cart ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({
    id: 10,
    name: "OLED TV",
  });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
