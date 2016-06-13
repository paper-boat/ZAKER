var zaker = angular.module('zaker',['ngAnimate','ngRoute']);

zaker.controller('indexCtrl',['$scope',function($scope){

}])

zaker.directive('zakerYindao',[function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/yindao.html',
  }
}])
zaker.directive('zakerTopBar',[function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/top-bar.html',
  }
}])
zaker.directive('zakerTabBar',[function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/tab-bar.html',
  }
}])
zaker.directive('zakerHyq',[function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/hyq.html',
    link:function($scope,el){
       el.on('click','.sq-top-title',function(){
         $('a').css('border-bottom',$(this).index()*33.3333+'%');
         $('.sq-top-title a').removeClass('active');
         $(this).find('a').addClass('active');
       })
     }
  }
}])
zaker.directive('zakerCarBar',[function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/car-bar.html',
  }
}])

var dingyueList=[
  {id:1,href:'#/jrkd',image:'images/jrkd1.png'},
  {id:2,href:'#/jrtt',image:'images/jrtt.png'},
  {id:3,href:'#/car',image:'images/qcpd.png'},
  {id:4,href:'#/lypd',image:'images/lypd.png'},
  {id:5,href:'#/ozb',image:'images/ozb.png'},
  {id:6,href:'#/scppd',image:'images/scppd.png'},
  {id:7,href:'#/cjpd',image:'images/cjpd.png'},
  {id:8,href:'#/kjpd',image:'images/kjpd.png'},
  {id:9,href:'#/typd',image:'images/typd.png'},
  {id:10,href:'#/tzlc',image:'images/tzlc.png'},
  {id:11,href:'#/dyzx',image:'images/dyzx.png'},
  {id:12,href:'#/lydr',image:'images/lydr.png'},
  {id:13,href:'#/ylbg',image:'images/ylbg.png'},
  {id:14,href:'#/add1',image:'images/add1.png'},
];

zaker.controller('dingyueCtrl',['$scope','$routeParams',function($scope,$routeParams){
  // console.log(dingyueList)
  $scope.dingyueList=dingyueList;
}])
// $scope.controller('dyCtrl',[]{
//   var id=$routeParams.id;
//   $scope.newsList=newsList;
//   $scope.list=newsList.content;
// })

var redianList = [
  {id:1,title:'海口万人海滩“洗龙水”场面壮观',laiyuan:'',image:'images/rd1.png'},
  {id:3,title:'人民日报评首部抗美援朝电视剧',laiyuan:'人民日报',image:'images/rd2.png'},
  {id:4,title:'最近很火的“奶奶鞋”是什么鬼？你造么？？',laiyuan:'全球时尚 刚刚',image:'images/rd4.png'},
  {id:5,title:'高圆圆，你身上的裙子接我穿一下呗',laiyuan:'55STYLE 4分钟前',image:'images/rd7.png'},
  {id:6,title:'他们这么庆祝高中毕业，你羡慕么？',laiyuan:'人民网 四分钟前',image:'images/rd5.png'},
]
var redianListBig = [
  {id:1,title:'神奇！输30+赢30+总决赛首现',laiyuan:'',image:'images/rd3-b.png'},
]
var redianListSmall = [
  {id:1,title:'老人生前经常喝燃油 45年喝掉1吨半',laiyuan:'',image1:'images/rd1-1.png',image2:'images/rd1-2.png',image3:'images/rd1-3.png'},
  {id:2,title:'范志毅湖州大婚 婚礼现场众星云集',laiyuan:'',image1:'images/rd2-1.png',image2:'images/rd2-2.png',image3:'images/rd2-3.png'},
]
var redianListWenzi = [
  {id:1,title:'女索抚养费败诉 法院:年满18岁自己赚去',laiyuan:'央广网'},
]

zaker.controller('redianCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.redianList = redianList;
  $scope.redianListBig = redianListBig;
  $scope.redianListSmall = redianListSmall;
  $scope.redianListWenzi =redianListWenzi;
}])

var wanleListToday = [
  {id:1,image:'images/wl3.png'},
  {id:2,image:'images/wl4.png'},
  {id:3,image:'images/wl5.png'},
];
var wanleListYesterday = [
  {id:1,image:'images/wl6.png'},
  {id:2,image:'images/wl7.png'},
  {id:3,image:'images/wl8.png'},
];

