# DateUtils Component

Date utility functions for things such as input validation.

## Example 🚀

The following functions are available.

### isAfterMonth

Determines if the provided month/year comes after the current month/year.

```javascript
import {DateUtils} from '@unitedincome/components';

DateUtils.isAfterMonth('12/2020');

// true/false
```

### isBeforeMonth

Determines if the provided month/year comes before the current month/year.

```javascript
import {DateUtils} from '@unitedincome/components';

DateUtils.isBeforeMonth('12/2020');

// true/false
```

### isSameOrBeforeMonth

Determines if the provided month/year is the same as or before the current month/year.

```javascript
import {DateUtils} from '@unitedincome/components';

DateUtils.isSameOrBeforeMonth('12/2020');

// true/false
```

### isSameOrAfterMonth

Determines if the provided month/year is the same as or after the current month/year.

```javascript
import {DateUtils} from '@unitedincome/components';

DateUtils.isSameOrAfterMonth('12/2020');

// true/false
```
