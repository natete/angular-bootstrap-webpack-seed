# Emergya Angular Seed Project

This is a base project for AngularJS 1 projects to be developed in Emergya using Webpack, Emergya Gulp config and Bootstrap.

This project is meant to be to the Yeoman generator base.

## How to work with it?

In order to make Webpack work properly and manage all your assets, you should use relative paths everytime you request an asset.

####In your scss:

#####Do:
> ```scss
background-image: url('../../img/my-image.png');
```

#####Don't:
> ```scss
background-image: url('/assets/img/my-image.png');
```

####In your html:

#####Do:
> ```html
<img src="../../img/my-image.png">
```

#####Don't:
> ```html
<img src="/assets/img/my-image.png">
```

####In your js:
In addition to use relative paths you should use require whenever you want to add a inline style requiring an asset.

#####Do:
> ```javascrip
module.exports = {
  template: require('./myTemplate.html')
};
var style = 'background-img: url(\'' + require('../../assets/img/my-image.png') + '\');'
```

#####Don't:
> ```javascrip
module.exports = {
  template: require('/scripts/app/myTemplate.html')
};
var style = 'background-img: url(\'../../img/my-image.png\');';
```
