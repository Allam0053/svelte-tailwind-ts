<script lang="ts">
    let count: number = 0;
    const increment = () => {
        count += 1;
    };
</script>

<button
    on:click={increment}
    class="inline-flex items-center rounded font-medium focus-visible:ring-sky-500 focus:outline-none focus-visible:ring shadow-sm transition-colors duration-75 px-3 py-1.5 text-sm md:text-base bg-sky-500 text-white border-sky-600 border hover:bg-sky-600 hover:text-white active:bg-sky-700 disabled:bg-sky-700 my-4"
>
    count is {count}
</button>
