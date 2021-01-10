---
title: "Deno TIL 01"
date: "2021-01-10"
draft: false
category: "Node"
path: "/blog/deno-til-01"
---

![](https://i.morioh.com/200603/8ee3501d.jpg)

## Deno?

- 디노는 자바스크립트와 타입스크립트를 실행할 수 있는 실행환경

## Deno의 기반 기술

- V8 엔진
- RUST
- Tokio(event loop)
- TypeScript

## Deno를 만든 이유

![](https://tsh.io/wp-content/uploads/2019/06/node-modules-app-performance_.png)

- Node.js를 만든 라이언 달이 만들었음.
- Node.js에 단점과 오래된 기술이 쓰였다는 점이 마음에 안 들었음.
  - npm, node_modules의 단점 -> 모듈이 한 곳에 집중되는 것이 문제
  - 다수의 레거시 API를 서포트하지 못함
  - 아무나 접근 가능한 구조이기에 보안에 취약함
- Node.js를 고치는 것보다 Node.js의 단점을 보완한 새로운 실행환경을 만드는 게 낫겠다고 생각
- [노드js 제작자, 신규 자바스크립트 런타임 ‘디노’ 출시](https://zdnet.co.kr/view/?no=20200517152321)

## Deno의 특징

- ES Modules만 유일하게 사용
  - Node.js와 달리 URL을 사용하여 직접적으로 Import
  - Deno 자체가 패키지매니저의 역할까지 함 -> npm이 필요 없음
- Deno는 권한에 대한 플래그를 설정할 수 있음
- Deno는 샌드박스와 같아서 외부환경(Network, FileSystem, EnvironmentVariables, Excution of other scripts)에 영향을 주지 않음 -> 따라서 Deno가 외부환경에 접근하기 위해서는 특정 플래그가 필요함
- TypeScript가 기본으로 내장되어 있음. 별도 모듈이나 설정이 필요없음.
- top level에서 `async` 없이 `await`만 사용 가능
- 브라우저 호환성이 좋음
  - Node.js에서는 node-fetch 등의 모듈이 필요했으나 Deno에서는 필요 없음(브라우저API에 내장된 fetch를 사용함)
- Node.js에서는 모듈을 가져올 때 `require`(commonJS)를 썼지만, Deno에서는 `export`, `import`(ES Modules) 문법 사용 가능
