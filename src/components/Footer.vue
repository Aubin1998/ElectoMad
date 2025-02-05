<template>
     <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; 2021 CENI Madagascar</p>
        </div>
        <div class="footer-right">
          <button class="scroll-top-button" @click="scrollToTop()">
            <!-- <i class="fas fa-chevron-up"></i> -->
            <i class="pi pi-arrow-up " style="font-size: 18px; color: white;"></i>
          </button>
        </div>
      </div>
    </footer>
</template>

<script setup>

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Pour un défilement fluide
  });
};
</script>

<style scoped>
.footer {
  background-color: #e0e0e0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-left p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.footer-right {
  display: flex;
  align-items: center;
}

.scroll-top-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-button i {
  font-size: 16px;
}

.fond {
  background-color: white;
}

</style>