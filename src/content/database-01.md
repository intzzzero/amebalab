---
title: "Database TIL 01"
date: "2020-09-03"
draft: false
category: "Database"
path: "/blog/database-til-01"
---

## Database & MySQL

- 인강과 책을 통해 Database와 MySQL을 공부하며 정리
- ([인프런 - DATABASE 1&2 - MySQL](https://www.inflearn.com/course/database-2-mysql-%EA%B0%95%EC%A2%8C#)

## Database

- 핵심은 데이터의 입력과 출력
- CRUD에서 C(create), U(update), D(delete)가 입력, R(read)이 출력
- RDBMS나 NoSQL이나 공통적인 핵심은 CRUD - [DB-Engines Ranking - popularity ranking of database management systems](https://db-engines.com/en/ranking)
- 모든 데이터가 관계형 데이터베이스(RDBMS)에 적합한 것은 아니기 때문에 NoSQL 데이터베이스가 등장했음

## 기본 용어

- 기본적으로 데이터가 기록되는 곳은 Table
- 여러 Table이 담긴 곳이 Database
- 용어를 구분하기 위해 Database 대신 Schema라는 용어를 사용함 - 즉, Table이 그루핑 하는 것이 Schema
- 이 모든 것을 포괄하는 것이 Database server
- Table의 가로축은 row, 세로축은 column

## MySQL

- [MySQL Cheat Sheet · GitHub](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)
- 핵심은 SELECT -> 가장 많이 사용하고, 다양한 조합이 가능하다.
- WHERE를 빠뜨리면 돌이킬 수 없는 재앙이 일어난다. 특히, UPDATE, DELETE에서는 반드시 필요하므로 한 번 더 확인하는 습관을 갖자.
