import { ref,onMounted, onBeforeUnmount } from "vue"
const options = {
  threshold: 1.0,
}
export const useIntersectionObservable = (container)=>{
  const reveal = ref(false)
  let observer = ref(null)
  const observerCallback = (entries)=>{
    const { isIntersecting, intersectionRatio }= entries[0]
    if(isIntersecting && intersectionRatio > 0.5){
      console.log(intersectionRatio)
      reveal.value = true
    }
  }
  onMounted(()=>{
    observer.value = new IntersectionObserver(observerCallback,options)
    observer.value.observe(container.value)
  })
  onBeforeUnmount(()=>{
    observer.value.disconnect()
  })
  return reveal
}