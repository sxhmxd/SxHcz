export function LoginController($state) {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件
    // 第二入口文件=
    vm.myVar=false;
    vm.toggle = function(){
        vm.myVar = !vm.myVar;
    };
   vm.smOut=function(){
    vm.myVar=false;
   };
   vm.subLogin = function(){
        console.log(vm.uname);
        if(vm.user.name==vm.uname && vm.user.pwd==vm.upwd)
          {
                $state.go('main');
            }
  };

}
