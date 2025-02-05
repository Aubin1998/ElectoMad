<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-xs hover:bg-gray-50">
                {{ label }}
            </MenuButton>
        </div>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

defineProps({
    label: {
        type: String,
        default: 'Options'
    },
    menuItems: {
        type: Array,
        default: () => []
    }
})
</script>