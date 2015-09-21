var app = angular.module("easyfunding", ["ngRoute","ui.mask","imageupload"]);

app.config(function($routeProvider) {
    $routeProvider
    /*basic templates*/
        .when('/', {
            controller: 'MainController',
            templateUrl: 'templates/home.html'
        })
        .when('/news', {
            controller: 'MainController',
            templateUrl: 'templates/news.html'
        })
        .when('/cause_type', {
            controller: 'MainController',
            templateUrl: 'templates/cause.html'
        })
        .when('/donation', {
            controller: 'MainController',
            templateUrl: 'templates/donation/donation.html'
        })
        .when('/card_donation_form', {
            controller: 'MainController',
            templateUrl: 'templates/donation/card_donation_form.html'
        })
        /*.basic templates*/
        .when('/single_campagin', {
            controller: 'MainController',
            templateUrl: 'templates/single_campagin.html'
        })
        /*registration templates*/
        .when('/signup', {
            controller: 'MainController',
            templateUrl: 'templates/registration/signup.html'
        })
        .when('/signin', {
            controller: 'MainController',
            templateUrl: 'templates/registration/signin.html'
        })
        .when('/forgot_password', {
            controller: 'MainController',
            templateUrl: 'templates/registration/forgot_password.html'
        })
        .when('/verify', {
            controller: 'MainController',
            templateUrl: 'templates/registration/verification_code.html'
        })
        /*.registration templates*/
        /* fundrasing templates*/
        .when('/start_fund_rasing', {
            controller: 'MainController',
            templateUrl: 'templates/fundforms/start_fund_rasing.html'
        })
        .when('/library', {
            controller: 'MainController',
            templateUrl: 'templates/fundforms/library.html'
        })
        /*.fundrasing template*/
        /*dashboard templates*/
        .when('/dashboard', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/dashboard.html'
        })

        /*dashboard single campagin templates*/
        .when('/dashboard_single_campagin', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/dashboard_single_campagin.html'
        })
        .when('/edit_campagin', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/edit_campagin.html'
        })
        .when('/updates', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/updates.html'
        })
        .when('/comments', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/comments.html'
        })
        .when('/with_draw', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/with_draw.html'
        })
        .when('/donations', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/singlecampagin/donations.html'
        })
        /*.dashboard single campagin templates*/
        /*dashboard settings*/
        .when('/settings', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/settings/settings.html'
        })
        .when('/account_status', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/settings/account_status.html'
        })
        .when('/delete_account', {
            controller: 'MainController',
            templateUrl: 'templates/dashboard/settings/delete_account.html'
        })
        .when('/donator', {
            controller: 'MainController',
            templateUrl: 'templates/donator.html'
        })
        /*.dashboard settings*/
        /*tour*/
        .when('/howitworks', {
            controller: 'MainController',
            templateUrl: 'templates/tour/howitworks.html'
        })

});
