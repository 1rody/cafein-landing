<script lang="ts">

    const metrics = [
        {
            description: "CLIENTES",
            total: "500+"
        },
        {
            description: "ESTERLAS",
            total: "4.7"
        },
        {
            description: "ANOS",
            total: "10+"
        },
    ]

</script>

<section id="counter">
    <div class="bg-background lg:flex-nowrap flex-wrap w-full lg:w-fit -mt-10 lg:-mt-30 border-1 border-white/10 flex z-20 absolute lg:right-2 items-center justify-center">
        {#each metrics as metric, index (metric.description)}
            <div class="flex flex-col items-center justify-center px-3 py-3 lg:p-10">
                <h2 class="text-4xl text-white font-black">{metric.total}</h2>
                <p class="text-xl text-white">{metric.description}</p>
            </div>
        {/each}
    </div>
</section>