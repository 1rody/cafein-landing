<script lang="ts">
    import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";

    const coffeImages = [
        {
            description: "Cafeteria",
            image: coffeMock01
        },
    ]
</script>

<section id="about" class="bg-background lg:flex-nowrap flex-wrap p-10 lg:relative  max-h-screen lg:sticky top-[20px] h-screen flex  w-full  justify-between gap-10">

    <div class=" gap-4 hidden lg:flex overflow-hidden -mt-100  p-10 ">
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
    <div class="flex flex-col w-full h-screen text-center justify-center lg:w-1/2 lg:text-right">
        <h2 class="lg:text-10xl text-4xl  font-anton text-white">UM CAFE EXCLUSIVO </h2>
        <div class="w-full lg:items-end lg:justify-end items-center flex">
            <p class="text-xl text-white lg:max-w-200">Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.</p>
        </div>
        <div class="mt-8 w-full items-center justify-center flex lg:justify-end">
            <a class="px-7 hover:scale-105 active:scale-95 py-4 active:opacity-50 bg-orange-300 duration-150 text-lg  lg:text-2xl" href="#location">LOCALIZACAO</a>
            <a  class="px-7 hover:scale-105 active:scale-95 active:opacity-50 py-4 bg-foreground duration-150 text-lg lg:text-2xl" href="#products">CARDAPIO</a>
        </div>
    </div>
</section>