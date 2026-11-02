<script lang="ts">
    import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";

    const coffeImages = [
        {
            description: "Cafeteria",
            image: coffeMock01
        },
    ]
</script>

<section id="about" class="bg-background flex-wrap p-10 h-screen items-center flex justify-center w-full">
    <div class="flex gap-4 lg:w-1/2 ">
        {#each coffeImages as  coffeImage, index (coffeImage.description)}
            <div class="flex flex-col overflow-hidden lg:h-full lg:flex-row items-center justify-center gap-5">
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
            </div>
            <div class="flex flex-col overflow-hidden lg:h-full lg:flex-row items-center justify-center gap-5">
                <img class="lg:max-w-80 md:max-w-2/2 -mt-40 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
            </div>
        {/each}
    </div>
    <div class="flex flex-col lg:w-1/2 lg:max-w-200 text-right">
        <h2 class="text-20xl font-anton text-white">SOBRE </h2>
        <p class="text-2xl text-white lg:max-w-">Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.</p>
    </div>
</section>