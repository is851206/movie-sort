<script setup>
import {ref} from "vue"
import{useUserStore} from "./src/store/useUserStore"

const useStore=useUserStore()



</script>

<template>
 <div class="wrapper">
  <div class="first-row">
    <input type="text" placeholder="Search product name here..." class="search-box" v-model="useStore.movieName">
    <button class="search-btn" @click="useStore.handleSearch">Search</button>
  </div>
  <div class="second-row">
    <button :class="{normal:true,active:useStore.index===1}" @click="useStore.handleClick(1, 'All')">All</button>
    <button :class="{normal:true,active:useStore.index===2}" @click="useStore.handleClick(2, 'Comedy')">Comedy</button>
    <button :class="{normal:true,active:useStore.index===3}" @click="useStore.handleClick(3, 'Action')">Action</button>
    <button :class="{normal:true,active:useStore.index===4}" @click="useStore.handleClick(4, 'Cartoon')">Cartoon</button>
  </div>
  <div class="third-row">
    <div class="box" v-for="movie in useStore.filteredMovies" :key=movie.index>
      <img :src="`/${movie.name}`" >
      <h1>{{movie.title}}</h1>
      <h2>{{movie.price}}</h2>
    </div>
  </div>
</div>

</template>

<style>
.wrapper{
  margin:0 20% 0 15%;
}
.first-row{
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-box{
  outline: none;
  border:none;
  border-bottom: solid black;
  padding:10px;
  background-color: transparent;
  width:400px;
}
.search-btn{
  margin:5px;
  padding:15px;
  background-color: #6262ff;
  color:white;
  border-radius: 5px;
  border:none;
}
.second-row{
  width:100%;
}
.normal{
  background-color: transparent;
  color:#6262ff;
  padding:15px 30px;
  margin-left:10px;
  border-radius: 5px;
  cursor: pointer;
}
.active{
  background-color: #6262ff;
  color:white;
  padding:15px 30px;
}
.third-row{
  margin-top:15px;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>