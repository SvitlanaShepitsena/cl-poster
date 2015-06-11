(function () {
    'use strict'
    angular.module('auth', [])
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage()
            $translateProvider.translations('en', {
                'terms-conditions': 'Svet Media Group Statement of Rights and Responsibilities',
                'all-rights-reserved': 'All rights reserved',
                'all-registered-users': 'Full List',
                'account-status': 'Account Status',
                'business-account': 'Business Account',
                'reader-account': 'Reader Account',
                'username': 'User Name',
                'email': 'Email',
                'password': 'Password',
                'register': 'Register',
                'register-account': 'Please Register',
                'new-user': 'if you do not have an account',
                'by-registering': 'By clicking Register',
                'registering-conditions': 'I have read and agree to the SMG Terms & Conditions ',
                'already-registered': 'Already registered?',
                'registration': 'Registration',
                'author-dashboard': 'Dashboard',
                'author-articles': 'My Articles',
                'author-drafts': 'My Drafts',
                'create-article': 'Create an Article',
                'dashboard': 'Dashboard',
                'my-profile': 'My Profile',
                'date-created': 'Date Created',
                'showing-stat': 'Showing Statistics',
                'unique': 'Unique',
                'total': 'Total',
                'my-articles': 'My Articles',
                'my-blog': 'My Blog',
                'all-articles': 'All Articles',
                'my-drafts': 'Drafts',
                'my-friends': 'My Friends',
                'svet-friends': 'Svet Friends',
                'settings': 'Settings',
                'statistics': 'Statistics',
                'comments': 'Comments',
                'bookmarks': 'Bookmarks',
                'manager-dashboard': 'Manager Dashboard',
                'users': 'Users',
                'users-account-requests': 'Users Business Account Requests',
                'all-users': 'All Users',
                'all-notifications': 'All Notifications',
                'notifications': 'Notifications',
                'clients': 'Clients',
                'readers': 'Readers',
                'customers': 'Customers',
                'customer': 'Customer',
                'authors': 'Authors',
                'author': 'Author',
                'reader-profile': 'Reader Profile',
                'reader-profile-settings': 'Reader Profile Settings',
                'invitations': 'Invitations',
                'find-people': 'Find People',
                'subscriptions': 'Subscriptions',
                'forgot-pass': 'Forgot password?',
                'email-recovery': 'Email used for registration',
                'send-temp-pass': 'Send',
                'profile-settings': 'Profile Settings'
            });
            $translateProvider.translations('ru', {
                'terms-conditions': 'Правила пользования интерактивными ресурсами сайта Svet Media Group',
                'all-rights-reserved': 'Все права защищены',
                'all-registered-users': 'Весь Список',
                'account-status': 'Статус Профайла',
                'business-account': 'Бизнес Профайл',
                'reader-account': 'Профайл Читателя',
                'username': 'Контактное Имя',
                'email': 'Электронный Адрес',
                'password': 'Пароль',
                'register': 'Зарегистрироваться',
                'register-account': 'Зарегистрируйтесь',
                'new-user': 'Eсли Вы новый пользователь',
                'by-registering': 'Регистрируясь, вы принимаете',
                'registering-conditions': 'Я прочитад и принимаю условия использования портала SMG',
                'already-registered': 'Уже зарегистрированы',
                'registration': 'Регистрация',
                'author-dashboard': 'Панель Управления',
                'author-articles': 'Мои Статьи',
                'author-drafts': 'Мои Черновики',
                'statistics': 'Статистика',
                'dashboard': 'Панель Управления',
                'my-profile': 'Мой Профайл',
                'date-created': 'Дата создания',
                'showing-stat': 'Статистика показов',
                'unique': 'Уникальные',
                'total': 'Всего',
                'my-articles': 'Мои Статьи',
                'my-blog': 'Мой Блог',
                'all-articles': 'Все Статьи',
                'my-drafts': 'Черновики',
                'my-friends': 'Мои Друзья',
                'svet-friends': 'Друзья Svet ',
                'create-article': 'Добавить статью',
                'settings': 'Настройки',
                'comments': 'Комментарии',
                'bookmarks': 'Закладки',
                'manager-dashboard': 'Панель Управления Менеджера',
                'users': 'Юзеры',
                'users-account-requests': 'Запросы Пользователей (Бизнес Профайл)',
                'all-users': 'Все Юзеры',
                'all-notifications': 'Все Оповещения',
                'notifications': 'Оповещения',
                'clients': 'Клиенты',
                'readers': 'Читатели',
                'customers': 'Клиенты',
                'customer': 'Клиент',
                'authors': 'Авторы',
                'author': 'Автор',
                'reader-profile': 'Профайл Читателя',
                'reader-profile-settings': 'Настройки Профайла Читателя',
                'invitations': 'Приглашения',
                'find-people': 'Поиск Людей',
                'subscriptions': 'Подписки',
                'forgot-pass': 'Забыли Пароль?',
                'email-recovery': 'Email используемый при регистрации',
                'send-temp-pass': 'Отослать',
                'profile-settings': 'Настройки Профайла'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
