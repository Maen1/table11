<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>


<template>
	<div>

		<footer class="mb-0  p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
			<span class="text-sm text-gray-500 sm:text-center dark:text-yellow-200">© {{ new Date().getFullYear() }} Table11.  &ensp; All Rights Reserved.
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-yellow-200 sm:mt-0">
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
				</li>
				<li>
					<a href="#" class="hover:underline">Contact</a>
				</li>
			</ul>
		</footer>

	</div>
</template>

<style scoped>

</style>
