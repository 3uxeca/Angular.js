angular.module('myapp',[])
    .controller('HelloController',
        function() {
            this.tax = 0;

            this.calcWithTax = function(val){
                return Math.floor(val * (100 + this.tax * 1) / 100);
            };

            this.calcWithoutTax = function(val){
                return Math.floor(val / (100 + this.tax * 1) * 100);
            };
        }
    );

var myapp = angular.module('myapp2',[]);
myapp.controller('HelloController2',
    function(){
        this.count = 0;
        this.data = [
            [0, 'nobody', 'nodata...'],
            [1, '졔', 'sajihye@foryou'],
            [2, '다샤', 'dasha@flower'],
            [3, '졔졔', '3uxeca@github.com']
        ];
        this.getData = function() {
            return this.data[this.count][0] + ': ' +
                this.data[this.count][1] + ', ' +
                this.data[this.count][2] + '.';
        };
        this.doAction = function(num) {
            this.count = num;
        }
    }
);

var myapp3 = angular.module('myapp3',[]);
var helo = myapp3.controller('HeloController',
    function(){
        this.count = 0;
        this.data = [
            {id:0, name:'no data', price:0, get:false, date:1450100000000},
            {id:1, name:'Android Phone', price:7800, get:true, date:1450400000000},
            {id:2, name: 'New iPhone', price:549020, get:false, date:1450200000000},
            {id:3, name: 'widnows phone', price:38765, get:true, date:1450300000000}
        ];
        this.getData = function(){
            return this.data[this.count].id + ': ' +
                this.data[this.count].name + ', ' +
                this.data[this.count].price + '.' +
                this.data[this.count].date;
        };
    }
);