<script>
    const Socials = [
        {
            name: "Instagram",
            link: "https://www.instagram.com/cafein.coffee/",
            icon: "/assets/icons/instagram.svg"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/cafein.coffee",
            icon: "/assets/icons/facebook.svg"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/cafeincoffee",
            icon: "/assets/icons/twitter.svg"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/cafein-coffee/",
            icon: "/assets/icons/linkedin.svg"
        }
    ]
</script>

<footer class="flex lg:flex-nowrap flex-wrap items-center w-full justify-center p-20">
    <section class="lg:w-1/2">
        <img src="" alt="">
    </section>
    <section class="lg:w-1/2 flex flex-col items-center justify-start">
        <ol> 
            {#each Socials as social, index (social.name)}
                <li class="flex items-center gap-4">
                    <a href={social.link} target="_blank" rel="noopener noreferrer" class="flex items-center gap-4">
                        <img src={social.icon} alt={social.name} class="w-6 h-6"/>
                        <span>{social.name}</span>
                    </a>
                </li>
                
            {/each}
        </ol>
    </section>
</footer>