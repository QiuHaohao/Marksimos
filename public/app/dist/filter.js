!function(){"use strict";function e(){return function(e){var n={0:function(){return"HomePageSegmentLabelPriceSensitive"},1:function(){return"HomePageSegmentLabelPretenders"},2:function(){return"HomePageSegmentLabelModerate"},3:function(){return"HomePageSegmentLabelGoodLife"},4:function(){return"HomePageSegmentLabelUltimate"},5:function(){return"HomePageSegmentLabelPragmatic"}};return angular.isNumber(e)&&"function"==typeof n[e]?n[e]():e}}function n(){return function(e){var n={0:function(){return"DecisionPageDecisionTabPackagingSizeSmall"},1:function(){return"DecisionPageDecisionTabPackagingSizeStandard"},2:function(){return"DecisionPageDecisionTabPackagingSizeLarge"}};return angular.isNumber(e)&&"function"==typeof n[e]?n[e]():e}}function r(){return{require:"ngModel",restrict:"A",link:function(e,n,r,t){function i(e){return angular.isNumber(e)?parseInt(1e4*e)/100:e}function u(e){return angular.isNumber(Number(e))?e/100:e}t.$formatters.push(i),t.$parsers.push(u)}}}function t(){return{require:"ngModel",restrict:"A",link:function(e,n,r,t){function i(e){return angular.isNumber(e)?parseInt(100*e)/100:e}function u(e){return angular.isNumber(Number(e))?e:e}t.$formatters.push(i),t.$parsers.push(u)}}}angular.module("marksimos.filter",[]),angular.module("marksimos.filter").filter("usersegment",e),angular.module("marksimos.filter").filter("skupacksize",n),angular.module("marksimos.filter").directive("filterpercentage",r),angular.module("marksimos.filter").directive("filternumber",t)}();