import {
  defineStore
} from 'pinia';

interface UserPayloadInterface
{
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth',{
  state: () => ({
    authenticated: false,
    messages: '',
    username: ''
  }),
  actions: {
    async authenticateUser({
      username,
      password
    }: UserPayloadInterface)
    {
      const base_url: ImportMetaEnv = import.meta.env.VITE_BASE_URL;
      const data: any = await $fetch(`${base_url}admin/v1/web/auth/login`,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      if(data?.data?.token)
      {
        const token: any = useCookie('token');
        token.value = data?.data?.token;
        this.username = data?.data?.user_name;
        this.messages = 'Login '+data?.message;
        this.authenticated = true;

        /**
         * Begin::Set username to local storage
         */
        localStorage.setItem('username',data?.data?.user_name);
        /**
         * End::Set username to local storage
         */
      }
      else
      {
        this.messages = 'Invalid credentials';
      }
    },
    logUserOut()
    {
      const token: any = useCookie('token');
      this.authenticated = false;
      token.value = null;
    }
  }
});