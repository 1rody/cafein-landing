<script lang="ts">
    import coffeMock01 from "#lib/assets/backgrounds/Bg-Canvas.png";
    import coffeMock02 from "#lib/assets/backgrounds/bg2.jpeg";
    import coffeMock03 from "#lib/assets/backgrounds/bg3.jpeg";
    import coffeMock04 from "#lib/assets/backgrounds/bg4.jpeg";

    const coffeImages = [
        {
            description: "Cafeteria",
            image: coffeMock03
        },
        {
            description: "Cafeteria 2",
            image: coffeMock02
        },

        {
            description: "Cafeteria 4",
            image: coffeMock03
        },
        {
            description: "Cafeteria 5",
            image: coffeMock01
        },
        {
            description: "Cafeteria 6",
            image: coffeMock02
        },

        {
            description: "Cafeteria 7",
            image: coffeMock04
        }
    ]

    const heights = ["h-72", "h-96", "h-64", "h-80"];

    const col1 = coffeImages.filter((_, i) => i % 2 === 0);
    const col2 = coffeImages.filter((_, i) => i % 2 !== 0);

    const columns = [
        { items: [...col1, ...col1], duration: "40s" },
        { items: [...col2, ...col2], duration: "55s" }
    ];
</script>

<section id="about" class="bg-background lg:flex-nowrap flex-wrap p-10 lg:relative  max-h-screen lg:sticky top-[20px] h-screen flex  w-full  justify-between gap-10">

    <div class=" gap-4 hidden lg:flex overflow-hidden -mt-100  px-10 ">
        {#each columns as column, c}
            <div class="overflow-hidden">
                <div class="scroll-down flex flex-col" style="--duration: {column.duration}">
                    {#each column.items as coffeImage, i (`${c}-${i}`)}
                        <div class="pb-4">
                            <img class="w-full {heights[(i + c) % heights.length]} object-cover" src={coffeImage.image} alt={coffeImage.description} loading="lazy"
                            />
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div class="flex flex-col w-full h-screen text-center justify-center  lg:text-right">
        <h2 class="lg:text-10xl text-4xl  font-anton text-white">UM CAFE EXCLUSIVO </h2>
        <div class="w-full lg:items-end lg:justify-end items-center flex">
            <p class="text-xl text-white lg:max-w-200">Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app e continue codando sem perder o ritmo.Grãos selecionados, torra artesanal e aquele espaço com wi-fi rápido e tomada em toda mesa. Porque sabemos que um bom código pede um bom café do lado. Venha tomar o seu ou peça pelo app para continuar codando!</p>
        </div>
        <div class="mt-8 w-full items-center justify-center flex lg:justify-end">
            <a class="px-7 hover:scale-105 active:scale-95 py-4 active:opacity-50 bg-orange-300 duration-150 text-lg  lg:text-2xl" href="#location">LOCALIZACAO</a>
            <a  class="px-7 hover:scale-105 active:scale-95 active:opacity-50 py-4 bg-foreground duration-150 text-lg lg:text-2xl" href="#products">CARDAPIO</a>
        </div>
    </div>
</section>