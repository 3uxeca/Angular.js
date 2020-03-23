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