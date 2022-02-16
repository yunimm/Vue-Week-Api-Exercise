        // 建立Vue環境
const app = {
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'yu-hexschool',
      products: [],
      tempProduct: {},
    }
  },
  methods: {    
    // 確認使用者身份，身份正確則登入，身份錯誤則導回登入頁面
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`
      axios.post(url)
      .then(() => {
        this.getProducts()
      })
      .catch((err) => {
        alert(err.data.message)
        window.location = 'index.html'
      })
    },
    getProducts() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`
      axios.get(url)
      .then((res) => {
        this.products = res.data.products
      })
      .catch((err) => {
        alert(err.data.message)
      })
    },
    showDetail(item) {
      this.tempProduct = item
    }
  },
 
  mounted() {
    // 讀取token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    // 將token寫入axios預設設定
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
  }
}
Vue.createApp(app).mount('#app')


