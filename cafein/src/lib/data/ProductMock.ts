import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";
import coffeMock02 from "#lib/assets/backgrounds/bg2.jpeg";
import coffeMock03 from "#lib/assets/backgrounds/bg3.jpeg";
import coffeMock04 from "#lib/assets/backgrounds/bg4.jpeg";

export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    featured?: boolean;
}

export const products: Product[] = [
    {
        id: 'expresso',
        title: "Café Expresso",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 35.020,
        image: coffeMock01,
        featured: true,
    },
    {
        id: 'Cappuccino',
        title: "Cappuccino Cremoso",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 5.120,
        image: coffeMock02,
        featured: true,
    },
    {
        id: 'Baunilha',
        title: "Latte Baunilha",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 13.110,
        image: coffeMock03,
        featured: true,
    },
    {
        id: 'Chocolate',
        title: "Mocha Chocolate",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 5.99,
        image: coffeMock04,
        featured: true,
    },
    {
        id: 'Macchiato',
        title: "Macchiato",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 5.30,
        image: coffeMock01,
        featured: true,
    },
    {
        id: 'Cold',
        title: "Cold Brew",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: 5.030,
        image: coffeMock02,
        featured: true,
    },
    ]