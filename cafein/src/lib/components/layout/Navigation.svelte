<script>
    let isOpen = $state(false);

    function toggleMenu() {
            isOpen = !isOpen;
    }
</script>

<header id="navigation" class="flex z-50 fixed text-3xl  mix-blend-difference w-full items-center justify-center">
    <nav class="flex text-shadow-2xl anton items-center justify-between p-5 w-full  text-white ">
        <a href="">CAFEIN</a>
        <button onmouseenter={() => isOpen = true} class="border-b-1 ">MENU</button>
    </nav>
</header>

<section id="menu"  onmouseleave={() => isOpen = false} class="z-50 p-4 mix-blend-difference pt-20 right-0  fixed h-screen {isOpen ? 'translate-y-0 duration-500' : '-translate-y-300 duration-500'}">
    <nav class="flex anton text-right text-3xl items-center justify-between p-5 w-full  text-white ">
        <ol class="flex flex-col gap-5">
            <li><a class="hover:p-10 duration-200" href="#products">Produtos</a></li>
            <li><a class="hover:p-10 duration-200"  href="#about">Sobre</a></li>
            <li><a class="hover:p-10 duration-200" href="#location">Localizacao</a></li>
            <li><a class="hover:p-10 duration-200"  href="/login">Login</a></li>
        </ol>
    </nav>
</section>