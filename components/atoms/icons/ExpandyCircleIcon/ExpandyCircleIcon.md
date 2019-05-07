# ExpandyCircleIcon Component

The ExpandyCircleIcon component creates an arrow icon using inline SVG.

## Example 🚀

```javascript
<ExpandyCircleIcon fill="#000" height="2rem" width="2rem" />
```

## Animating

If you'd like to apply an animation to the arrow icon you can do so with CSS by transitioning on `transform`. An example of this would look something like this:

```css
.arrow-icon {
  transition: transform 0.2s ease-in-out;
}
```

```javascript
<ExpandyCircleIcon className="arrow-icon" fill="#000" height="2rem" width="2rem" />
```
