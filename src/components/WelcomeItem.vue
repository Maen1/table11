<template>
    <div class="item">
        <i>
            <slot name="icon"></slot>
        </i>
        <div class="text-5xl text-red-500  font-bold underline">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>
