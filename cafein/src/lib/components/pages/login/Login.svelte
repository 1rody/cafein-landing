<section id="login-container" class="w-full h-full flex  lg:p-5 justify-end ">
    <div class="text-white shadow-lg flex flex-col items-center bg-sys/30 py-15 p-5 lg:px-10 border-1 border-white/3 rounded-2xl backdrop-blur-lg justify-center gap-10">
        <h2 class="uppercase text-center anton font-black text-5xl">CAFEIN LOGIN</h2>
        <form action="post" class="flex flex-col gap-2 w-full">
            <fieldset class="flex p-3 flex-col gap-5">
                <label class="text-sm rounded-2xl uppercase font-black -mb-8 px-3 bg-system z-5 flex w-fit" for="email">Email</label>
                <input required type="email" name="email" id="email" placeholder="Digite seu email" class="w-full py-3 px-5 rounded-xl bg-sys/20 border-1 border-white/5">
            </fieldset>
            <fieldset class="flex p-3 flex-col gap-5">
                <label class="text-sm rounded-2xl uppercase font-black -mb-8 px-3 bg-system z-5 flex w-fit" for="password">Password</label>
                <input required type="password" name="password" id="password" placeholder="Digite sua senha" class="w-full py-3 px-5 rounded-xl bg-sys/20 border-1 border-white/5">
            </fieldset>
            <fieldset class="flex p-3 mt-3 text-center justify-center items-center gap-2">
                <button type="submit" class=" py-3 px-14 rounded-xl bg-sys/20 border-1 border-white/5 hover:bg-white hover:text-black hover:-translate-y-1 duration-200">Login</button>
                <p>ou</p>
                <a href="/register" class="text-white hover:text-gray-300 underline">Registre-se</a>
            </fieldset>
        </form>
        <a href="/" class="text-white hover:text-gray-300 underline">Back to landing -></a>
    </div>
</section>