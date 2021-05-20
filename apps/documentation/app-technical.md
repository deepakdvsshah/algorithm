---
---

# Phrase secret Search

## Document History

| **Version Number** |  **Date**  | **Edited by** | **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :------------------: |
|        1.0         | 19-05-2021 |  Deepak Shah  | Initial Documentation |

## Introduction

```
This is a application which contains one header and add dependency from 2 feature i.e, search.
```

## Preconditions

To integrate feature to application there are two ways.
1.load children
 {
    path: '',
    loadChildren: () =>
      import('@rabbi-challenge/secret-phrase').then(
        (m) => m.SecretPhraseModule
      ),
  },
2.html binding
<rabbi-challenge-secret-phrase></rabbi-challenge-secret-phrase>

## Logic

**Search phrase**
for search secret phrase we need add this lib feature so it will load as lazy component.
Added one more lazy lib in secret phrase name is character map.

## Post-conditions

After Integration of secret-phrase feature we can do find secret phrase.

## Dependency

App contains 2 feature which mentioned at below :

## character map
## secret phrase
