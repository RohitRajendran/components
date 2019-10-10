# DataTable

DataTable is a component for displaying tabular data. It's API matches that of
[React-Table v6](https://github.com/tannerlinsley/react-table/tree/v6).

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import DataTable from '@unitedincome/components/dist/DataTable';
```

```javascript
import {DataTable} from '@unitedincome/components';
```

## Example 🚀

```javascript
<DataTable
  columns={[{accessor: 'name', Header: 'Name'}]}
  data={[{name: 'Bob'}]}
/>
```
