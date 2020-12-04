<script>
  import Tailwindcss from './tailwind.svelte'
  import Row from './row.svelte'

  const item = {name: '', quantity: 0, price: 0, perUnit: 0}

  let rows = [
    {id:0, name: 'Mimosa', quantity: 6, price: 3.54, perUnit: 0},
    {id: 1, name: 'Terra Nostra', quantity: 6, price: 4.62, perUnit: 0},
    {id: 2, name: 'Nova Açores', quantity: 6, price: 3.54, perUnit: 0},
  ]

  const handleRemoveRow = (index) => event => {
    rows.splice(index, 1)
    rows = rows
  }

  const handleAddRow = (event) => {
    const lastItem = rows[rows.length - 1]
    rows = [...rows, {id: lastItem.id + 1, ...item}];
  }

</script>

<Tailwindcss/>
<div class="md:container md:mx-auto bg-gray-50">
  <h1 class="text-xl text-center" >Savings app</h1>
  <div class="space-y-4" >
    {#each rows as row, index (row.id)}
      <Row handleRemoveRow={handleRemoveRow} {...row} index={index} />
    {/each}
    <div class="flex">
      <button class="bg-green-500 rounded-sm px-4 py-2" type="button" on:click={handleAddRow} >Add row</button>
    </div>
  </div>
</div>
