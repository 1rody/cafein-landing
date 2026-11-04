<script lang="ts">
    import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";

    const coffeImages = [
        {
            description: "Cafeteria",
            image: coffeMock01
        },
    ]
</script>

<section id="about" class="bg-background flex-wrap p-10 lg:relative  max-h-screen lg:sticky top-[20px] h-screen flex  w-full">
    <div class="flex gap-4 overflow-hidden -mt-200 lg:w-1/2 p-10 ">
        {#each coffeImages as  coffeImage, index (coffeImage.description)}
            <div class="flex flex-col overflow-hidden  items-center justify-center gap-5">
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
            </div>
            <div class="flex flex-col overflow-hidden  items-center justify-center gap-5">
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
                <img class="lg:max-w-80 md:max-w-2/2  h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
                <img class="lg:max-w-80 md:max-w-2/2 h-140 object-cover" src={`${coffeImage.image}`} alt={`${coffeImage.description}`}>
            </div>
        {/each}
    </div>
    <div class="flex flex-col lg:w-1/2 lg:max-w-200 text-right">
        <h2 class="text-20xl font-anton text-white">SOBRE </h2>
        <p class="text-xl text-white lg:max-w-">Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.</p>
        <div class="flex gap-2 items-center justify-end mt-8">
            <a class="px-7 hover:scale-105 active:scale-95 py-4 active:opacity-50 bg-orange-300 duration-150  text-2xl" href="#location">LOCATION</a>
            <a  class="px-7 hover:scale-105 active:scale-95 active:opacity-50 py-4 bg-foreground duration-150 text-2xl" href="#products">PRODUCTS</a>
        </div>
    </div>
</section>