# DateUtils Component

Date utility functions for things such as input validation.

## Example 🚀

The following functions are available.

### isAfterMonth

Determines if the provided month/year comes after the current month/year.

```javascript
import {isAfterMonth} from '@unitedincome/components';

isAfterMonth('12/2020');

// true/false
```

### isBeforeMonth

Determines if the provided month/year comes before the current month/year.

```javascript
import {isBeforeMonth} from '@unitedincome/components';

isBeforeMonth('12/2020');

// true/false
```

### isSameOrBeforeMonth

Determines if the provided month/year is the same as or before the current month/year.

```javascript
import {isSameOrBeforeMonth} from '@unitedincome/components';

isSameOrBeforeMonth('12/2020');

// true/false
```
