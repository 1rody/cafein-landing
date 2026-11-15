<script lang="ts">
    import type { Product } from "#lib/data/ProductMock.ts";
    let { product }: { product: Product } = $props();
    const price = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price);
</script>

<a href="/menu/{product.id}"  class="product-card border-1 duration-200 active:scale-95 border-black/0 hover:border-amber-400/50 gap-8 hover:scale-104 flex flex-col max-w-80 min-h-150 object-cover z-5 bg-amber-100/10 p-5">
    <img class="product-image w-full max-h-60" src={product.image} alt={product.title} />
    <h3 class="product-title text-white  text-4xl font-black uppercase text-center">{product.title}</h3>
    <p class="product-description text-gray-50 text-center">{product.description}</p>
    <p class="product-price text-white text-2xl font-bold text-center">{product.price}</p>         
</a>         