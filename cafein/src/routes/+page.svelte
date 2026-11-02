<script lang="ts">
    import Navigation from "#lib/components/layout/Navigation.svelte";

    import Hero from "#lib/components/pages/landing/Hero.svelte";
    import About from "#lib/components/pages/landing/About.svelte";
    import Location from "#lib/components/pages/landing/Location.svelte";

    import ClientCounter from "#lib/components/pages/landing/misc/ClientCounter.svelte";

</script>

<title>Cafein | buy the best cofee of the world</title>

<Navigation/>
<main>
    <Hero/>
    <ClientCounter/>
    <About/>
    <Location/>
</main>