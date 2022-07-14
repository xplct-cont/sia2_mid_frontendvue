<template>
    <div>
        <h1>Recent Shouts</h1>
    </div>
</template>


<script>
import {useAuthStore} from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {

    const { user, token } = useAuthStore()
    const router = useRouter()
     
    if(token==''){
      router.replace('/login')

    }

    return {
      user, token
    }
    
  },
}
</script>

