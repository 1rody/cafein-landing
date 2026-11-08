<script>
    import brand from "#lib/assets/Brand.svg";
    import brandSecond from "#lib/assets/Brand-second.svg";

    import background from "#lib/assets/backgrounds/CoffeBanner.svg";

    const Socials = [
        {
            name: "Instagram",
            link: "https://www.instagram.com/",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/",
        }
    ]
</script>

<footer class="flex bg-secondary shadow-2xl flex-col items-center w-full justify-center">
    <div class="bg-background shadow-2xl h-fit mt-4 w-full">
        <img src={background} alt="Cafein dual tone background" class="w-full object-cover h-10"/>
    </div>
    <div class="flex lg:flex-nowrap mt-20 lg:mt-0 flex-wrap overflow-hidden items-center w-full justify-center">
        <section class="hidden  lg:flex">
            <img src={brand} alt="Cafein brand logo" class="w-233 h-80"/>
        </section>
        <section class="lg:hidden w-full items-center justify-center ovrflow-hidden flex">
            <img src={brandSecond} alt="Cafein brand logo" class="w-full h-70"/>
        </section>
        <section class=" p-5 ml-5 lg:text-left text-center justify-center  text-2xl flex flex-col items-center lg:justify-start">
            <ol class="flex flex-col gap-5  h-full font-black"> 
                {#each Socials as social, index (social.name)}
                    <li class="flex uppercase  text-white items-center gap-4">
                        <a href={social.link} target="_blank" rel="noopener noreferrer" class="flex active:scale-95 hover:scale-110 duration-200 hover:p-2 hover:bg-orange-300 items-center gap-4">
                            <span>{social.name}</span>
                        </a>
                    </li>
                    
                {/each}
            </ol>
        </section>
    </div>
        <p class="text-white hidden lg:flex absolute pl-45 pt-45 font-black text-2xl">© 2026 Cafein LTD. All rights reserved.</p>
    <div class="bg-background shadow-2xl h-fit mt-4 w-full">
        <img src={background} alt="Cafein dual tone background" class="w-full object-cover h-10"/>
    </div>

</footer>