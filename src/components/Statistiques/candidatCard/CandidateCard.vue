<template>
    <div class="candidate-card">
      <div class="number">{{ number }}</div>
      <img :alt="name" :src="image" width="100" height="100" />
      <p class="font-bold  name"  >{{ name }}</p>
      <p class="percentage">{{ percentage }}</p>
      <p class="votes">{{ votes }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CandidateCard',
    props: {
      number: Number,
      name: String,
      percentage: String,
      votes: Number,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .name{
    font-size: 14px;
  }
 .candidate-card {
  background-color: #1a1a3d;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  position: relative;
  width: 80%;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2); /* Ajoute une ombre portée */
}

  .candidate-card img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 auto;
  }
  .candidate-card .percentage {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .candidate-card .votes {
    font-size: 1rem;
  }
  .candidate-card .number {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  </style>
  