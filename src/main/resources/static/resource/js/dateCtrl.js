var mainApp = angular.module("DMZ_App", []);

mainApp.directive("datepicker", function () {



    function link(scope, element, attrs, controller) {



        // CALLING THE "datepicker()" METHOD USING THE "element" OBJECT

        element.datepicker({
            onSelect: function (val) {
                scope.$apply(function () {
                    // UPDATING THE VIEW VALUE WITH THE SELECTED DATE
                    controller.$setViewValue(val);
                });
            },
            dateFormat: "dd-mm-yy"
    });
    }
    return {
        require: 'ngModel',
        link: link
};
});
