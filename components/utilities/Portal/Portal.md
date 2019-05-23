# Portal Component

Creates a [React Portal](https://reactjs.org/docs/portals.html) which pulls DOM nodes out of their container.

## Example 🚀

```javascript
<Portal>
  <CabinetInterior />
</Portal>
```

## Forwarding Refs

For elements which require click handlers which interact with the body, you can forward a `ref` into the child component like so. This will allow your parent component to see when the portaled child has been interacted with.

```javascript
<Portal>
  <CabinetInterior
    ref={this.cabinetNode}
    >
      {children}
    </CabinetInterior>
</Portal>

const CabinetInterior = React.forwardRef((props, ref) => {
  return <aside {...props} ref={ref} />;
});
```
