---
title: POC 
description: Use translation content from rancher/dashboard for labels in the docs.
---

import T from '@site/src/components/Text'

# Hello <T p="foo.bar.baz"/>!

Instead of writing the following in markdown:

```markdown
Click on **toto**
```

you'd write

```markdown
Click on **<T p="foo.bar.baz"/>**
```

which would result in

Click on **<T p="foo.bar.baz"/>**

So no need to search and replace if the label ever changes!
