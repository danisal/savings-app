<script>
  export let handleRemoveRow;
  export let name;
  export let quantity;
  export let price;
  export let index;

  // bg-blue-300

  $:pricePerUnit = price / quantity;
</script>

<div class="grid grid-cols-2 gap-4 md:grid-cols-5 bg-blue-300 py-2 px-4 mx-4 rounded-md">
  <label class="block" for="name">
    Name
    <input id="name" class="w-full bg-green-100 rounded-sm p-2" type="text" placeholder="name" bind:value={name}>
  </label>
  <label class="block" for="quantity">
    Quantity
    <input id="quantity" class="w-full bg-green-100 rounded-sm p-2" type=number placeholder="quantity" bind:value={quantity}  >
  </label>
  <label class="block" for="price">
    Price
    <input id="price" class="w-full bg-green-100 rounded-sm p-2" type=number placeholder="price" bind:value={price}  >
  </label>
  <label class="block" for="price-per-unit">
    Price per unit
    <input id="price-per-unit" class="w-full bg-green-100 rounded-sm p-2" type="text" placeholder="price per unit" disabled bind:value={pricePerUnit} >
  </label>
  <button class="w-8 btn" type=button on:click={handleRemoveRow(index)} >
    <svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  </button>
</div>