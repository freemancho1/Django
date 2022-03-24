<template>
<div class="view-about page-view text-left">
  <div class="title">프로젝트 소개</div>
  <div class="text">
    이 프로젝트는 Vue3.js와 DRF(Django REST Framework)을 이용해 다양한 예제를 구현하여, 
    유사한 기능 구현 시 참고하기 위해 만들었다.
  </div>
  <div class="sub1">
    설치 프로그램 내역
  </div>
  <div class="sub2">
    Django & Django REST Framework
  </div>
  <pre>
asgiref==3.5.0
certifi==2021.10.8
cffi==1.15.0
charset-normalizer==2.0.12
coreapi==2.3.3
coreschema==0.0.4
cryptography==36.0.1
defusedxml==0.7.1
Django==4.0.2
django-cors-headers==3.11.0
django-filter==21.1
django-guardian==2.4.0
django-templated-mail==1.1.1
djangorestframework==3.13.1
djangorestframework-simplejwt==4.8.0
djoser==2.1.0
idna==3.3
importlib-metadata==4.11.1
itypes==1.2.0
Jinja2==3.0.3
Markdown==3.3.6
MarkupSafe==2.1.0
mysqlclient==2.1.0
oauthlib==3.2.0
Pillow==9.0.1
pycparser==2.21
Pygments==2.11.2
PyJWT==2.3.0
python3-openid==3.2.0
pytz==2021.3
requests==2.27.1
requests-oauthlib==1.3.1
six==1.16.0
social-auth-app-django==4.0.0
social-auth-core==4.2.0
sqlparse==0.4.2
stripe==2.66.0
uritemplate==4.1.1
urllib3==1.26.8
zipp==3.7.0
  </pre>
  <div class="sub2">
    Vue, Quasar, Axios
  </div>
  <pre>
# Vue CLI v4.5.15

$ vue create app
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, PWA, Router, Vuex, CSS Pre-processors
? Choose a version of Vue.js that you want to start the project with 3.x
? Use history mode for router? Yes
? Pick a CSS pre-processor: Sass/SCSS (with dart-sass)
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No    
  </pre>
  <pre>
$ cd app
$ vue add quasar
? Allow Quasar to replace App.vue, About.vue, Home.vue and (if available) router.js? No
? Pick your favorite CSS preprocessor: Sass
? Choose Quasar Icon Set: Material Icons (recommended)
? Default Quasar language pack - one from https://github.com/quasarframework/quasar/tree/dev/ui/lang (en-US) 
? Use RTL support? (y/N) 
? Select features: Material Icons (recommended)    
  </pre>
  <pre>
$ npm i axios    
  </pre>
</div>
</template>