zaker.controller('wanleCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.wanleListToday = wanleListToday;
  $scope.wanleListYesterday = wanleListYesterday;
}])

var huatiList = [
  {id:1,image:'images/sq2.png',title:'我们都爱化妆品',description:'化妆护肤不分贵贱，效果是王道'},
  {id:2,image:'images/sq3.png',title:'电影圈',description:'电影同好联盟'},
  {id:3,image:'images/sq4.png',title:'女神转型记',description:'生活不止柴米油盐，还有裙子鞋子和包包'},
  {id:4,image:'images/sq5.png',title:'颤抖吧，吃货！',description:'分享你的美食生活'},
  {id:5,image:'images/sq6.png',title:'汽车总动员',description:'随心所欲畅聊关于汽车的一切'},
  {id:6,image:'images/sq7.png',title:'粤蒲粤好玩',description:'广州人的吃喝玩乐'},
  {id:7,image:'images/sq8.png',title:'里约运动会',description:''},
  {id:8,image:'images/sq9.png',title:'种草',description:'买了什么好货？在这里分享'},
];

zaker.controller('shequCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.huatiList = huatiList;
}])

var jixuanListXiaotu = [
  {id:1,touxiang:'images/zaker-logo.png',huati:'话题小秘书',time:'2分钟前',laiyuan:'#萌娃辣妈帅爸爸',neirong:'免费亲子绘本来啦！以#616亲子阅读#为开头发帖，钱400位高质量发帖用户即可免费获得亲子阅读绘本一本',image:'images/jx1.png',yuedu:'33.2K',pinglun:'88',zan:'66'},
];
var jixuanListDatu = [
  {id:1,touxiang:'images/jx2.png',huati:'豆豆小恶魔',time:'3分钟前',laiyuan:'#电影图',neirong:'除了聂小倩，你对王祖贤还有哪些形象印象深刻的？误打误撞在幼年的VCD里看了这部有点情色味的电影《潘金莲的前生今世》，不但被她的...',image:'images/jx3.png',yuedu:'28.6K',pinglun:'56',zan:'35'},
];

zaker.controller('jixuanCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.jixuanListXiaotu = jixuanListXiaotu;
  $scope.jixuanListDatu = jixuanListDatu;
}])

var haoyouquanList = [
  {id:1,touxiang:'images/hyq1.png',author:'豆豆小恶魔',time:'28分钟前 发表了帖子',neirong:'早安',image:'images/hyq2.png',yuedu:'48.6K',pinglun:'47',zan:'36'},
];
var haoyouquanListWenzi = [
  {id:2,touxiang:'images/hyq3.png',author:'金占占',time:'2分钟前 发表了帖子',neirong:'喝维C泡腾片，会不会容易肥？糖分是什么类型？',image:'',yuedu:'24.1K',pinglun:'25',zan:'30'},
]

zaker.controller('haoyouquanCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.haoyouquanList = haoyouquanList;
  $scope.haoyouquanListWenzi = haoyouquanListWenzi;
}])

zaker.controller('setCtrl',['$scope',function($scope){

}])

zaker.controller('carCtrl',['$scope',function($scope){

}])

zaker.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'dingyueCtrl',
    templateUrl:'views/templates/dingyue.html'
  }).when('/dingyue',{
    controller:'dingyueCtrl',
    templateUrl:"views/templates/dingyue.html"
  }).when('/car',{
    controller:'carCtrl',
    templateUrl:"views/templates/car.html"
  }).when('/redian',{
    controller:'redianCtrl',
    templateUrl:'views/templates/redian.html'
  }).when('/wanle',{
    controller:'wanleCtrl',
    templateUrl:'views/templates/wanle.html'
  }).when('/shequ',{
    controller:'shequCtrl',
    templateUrl:'views/templates/shequ.html'
  }).when('/jixuan',{
    controller:'jixuanCtrl',
    templateUrl:'views/templates/jixuan.html',
  }).when('/haoyouquan',{
    controller:'haoyouquanCtrl',
    templateUrl:'views/templates/haoyouquan.html',
  }).when('/set',{
    controller:'setCtrl',
    templateUrl:'views/templates/set.html',
  }).otherwise('/',{
    redirectTo:'/'
  })
}])
