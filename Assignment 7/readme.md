
# Assignment-7
##### - Ashutosh Raval



===================================================================================



## SASS Website

This 2-page website showcases the implementation of SASS CSS.
The website comprises of a home page and an About Us page.

## SCSS Components Used:

The layout of both pages is achieved using CSS Grid and CSS flex. SASS variables are used to define color and font properties, and SASS nesting is employed for the form in the navigation on the home page. The home form further uses a placeholder selector, while a SASS mixin is utilized for the button property.


All of the following SASS features have been implemented:

Variables
It can be define using $varName

Custom Properties
It has to defined in root element in css.
'--'has to be added as prefix of the variable
for eg : --back-nav-body
It can be access using var(--back-nav-body)
The major diff between Custom Property and Variable is that Custom prop can be modified using JS, while variable cannot.

Nesting
It has been used in the Nav in HTML.
the element inside the tag can be access by
.root{

    & child{

    }
}

Interpolation
SassScript allows the use of interpolation to inject SassScript into unquoted strings. This feature is especially useful for generating dynamic names such as for animations, or for utilizing slash-separated values. It's important to note that interpolation in SassScript will always return an unquoted string.
eg @mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);

Placeholder Selectors:
Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output.
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}


Mixins:
Mixins allow you to define styles that can be re-used throughout your stylesheet. 
It can be used in the media query. @include has to be used to add the mixin into the scss.


Functions.
Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.
eg: @function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}

If else
The @if rule is written @if *<expression<*{ ... }, and it controls whether or not its block gets evaluated (including emitting any styles as CSS). The expression usually returns either true or false—if the expression returns true, the block is evaluated, and if the expression returns false it’s not.

The Main feature of this site is the darkmode option available on page.
It will turn entire page in back and white.