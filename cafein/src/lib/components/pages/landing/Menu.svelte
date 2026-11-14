
<script>
import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";
import coffeMock02 from "#lib/assets/backgrounds/bg2.jpeg";
import coffeMock03 from "#lib/assets/backgrounds/bg3.jpeg";
import coffeMock04 from "#lib/assets/backgrounds/bg4.jpeg";


    let products = [
    {
        title: "Café Expresso",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock01
    },
    {
        title: "Cappuccino Cremoso",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock02
    },
    {
        title: "Latte Baunilha",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock03
    },
    {
        title: "Mocha Chocolate",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock04
    },
    {
        title: "Macchiato",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock01
    },
    {
        title: "Cold Brew",
        description: "Café expresso feito com grãos selecionados e torra artesanal, servido em uma xícara pequena e intensa.",
        price: "R$ 5,00",
        image: coffeMock02
    },
    ]
</script>
<section  id="products" class="bg-background lg:relative  p-10 lg:sticky top-[40px] flex flex-col w-full items-center gap-10">
    <div class="flex w-full items-center lg:flex-nowrap flex-wrap lg:justify-between  justify-center lg:text-left text-center">
        <h2 class="text-20xl font-anton mt-25 text-white w-full uppercase"> MENU  </h2>
        <a href="/menu" class="text-amber-500 w-42 hover:text-amber-300 underline">VER TODO O MENU</a>
    </div>
        <div class="maps flex flex-wrap items-center justify-center lg:gap-20 gap-10">
            {#each products as product}
                <div class="product-card gap-8 flex flex-col max-w-80 min-h-150 object-cover z-5 bg-amber-100/10 p-5">
                    <img class="product-image w-full max-h-60" src={product.image} alt={product.title} />
                    <h3 class="product-title text-white  text-4xl font-black uppercase text-center">{product.title}</h3>
                    <p class="product-description text-gray-50 text-center">{product.description}</p>
                    <p class="product-price text-white text-2xl font-bold text-center">{product.price}</p>
                    
                </div>
                
            {/each}
        </div>
</section>