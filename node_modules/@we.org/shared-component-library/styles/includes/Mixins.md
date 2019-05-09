### Breakpoints

These are mixins included to make mobile css easier.

#### gt()

Stands for "greater than." Any rules within its content will only trigger if the screen size is greater than the target.

Usage:

```scss 
@import "<path to>/styles/includes/media-queries";

.some-class {
    width: 50px;

    @include gt(sm) { // one of the breakpoints [sm, md, lg, xl]
        width: 100px;
    }

    @include gt(md) {
        width: 200px;
    }
}
```
Note, `xs` is what happens if you don't use `gt()` at all.

Renders out to:

```scss

.some-class {
    width: 50px; 
}
  
@media (min-width: 375px) {
    .some-class {
        width: 100px; 
    } 
}

@media (min-width: 768px) {
    .some-class {
        width: 200px; 
    } 
}

```

