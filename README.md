# webcomponents2
> A library of web components in Google Polymer v2

## Installation

We recommend package installation with Bower, add it to your development dependencies:

`bower install --save webcomponents2`

Butr it's possible to install with NPM, add it to your development dependencies:

`npm install --save webcomponents2`


## Components
 - [Alert](#alert)
 - [Carousel](#carousel)
 - [Collapse](#collapse)
 - [Datepicker](#datepicker)
 - [Dropdown](#dropdown)
 - [Input Mask](#input-mask)
 - [Modal](#modal)
 - [Popover](#popover)
 - [Tab Panel](#tab-panel)
 - [Tooltip](#tooltip)

### Alert

```html
<wc-alert class="warning" dismissible>
    <span dismiss class="dismiss-button"><i class="fa fa-close"></i></span>
    <h5><i class="fa fa-info-circle"></i> Title</h5>
    <p>Alert text gere.</p>
</wc-alert>
```

### Carousel

```html
<wc-carousel infinite-loop auto-play interval="3000">
    <img data-src="https://app-layout-assets.appspot.com/assets/bg1.jpg">
    <img data-src="https://app-layout-assets.appspot.com/assets/bg2.jpg">
    <img data-src="https://app-layout-assets.appspot.com/assets/bg3.jpg">
    <img data-src="https://app-layout-assets.appspot.com/assets/bg4.jpg">
</wc-carousel>
```

### Collapse

```html
<wc-collapse>
    <h3 toggle-collapse>Toggle Collapse</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor ligula diam, et sollicitudin felis pretium a. Pellentesque vehicula eleifend tortor, et vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis congue luctus est id finibus. Morbi pellentesque, leo vitae pretium iaculis, justo turpis efficitur ex, at varius purus velit eu nisl. Mauris imperdiet nisi quis risus vestibulum, ut placerat erat faucibus. Mauris iaculis tempus libero, vel sagittis ligula porta ut.</p>
</wc-collapse>
```

### Datepicker

```html
<!--//In development-->
```

### Dropdown

```html
<wc-dropdown>
    <button toggle-dropdown>Toggle Dropdown</button>
    <wc-dropdown-menu>
        <a href="#">Action</a>
        <a href="#">Another action</a>
        <a href="#">Something else here</a>
    </wc-dropdown-menu>
</wc-dropdown>
```

### Input Mask

```html
<wc-inputmask mask="__/__/____">
    <input type="text" placeholder="00/00/0000">
</wc-inputmask>
```

### Modal

```html
<wc-modal  has-backdrop allow-scroll is-open>
    <header>
        <a href="#" class="pull-right" close-modal>x</a>
        <h3>Modal Header</h3>
    </header>
    <main>
        <p>Modal body example</p>
    </main>
    <footer>
        <button class="btn btn-confirm" type="button">Confirm</button>
        <button class="btn btn-cancel" type="button" close-modal>Cancel</button>
    </footer>
</wc-modal>
```

### Popover

```html
<a id="plink" href="javascript:;">Popover on top</a>
<wc-popover target="#plink" direction="top">
    <h3>Top popover</h3>
    <p>A propover directed to top</p>
</wc-popover>
```

### Tab Panel

```html
<wc-tabpanel>
    <wc-tabnav>
        <a href="#tab1" active>Tab 1</a>
        <a href="#tab2">Tab 2</a>
        <a href="#tab3">Tab 3</a>
        <a href="#tab4">Tab 4</a>
    </wc-tabnav>
    <wc-tabcontent>
        <section id="tab1">
            <h2>Tab 1</h2>
            <p>Content of tab panel</p>
        </section>
        <section id="tab2">
            <h2>Tab 2</h2>
            <p>Content of tab panel</p>
        </section>
        <section id="tab3">
            <h2>Tab 3</h2>
            <p>Content of tab panel</p>
        </section>
        <section id="tab4">
            <h2>Tab 4</h2>
            <p>Content of tab panel</p>
        </section>
    </wc-tabcontent>
</wc-tabpanel>
```

### Tooltip

```html
    <wc-tooltip direction="top" title="Tooltip on top"><a href="javascript:;">Top tootip</a></wc-tooltip>
```


## Roadmap
- Implement datepicker with momentjs
- Improve input mask
- Increment styles of components
- Review and test all components