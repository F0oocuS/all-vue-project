<template>
    <div>
        <h3>Some user detail</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-default" :to="{ name: 'userEdit', params: { id: $route.params.id } }">Edit user</router-link>
    </div>
</template>