# 제11회 대한민국 약사학술제 웹사이트

2026년 11월 29일 서울 양재 aT센터에서 열리는 제11회 대한민국 약사학술제의 반응형 안내 사이트입니다.

## 실행

의존성 없이 `index.html`을 열어도 확인할 수 있습니다. 개발 서버는 아래 명령으로 실행합니다.

```bash
npm install
npm run dev
```

## 배포 빌드

- Cloudflare Pages: `npm run build` 실행 후 출력 폴더를 `dist`로 사용합니다.
- OpenAI Sites: `npm run build:sites`로 Sites 전용 `dist/client` 및 `dist/server` 구조를 생성합니다.

GitHub와 연동된 Cloudflare Pages는 기본 `npm run build`를 사용하므로 Sites 배포 구조의 영향을 받지 않습니다.

## 페이지

- `index.html`: 행사 소개와 핵심 정보
- `program.html`: 3개 강의실, 10:00–17:00 시간표
- `venue.html`: 층별 강의실 안내와 오시는 길

모든 페이지 오른쪽 아래에 기본 행사 정보를 답변하는 안내 챗봇이 포함되어 있습니다. 현재는 프론트엔드 규칙 기반이며, 추후 실제 AI API로 교체할 수 있습니다.
