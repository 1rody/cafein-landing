<script lang="ts">
        import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";
        import coffeBrand from "#lib/assets/favicon.svg";

</script>
<style>
    .w-infinite{
        width: 200%;
        white-space: nowrap;
        overflow-x: auto;
    }
</style>

<section id="location" class="bg-white lg:h-screen lg:relative overflow-hidden p-5 lg:sticky top-[2px] flex flex-col w-full justify-center items-center gap-10">
        <div class="flex w-full lg:flex-nowrap gap-5 flex-wrap justify-between pp5">
            <div class=" lg:max-w-2/3 w-full lg:h-104 ">
                <img src={coffeMock01} class="w-200 lg:h-180 h-100 object-cover" alt="Café">
            </div>
            <div class="text-xl flex flex-col text-right gap-8 lg:max-w-1/2">
                <h2 class="text-3xl font-bold"><span class="bg-black text-white uppercase">Aberto das 5:00 às 23:00</span></h2>
                <p>Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.</p>

                <p>Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.</p>
            </div>
        </div>
        <div class="flex items-center w-full justify-center lg:justify-end gap-5 ">
            <h2 class="lg:text-7xl text-5xl font-anton  text-black uppercase"> Estabelecimentos </h2>
            <div class="bg-black hidden h-34 w-34 items-center justify-center lg:flex">
                <img src={coffeBrand} alt="Café">
            </div>
        </div>    
</section>