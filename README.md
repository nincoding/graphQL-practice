# graphQL-practice

아고라스테이츠의 라이브 데이터 받아오기

## 진행 순서

```js
// CRA 리액트 앱 만들기
npx create-react-app app

// @octokit/graphql 설치
// graphQL의 쿼리를 로컬 환경에서 쉽게 수행할 수 있게 도와주는 라이브러리
npm install @octokit/graphql
```

### GitHub Personal Access Token 발급받기

**GitHub Personal Access Token**은 GitHub에서 API를 사용하기 위해 발급하는 인증 키입니다.

발급받은 토큰은 GitHub에서 인증을 받아 인증된 요청을 보낼 수 있습니다.

- GitHub에 로그인하고 오른쪽 상단에 있는 프로필 아이콘에서 `Settings`을 선택
- 왼쪽 메뉴에서 `Developer settings`를 선택하고, `Personal access tokens`을 선택
- `Generate new token`을 클릭후, 필요한 권한을 선택
- `Generate token`을 클릭, 생성된 토큰을 안전한 곳에 보관

보안상의 이유로, 발급받은 토큰을 소스코드에 직접 적는 것은 권장되지 않습니다.

그러므로, 발급받은 토큰을 소스코드에 직접 적는 대신,
외부 파일이나 환경 변수로 저장하고, 소스코드에서 해당 값을 불러오는 방법을 사용하는 것이 좋습니다.

1. `.env` 파일을 프로젝트 루트 디렉토리에 생성

```makefile
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=발급받은_토큰_값
```

2. .env 파일을 불러오기 (CRA에서는 스킵)

.env 파일의 내용은 `process.env` 객체를 통해 불러올 수 있습니다.
`process.env` 객체를 사용하기 위해서는 `dotenv` 라이브러리를 설치해야 합니다.

```bash
npm install dotenv --save-dev
```

하지만 CRA환경에서는 dotenv를 따로 설치할 필요가 없습니다.

3. process.env 객체를 통해 사용되는 파일에서 불러오기

```js
// App.js
function App() {
    const mytoken = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

    return ();
}
```

4. `.gitignore` 파일에 `.env` 파일을 추가하기

주의 할 점은 `.env` 파일은 `.gitignore` 파일에 추가하여 깃 저장소에 업로드되지 않도록 설정해야 합니다.

.gitignore 파일에 아래와 같은 한 줄을 추가합니다.

```bash
.env
```

이제 .env 파일에 저장된 민감한 정보들은 깃 저장소에 업로드되지 않습니다.
