<script lang="ts">
    import Background from "#lib/assets/backgrounds/Bg-Canvas.png";
</script>

<img src={Background} class="z-2 absolute w-full h-screen" alt="Background coffe">
<section id="hero" class="flex z-4 relative h-screen flex-col w-full items-center justify-center">
    <div class="flex items-center justify-center flex-col ">
        <h1 class="text-20xl font-black anton uppercase gap-10 flex text-white">
            <span class="show-down-01">THE</span> 
            <span  class="show-down-02">BEST</span> 
            <span  class="show-down-03">COFFE</span>
        <span  class="show-down-03">.</span></h1>
        <div class="flex text-2xl w-full items-center text-white font-black justify-between p-2">
            <a class="hover:border-white duration-200 border-1 active:scale-95 border-white/1 hover:border-dashed" href="">PRICES</a>
            <a class="hover:border-white duration-200 border-1 active:scale-95  border-white/1 hover:border-dashed" href="">OUR LOCATION</a>
            <a class="hover:border-white duration-200 active:scale-95 border-1 border-white/1 hover:border-dashed" href="">CONTACT</a>
        </div>
    </div>
</section>