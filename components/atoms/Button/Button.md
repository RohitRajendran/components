# Button

The Button component displays a HTML button.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Button from '@unitedincome/components/dist/Button';
```

```javascript
import {Button} from '@unitedincome/components';
```

## Example 🚀

```javascript
<Button variant="primary" light={false} dark={true} disabled={false}>
  Submit
</Button>
```

## Using with React Router
If you're using `react-router-dom` or something similar in one of your projects, you can pass in a custom wrapper for route changes. This can be achieved by utilizing the `linkComponent` prop. 

```javascript
import React from 'react';
import {Button} from '@unitedincome/components';
import {Link} from 'react-router-dom';

const Component = (props) => <Button linkComponent={Link} to="https://unitedincome.com" />;
```

If a `linkComponent` is not provided then buttons with a `to` prop will default to a standard anchor tag.
