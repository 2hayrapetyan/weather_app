<template>

<div class="card-parent">
    <slot>

    </slot>
</div>
</template>


<style scoped>
.card-parent {
  background: #3c1d6f68;
  padding: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
img{
  cursor: pointer;
}
@media (max-width: 1024px) {
.card-parent {
    padding-bottom: 3.5rem;
}
}
</style>