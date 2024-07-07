import { onBeforeUnmount, onMounted } from 'vue';

const useOnClickOutside = (ref, handler) => {
  const listener = event => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.value || ref.value.contains(event.target)) {
      return;
    }

    handler(event);
  };
  onMounted(()=>{
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  })
  onBeforeUnmount(()=>{
    document.removeEventListener('mousedown', listener);
    document.removeEventListener('touchstart', listener);
  })
};

export default useOnClickOutside;