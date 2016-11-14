# Hadora.xyz home site
## Build with Jekyll, based on [overkyll-jekyll-theme](https://github.com/bertrandkeller/overkyll-jekyll-theme)

Goodies include:
- webpack takes care of your scripts and styles (thanks to wonderful
  [Allison's Zadrozny article](http://allizad.com/2016/05/02/using-webpack-with-jekyll/))
- overkyll comes with [instantClick](https://www.npmjs.com/package/instantclick)
- [jekyll-timeago](https://github.com/markets/jekyll-timeago) used to generate
the info about experience period

## To develop:
If you don't have jekyll installed:
```
  gem install jekyll bundler
```
then:
```
  git clone
  cd
  npm install
  bundle install
```
to develop, run in two separate terminal sessions:
```
  webpack -w
  jekyll serve
```
You build your scripts in `webpack` direcotory, sass in `sass` (both are handled
by webpack and comiled to `src/assets` directory). HTML, markup, data and collections
handled by jekyll are in `src`. Jekyll builds ready to deploy site in `public` direcotory. 
