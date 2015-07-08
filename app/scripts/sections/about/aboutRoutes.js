(function () {
    'use strict'

    angular.module('sections.about', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state("app.about", {
                    url: "/about",
                    abstract: true,
                    controller: "AboutCtrl",
                    templateUrl: "scripts/sections/about/views/aboutCtrl.html"
                })
                .state("app.about.about-tab-content", {
                    url: "/about-tab-content",
                    templateUrl: "scripts/sections/about/views/about-tab-contentCtrl.html"
                })
                .state("app.about.testimonials-tab-content", {
                    url: "/testimonials-tab-content",
                    controller: "TestimonialsTabContentCtrl",
                    templateUrl: "scripts/sections/about/views/testimonials-tab-contentCtrl.html"
                })
                .state("app.about.google-analytics", {
                    url: "/google-analytics",
                    templateUrl: "scripts/sections/about/views/google-analyticsCtrl.html"
                })
        });
})();
