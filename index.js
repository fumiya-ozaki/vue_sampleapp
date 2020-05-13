var app = new Vue({
  el:'#app',
  data:{
    //search関連
    items:[],
    keyword:'',
    //review関連
    reviews:[],
    reviewDate:"",
    comment:"",

    books:[
      {
        no:1,
        title:"これから始めるVue.js入門",
        author:"山田祥寛",
        publisher:"SBクリエイティブ",
        releaseDate:"2019-08-30",
        path:"./img/cat_3.jpeg"
      },
      {
        no:2,
        title:"これから始めるWordpress入門",
        author:"ワード一郎",
        publisher:"SBクリエイティブ",
        releaseDate:"2019-01-02",
        path:"./img/cat_3.jpeg"
      }
    ],
  },
  methods:{
    //reviewの登録
    addReview:function(event){
      if(this.comment=='' || this.reviewDate=='')return;
      var newReview={
        title: this.books[0].title,
        date: this.reviewDate,
        comment: this.comment
      };
      this.reviews.push(newReview);
      this.reviewDate = '';
      this.comment='';
    },
    //本の検索
    getResolt(keyword){
      axios.get("https://www.googleapis.com/books/v1/volumes?q=search" + query).then(response => {
        console.log(response.data);
        this.items = response.data.items;
      });
    }
  }
})