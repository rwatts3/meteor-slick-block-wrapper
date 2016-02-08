# Slick Block Wrapper

This package includes `shcherbin:slickjs` as a dependency. Be sure to give thanks,
and credit to that package as most of the heavy lifting was done there. 

The purpose of this package is to take slick one step further. For example, 
the ability to just use a block template and pass a template through such helper,
enabling you to define the properties for your slick slider right at the template level.

## Example
```
{{#slick infinite=true dots=true autoplay=true slidesToShow=4 slidesToScroll=4}}
	{{#each myItems}}
		{{> item }}
	{{/each}}
{{/slick}}
```