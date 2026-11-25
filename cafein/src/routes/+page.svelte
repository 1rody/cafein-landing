<script lang="ts">
    import Navigation from "#lib/components/layout/Navigation.svelte";
    import Footer from "#lib/components/layout/Footer.svelte";

    import Hero from "#lib/components/pages/landing/Hero.svelte";
    import About from "#lib/components/pages/landing/About.svelte";
    import Location from "#lib/components/pages/landing/Location.svelte";
    import Menu from "#lib/components/pages/landing/Menu.svelte";

    import ClientCounter from "#lib/components/pages/landing/misc/ClientCounter.svelte";
    import Whatsapp from "#lib/components/pages/landing/misc/Whatsapp.svelte";

</script>

<title>Cafein | buy the best cofee of the world</title>

<Navigation/>
<main>
    <Hero/>
    <Whatsapp/>
    <ClientCounter/>
    <About/>
    <Location/>
    <Menu/>
</main>
<Footer/>