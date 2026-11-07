<script>
    import brand from "#lib/assets/Brand.svg";
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

<footer class="flex bg-secondary flex-col items-center w-full justify-center">
    <div class="bg-background h-20 mt-10 w-full">
        
    </div>
    <div class="flex lg:flex-nowrap flex-wrap items-center w-full justify-center">
        <section class="">
            <img src={brand} alt="Cafein brand logo" class="w-233 h-130"/>
        </section>
        <section class=" p-10 lg:text-2xl flex flex-col items-center justify-start">
            <ol class="flex flex-col gap-5 font-black"> 
                {#each Socials as social, index (social.name)}
                    <li class="flex text-white  items-center gap-4">
                        <a href={social.link} target="_blank" rel="noopener noreferrer" class="flex active:scale-95 hover:scale-110 duration-200 items-center gap-4">
                            <span>{social.name}</span>
                        </a>
                    </li>
                    
                {/each}
            </ol>
        </section>
    </div>
</footer>