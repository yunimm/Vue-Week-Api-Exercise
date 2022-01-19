const BASE_URL = "https://vue3-course-api.hexschool.io/v2/admin/signin"
const PATH = "/yu-hexschool"
const INDEX_URL = "/index.html"
const PRODUCT_URL = "/products.html"


// 建立Vue環境
const app = {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      temp: '123'
    }
  },
  created() {

  },
  methods: {
    login() {
      // 用axios接API
      axios
      // 加入站點/API登入程序/使用者帳密
      .post(BASE_URL, this.user)
      .then((res) => {
        console.log(res)
        // 寫入token,目的驗證管理員身分
        const {token, expired} = res.data
        console.log(token, expired)
        // 跳轉至商品頁面
        // window.location = 'products.html'
      })
      .catch((error) => {
        console.log(error)
      })
      
    }
    
  }
}
Vue.createApp(app).mount('#app')