<script lang="ts">
    import ProductCard from "#lib/components/pages/shared/ProductCard.svelte";
    import { products } from "#lib/data/ProductMock.ts";

</script>

<section  id="products" class="bg-background lg:relative  p-10 lg:sticky top-[40px] flex flex-col w-full items-center gap-10">
    <div class="flex w-full items-center lg:flex-nowrap flex-wrap lg:justify-between  justify-center lg:text-left text-center">
        <h2 class="text-20xl font-anton mt-25 text-white w-full uppercase"> NOSSOS PRODUTOS  </h2>
    </div>
        <div class="maps flex flex-wrap items-center justify-center lg:gap-20 gap-10">
            {#each products as product (product.id)}
                <ProductCard {product} />
            {/each}
        </div>
</section>