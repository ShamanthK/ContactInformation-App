var module = angular.module("contactManager", [
    "ngRoute",
    "ngAnimate",
    "toaster"
]);

(function (app) {
    app.config(function ($routeProvider) {
        var base = "/views/";

        $routeProvider
            .when("/", {
                templateUrl: base + "contact/index.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .when("/contact/add", {
                templateUrl: base + "contact/AddContact.html",
                controller: "AddContactController",
                controllerAs: "vm"
            })
            .when("/contact/details/:id", {
                templateUrl: base + "contact/ViewDetails.html",
                controller: "ViewDetailsController",
                controllerAs: "vm"
            })
            .when("/contact/edit/:id", {
                templateUrl: base + "contact/EditDetails.html",
                controller: "EditContactController",
                controllerAs: "vm"
            })
            .when("/contact/remove/:id", {
                templateUrl: base + "contact/DeleteContact.html",
                controller: "DeleteContactController",
                controllerAs: "vm"
            });
    });
})(angular.module("contactManager"));
