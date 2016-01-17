Package.describe({
  name: 'clinical:static-pages',
  summary: 'Add glossary, about, eula, and privacy pages to your ClinicalFramework app.',
  version: '1.0.5',
<<<<<<< HEAD
  git: 'http://github.com/clinical-meteor/clinical-static-pages.git'
=======
  git: 'http://github.com/awatson1978/clinical-static-pages.git'
>>>>>>> 4cd7d2661bc62df1cc045559285026534605d74b
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
<<<<<<< HEAD

  api.use([
    'meteor-platform',
    'templating',
    'clinical:router@2.0.17',
    'clinical:glass-ui@1.3.5',
    'grove:less@0.1.1',
    'session',
    'reactive-dict'
  ]);
=======
  api.use('less', 'client');
  api.use('templating', 'client');
>>>>>>> 4cd7d2661bc62df1cc045559285026534605d74b

  api.addFiles('components/aboutPage/aboutPage.html');
  api.addFiles('components/aboutPage/aboutPage.js');
  api.addFiles('components/aboutPage/aboutPage.less');

  api.addFiles('components/eulaPage/eulaPage.html');
  api.addFiles('components/eulaPage/eulaPage.js');
  api.addFiles('components/eulaPage/eulaPage.less');

  api.addFiles('components/privacyPage/privacyPage.less');
  api.addFiles('components/privacyPage/privacyPage.js');
  api.addFiles('components/privacyPage/privacyPage.html');

  api.addFiles('components/supportPage/supportPage.less');
  api.addFiles('components/supportPage/supportPage.js');
  api.addFiles('components/supportPage/supportPage.html');
<<<<<<< HEAD


  api.addFiles('components/marketingPage/marketingPage.less');
  api.addFiles('components/marketingPage/marketingPage.js');
  api.addFiles('components/marketingPage/marketingPage.html');

  api.addFiles('components/marketingPage/assets/device-ipad-hipaa-log.png', 'client', {isAsset: true});
  api.addFiles('components/marketingPage/assets/device-ipad.png', 'client', {isAsset: true});
  api.addFiles('components/marketingPage/assets/device-macbook-formbuilder.png', 'client', {isAsset: true});
  api.addFiles('components/marketingPage/assets/device-multi.png', 'client', {isAsset: true});
  api.addFiles('components/marketingPage/assets/device-thunderbolt.png', 'client', {isAsset: true});
=======
>>>>>>> 4cd7d2661bc62df1cc045559285026534605d74b
});


Package.onTest(function(api) {
  api.use('tinytest');
<<<<<<< HEAD
=======
  //api.use('less');
  //api.use('templating');

  //api.addFiles('tiny/clinical-static-pages-tests.js');
>>>>>>> 4cd7d2661bc62df1cc045559285026534605d74b
});
