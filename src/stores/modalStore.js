// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

const modalStore = defineStore('modal', () => {
  const isShow = ref(false);
  let message = '';
  let action;

  const openModal = (msg, action = null) => {
    isShow.value = true;
    message = msg;
    action = action;
  };

  const onOk = () => {
    closeModal();

    if (typeof action === 'function') action();
  };

  const closeModal = () => {
    isShow.value = false;
  };

  const getContent = () => {
    return {
      message,
      isShow: isShow.value
    };
  };

  return { openModal, onOk, closeModal, getContent };
});

export default modalStore;
