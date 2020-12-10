<script>
  import Tailwindcss from './tailwind.svelte'
  import Row from './row.svelte'
  import { products } from './store'

  const item = {name: '', quantity: 0, price: 0, perUnit: 0}

  const handleRemoveRow = (index) => event => {
    $products.splice(index, 1)
    products.update(() => $products)
  }

  const handleAddRow = (event) => {
    const lastItem = $products[$products.length - 1]
    products.update(() => [...$products, {id: lastItem.id + 1, ...item}])
  }

  console.log($products)

</script>

<Tailwindcss/>
<div class="md:container md:mx-auto bg-gray-50">
  <h1 class="text-xl text-center" >Savings app</h1>
  <div class="space-y-4" >
    {#each $products as product, index (product.id)}
      <Row handleRemoveRow={handleRemoveRow} {...product} index={index} />
    {/each}
    <div class="flex">
      <button class="bg-green-500 rounded-sm px-4 py-2" type="button" on:click={handleAddRow} >Add row</button>
    </div>
  </div>
</div>
