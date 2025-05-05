import { ref, onMounted, watch } from "vue";

const likedCats = ref([]);

// Save to localStorage whenever likedCats changes
watch(
  likedCats,
  () => {
    localStorage.setItem("likedCats", JSON.stringify(likedCats.value));
  },
  { deep: true }
);

// Load from localStorage on component mount
onMounted(() => {
  const stored = localStorage.getItem("likedCats");
  if (stored) likedCats.value = JSON.parse(stored);
});

export function useLikedCats() {
  return { likedCats };
}
