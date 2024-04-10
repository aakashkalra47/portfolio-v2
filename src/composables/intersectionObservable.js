import { ref,onMounted, onBeforeUnmount } from "vue"
const options = {
  threshold: 0.5,
}
export const useIntersectionObservable = (container)=>{
  const reveal = ref(false)
  let observer = ref(null)
  const observerCallback = (entries)=>{
    const { isIntersecting }= entries[0]
    if(isIntersecting ){
      reveal.value = true
    }
  }
  onMounted(()=>{
    observer.value = new IntersectionObserver(observerCallback, options)
    observer.value.observe(container.value)
  })
  onBeforeUnmount(()=>{
    observer.value.disconnect()
  })
  return reveal
}