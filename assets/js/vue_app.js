Vue.component('vc-header', {
  template: '<a href="index.html" class="logo"><img src="images/loremipsumlogo.jpg" alt="logo" /></a>'
});

Vue.component('vc-which-page-home', {
  template: '<ul class="links">' +
    '<li class="active"><a href="index.html">Home</a></li>' +
    '<li><a href="contact.html">Contact</a></li>' +
    '</ul>'
});
Vue.component('vc-which-page-contact', {
  template: '<ul class="links">' +
    '<li><a href="index.html">Home</a></li>' +
    '<li class="active"><a href="contact.html">Contact</a></li>' +
    '</ul>'
});

Vue.component('vc-social-icons', {
  template: '<ul class="icons">' +
    '<li><a href="mailto:loremipsum@loremipsum.com?subject=Yo&body=Please leave your contact details!" class="icon fa-envelope-o"><span class="label">Email</span></a></li>' +
    '</ul>'
});

Vue.component('vc-copyright', {
  template: '<div id="copyright">&copy;' + 'vue-simple-website 2017' + '</div>'
});


var app = new Vue({
  el: '#app',
  data: {
    name: 'vue-simple-website',
    motto: 'without server',
    name_motto: 'vue-simple-website without server',
    pages: [{name:'Home', link: 'index.html'},{name:'Contact', link: 'contact.html'}],
    article: {
      id: '',
      name: '',
      link: '',
      imgs: ['']
    },
    articles: [{
        id: 1,
        name: 'Prod #1 ',
        link: 'prod1.html',
        img: 'images/pic01.jpg',
        imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
      },
      {
        id: 2,
        name: 'Prod #2 ',
        link: 'prod2.html',
        img: 'images/pic02.jpg',
        imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
      },
      {
        id: 3,
        name: 'Prod #3 ',
        link: 'prod3.html',
        img: 'images/pic03.jpg',
        imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
      }
    ],
    lnk: [{
      twitter: '#',
      fb: '#',
      instagram: '#'
    }]

  },
  methods: {
    getName: function() {
      console.log(this.name);
    },
    getNameAndMotto: function() {
      console.log(this.name + ' ' + this.motto);
    },
    ready: function() {
      this.fetchArticles();
      console.log("loaded articles: ", this.fetchArticles());
    },
    fetchArticles: function() {
      var articles = [{
          id: 1,
          name: 'Prod #1 ',
          link: 'prod1.html',
          imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
        },
        {
          id: 2,
          name: 'Prod #2 ',
          link: 'prod2.html',
          imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
        },
        {
          id: 3,
          name: 'Prod #3 ',
          link: 'prod3.html',
          imgs: ['images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg']
        }
      ];
      this.$set('articles', articles);
    },
    setPageTitle : function(pageTitle){
      console.log(pageTitle);
      window.document.title(pageTitle);
    }
  }

});
